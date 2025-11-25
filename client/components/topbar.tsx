"use client"

import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Bell, LogOut, Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export function Topbar() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  const toggleDarkMode = () => {
    const root = document.documentElement
    if (root.classList.contains("dark")) {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  return (
    <div className="sticky top-0 z-20 border-b border-slate-700 bg-gradient-to-r from-slate-800/95 to-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-800/60">
      <div className="flex items-center justify-between px-6 py-4 md:ml-0">
        {/* Search */}
        <div className="hidden md:flex flex-1">
          <Input
            placeholder="Search..."
            className="max-w-sm bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
          />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative text-slate-300 hover:text-white hover:bg-slate-700">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
          </Button>

          {/* Dark mode toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-slate-300 hover:text-white hover:bg-slate-700"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* User menu */}
          <div className="flex items-center gap-3 border-l border-slate-700 pl-4">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-white">{user?.name}</p>
              <p className="text-xs text-slate-400 capitalize">{user?.role}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              title="Logout"
              className="text-slate-300 hover:text-white hover:bg-red-600/10"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
