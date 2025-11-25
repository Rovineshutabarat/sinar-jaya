"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Order } from "@/lib/types"
import { Card } from "@/components/ui/card"
import { dummyUsers, dummyProducts } from "@/lib/fake-data"

interface OrderDetailDialogProps {
  isOpen: boolean
  onCloseAction: () => void
  order: Order
}

export function OrderDetailDialog({ isOpen, onCloseAction, order }: OrderDetailDialogProps) {
  const customer = dummyUsers.find((u) => u.id === order.userId)

  return (
    <Dialog open={isOpen} onOpenChange={onCloseAction}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Order Details - #{order.id}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Customer Info */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Customer Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Name</p>
                <p className="font-medium">{customer?.name}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Username</p>
                <p className="font-medium">{customer?.username}</p>
              </div>
            </div>
          </Card>

          {/* Order Items */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Order Items</h3>
            <div className="space-y-2">
              {order.items.map((item, idx) => {
                const product = dummyProducts.find((p) => p.id === item.productId)
                return (
                  <div key={idx} className="flex items-center justify-between p-2 border rounded">
                    <div>
                      <p className="font-medium">{product?.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${item.price * item.quantity}</p>
                  </div>
                )
              })}
            </div>
          </Card>

          {/* Order Summary */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium capitalize">{order.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Order Date</span>
                <span className="font-medium">{order.createdAt.toLocaleDateString()}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold">
                <span>Total</span>
                <span>${order.total}</span>
              </div>
            </div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
