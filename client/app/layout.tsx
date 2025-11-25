import type React from "react"
import { Analytics } from "@vercel/analytics/react"
import { AuthProvider } from "@/context/auth-context"
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <AuthProvider>{children}</AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
