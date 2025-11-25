"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/data-table"
import { dummyUsers } from "@/lib/fake-data"
import { Plus, Eye, Edit2, Trash2 } from "lucide-react"
import type { User } from "@/lib/types"
import { UserFormDialog } from "./user-form-dialog"
import { UserDetailDialog } from "./user-detail-dialog"

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(dummyUsers)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  const handleAddUser = (user: Omit<User, "id" | "createdAt">) => {
    const newUser: User = {
      ...user,
      id: Math.max(...users.map((u) => u.id), 0) + 1,
      createdAt: new Date(),
    }
    setUsers([...users, newUser])
    setIsFormOpen(false)
  }

  const handleUpdateUser = (updated: User) => {
    setUsers(users.map((u) => (u.id === updated.id ? updated : u)))
    setIsFormOpen(false)
    setEditingUser(null)
  }

  const handleDeleteUser = (id: number) => {
    if (confirm("Are you sure?")) {
      setUsers(users.filter((u) => u.id !== id))
    }
  }

  const handleViewUser = (user: User) => {
    setSelectedUser(user)
    setShowDetails(true)
  }

  const handleEditUser = (user: User) => {
    setEditingUser(user)
    setIsFormOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Users Management</h1>
          <p className="text-muted-foreground mt-1">Manage all users in the system</p>
        </div>
        <Button
          onClick={() => {
            setEditingUser(null)
            setIsFormOpen(true)
          }}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      <Card className="p-6">
        <DataTable
          columns={[
            { label: "Name", key: "name" },
            { label: "Username", key: "username" },
            { label: "Role", key: "role", render: (role) => <span className="capitalize">{role.toString()}</span> },
            { label: "Joined", key: "createdAt", render: (date) => (date as Date).toLocaleDateString() },
          ]}
          data={users}
          actions={(user) => (
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={() => handleViewUser(user)}>
                <Eye className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => handleEditUser(user)}>
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => handleDeleteUser(user.id)}>
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          )}
        />
      </Card>

      <UserFormDialog
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false)
          setEditingUser(null)
        }}
        onSubmit={editingUser ? handleUpdateUser : handleAddUser}
        initialData={editingUser}
      />

      {selectedUser && (
        <UserDetailDialog isOpen={showDetails} onClose={() => setShowDetails(false)} user={selectedUser} />
      )}
    </div>
  )
}
