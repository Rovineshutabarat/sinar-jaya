import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"
import { ProtectedRoute } from "@/components/protected-route"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <Sidebar />
      <div className="md:ml-64 min-h-screen">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </ProtectedRoute>
  )
}
