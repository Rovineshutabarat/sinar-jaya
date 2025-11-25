"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable } from "@/components/data-table"
import { dummyOrders, dummyUsers } from "@/lib/fake-data"
import { Eye, Edit2 } from "lucide-react"
import type { Order } from "@/lib/types"
import { OrderDetailDialog } from "./order-detail-dialog"
import { OrderStatusDialog } from "./order-status-dialog"

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(dummyOrders)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [showDetails, setShowDetails] = useState(false)
  const [showStatusDialog, setShowStatusDialog] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  const statuses = ["pending", "processing", "shipped", "delivered", "cancelled"] as const

  const handleUpdateStatus = (orderId: number, newStatus: Order["status"]) => {
    setOrders(orders.map((o) => (o.id === orderId ? { ...o, status: newStatus, updatedAt: new Date() } : o)))
    setShowStatusDialog(false)
  }

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order)
    setShowDetails(true)
  }

  const handleEditStatus = (order: Order) => {
    setSelectedOrder(order)
    setShowStatusDialog(true)
  }

  const filteredOrders = activeTab === "all" ? orders : orders.filter((o) => o.status === activeTab)

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "pending":
        return "bg-orange-100 text-orange-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Orders Management</h1>
        <p className="text-muted-foreground mt-1">View and manage all customer orders</p>
      </div>

      <Card className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All ({orders.length})</TabsTrigger>
            {statuses.map((status) => (
              <TabsTrigger key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)} ({orders.filter((o) => o.status === status).length})
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <DataTable
              columns={[
                { label: "Order ID", key: "id", render: (id) => `#${id}` },
                {
                  label: "Customer",
                  key: "userId",
                  render: (userId) => {
                    const user = dummyUsers.find((u) => u.id === userId)
                    return user?.name || "Unknown"
                  },
                },
                { label: "Total", key: "total", render: (total) => `$${total}` },
                {
                  label: "Status",
                  key: "status",
                  render: (status) => (
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium capitalize ${getStatusColor(status as Order["status"])}`}
                    >
                      {status}
                    </span>
                  ),
                },
                { label: "Date", key: "createdAt", render: (date) => (date as Date).toLocaleDateString() },
              ]}
              data={filteredOrders}
              actions={(order) => (
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" onClick={() => handleViewOrder(order)}>
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleEditStatus(order)}>
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </div>
              )}
            />
          </TabsContent>
        </Tabs>
      </Card>

      {selectedOrder && (
        <>
          <OrderDetailDialog isOpen={showDetails} onClose={() => setShowDetails(false)} order={selectedOrder} />
          <OrderStatusDialog
            isOpen={showStatusDialog}
            onClose={() => setShowStatusDialog(false)}
            order={selectedOrder}
            onStatusChange={handleUpdateStatus}
          />
        </>
      )}
    </div>
  )
}
