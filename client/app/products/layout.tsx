import type React from "react"
import AdminLayout from "@/app/admin-layout"

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminLayout>{children}</AdminLayout>
}
