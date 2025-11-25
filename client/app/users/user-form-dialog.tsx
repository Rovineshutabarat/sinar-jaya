"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type {User, UserRole} from "@/lib/types"
import { fakeDelay } from "@/lib/utils-async"

interface UserFormDialogProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (user: any) => void
  initialData?: User | null
}

export function UserFormDialog({ isOpen, onClose, onSubmit, initialData }: UserFormDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    role: "user" as UserRole,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        password: "",
        role: "user" as UserRole,
      })
    } else {
      setFormData({
        name: "",
        password: "",
        role: "user",
      })
    }
    setError("")
  }, [initialData, isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.name || (!initialData && !formData.password)) {
      setError("All fields are required")
      return
    }

    setIsLoading(true)
    await fakeDelay(300)

    try {
      if (initialData) {
        onSubmit({
          ...initialData,
          name: formData.name,
          role: formData.role,
          ...(formData.password && { password: formData.password }),
        })
      } else {
        onSubmit(formData)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{initialData ? "Edit User" : "Add New User"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</div>}

          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              disabled={isLoading}
            />
          </div>


          {!initialData && (
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <Input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                disabled={isLoading}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <Select
              value={formData.role}
              onValueChange={(role) => setFormData({ ...formData, role: role as "admin" | "user" })}
            >
              <SelectTrigger disabled={isLoading}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : initialData ? "Update" : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
