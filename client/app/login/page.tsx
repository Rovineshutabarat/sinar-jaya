"use client"

import type React from "react"
import {useState} from "react"
import {useRouter} from "next/navigation"
import {useAuth} from "@/hooks/use-auth"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Card} from "@/components/ui/card"

export default function LoginPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const {login} = useAuth()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)

        try {
            await login(username, password)
            router.push("/dashboard")
        } catch (err) {
            setError(err instanceof Error ? err.message : "Login failed")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="w-full max-w-md">
                {/* Logo Section */}
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Sinar Jaya Admin</h1>
                    <p className="text-slate-400">Admin Dashboard</p>
                </div>

                <Card className="p-8 bg-slate-800 border-slate-700">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div
                                className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400">{error}</div>
                        )}

                        <div>
                            <label className="block text-sm font-semibold text-slate-200 mb-2">Username</label>
                            <Input
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                disabled={isLoading}
                                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-200 mb-2">Password</label>
                            <Input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={isLoading}
                                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2"
                            disabled={isLoading}
                        >
                            {isLoading ? "Signing in..." : "Sign In"}
                        </Button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-slate-700 text-center text-sm">
                        <span className="text-slate-400">Don't have an account? </span>
                        <Link href="/register" className="font-semibold text-blue-400 hover:text-blue-300 transition">
                            Create one
                        </Link>
                    </div>
                </Card>

            </div>
        </div>
    )
}
