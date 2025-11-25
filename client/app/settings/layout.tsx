import type React from "react"
import AdminLayout from "@/app/admin-layout"

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminLayout>{children}</AdminLayout>
}
