"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Product } from "@/lib/types"
import { Card } from "@/components/ui/card"

interface ProductDetailDialogProps {
  isOpen: boolean
  onClose: () => void
  product: Product
}

export function ProductDetailDialog({ isOpen, onClose, product }: ProductDetailDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Product Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Card className="p-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Product Name</p>
                <p className="font-medium">{product.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Description</p>
                <p className="font-medium">{product.description}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-medium">${product.price}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Stock</p>
                  <p className={`font-medium ${product.stock < 50 ? "text-destructive" : ""}`}>{product.stock}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <p className="font-medium">{product.category}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Added On</p>
                <p className="font-medium">{product.createdAt.toLocaleDateString()}</p>
              </div>
            </div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
