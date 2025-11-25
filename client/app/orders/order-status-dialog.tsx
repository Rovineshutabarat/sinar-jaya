"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Order } from "@/lib/types"
import { fakeDelay } from "@/lib/utils-async"

interface OrderStatusDialogProps {
  isOpen: boolean
  onCloseAction: () => void
  order: Order
  onStatusChange: (orderId: number, status: Order["status"]) => void
}

export function OrderStatusDialog({ isOpen, onCloseAction, order, onStatusChange }: OrderStatusDialogProps) {
  const [newStatus, setNewStatus] = useState<Order["status"]>(order.status)
  const [isLoading, setIsLoading] = useState(false)

  const statuses: Order["status"][] = ["pending", "processing", "shipped", "delivered", "cancelled"]

  const handleSubmit = async () => {
    if (newStatus === order.status) {
      onCloseAction()
      return
    }

    setIsLoading(true)
    await fakeDelay(300)
    onStatusChange(order.id, newStatus)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onCloseAction}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Order Status</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Order #{order.id}</p>
            <p className="text-sm text-muted-foreground mb-4">
              Current Status: <span className="font-medium capitalize">{order.status}</span>
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">New Status</label>
            <Select value={newStatus} onValueChange={(value) => setNewStatus(value as Order["status"])}>
              <SelectTrigger disabled={isLoading}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="outline" onClick={onCloseAction} disabled={isLoading}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading} onClick={handleSubmit}>
            {isLoading ? "Updating..." : "Update Status"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
