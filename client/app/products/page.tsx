"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable } from "@/components/data-table"
import { dummyProducts } from "@/lib/fake-data"
import { Plus, Eye, Edit2, Trash2 } from "lucide-react"
import type { Product } from "@/lib/types"
import { ProductFormDialog } from "./product-form-dialog"
import { ProductDetailDialog } from "./product-detail-dialog"

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(dummyProducts)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [showDetails, setShowDetails] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  const handleAddProduct = (product: Omit<Product, "id" | "createdAt">) => {
    const newProduct: Product = {
      ...product,
      id: Math.max(...products.map((p) => p.id), 0) + 1,
      createdAt: new Date(),
    }
    setProducts([...products, newProduct])
    setIsFormOpen(false)
  }

  const handleUpdateProduct = (updated: Product) => {
    setProducts(products.map((p) => (p.id === updated.id ? updated : p)))
    setIsFormOpen(false)
    setEditingProduct(null)
  }

  const handleDeleteProduct = (id: number) => {
    if (confirm("Are you sure?")) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product)
    setShowDetails(true)
  }

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product)
    setIsFormOpen(true)
  }

  const filteredProducts =
    activeTab === "all"
      ? products
      : activeTab === "low-stock"
        ? products.filter((p) => p.stock < 50)
        : products.filter((p) => p.category === activeTab)

  const categories = [...new Set(products.map((p) => p.category))]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Products Management</h1>
          <p className="text-muted-foreground mt-1">Manage inventory and product information</p>
        </div>
        <Button
          onClick={() => {
            setEditingProduct(null)
            setIsFormOpen(true)
          }}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      <Card className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All ({products.length})</TabsTrigger>
            <TabsTrigger value="low-stock">Low Stock ({products.filter((p) => p.stock < 50).length})</TabsTrigger>
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <DataTable
              columns={[
                { label: "Product Name", key: "name" },
                { label: "Category", key: "category" },
                { label: "Price", key: "price", render: (price) => `$${price}` },
                {
                  label: "Stock",
                  key: "stock",
                  render: (stock) => <span className={Number(stock) < 50 ? "text-destructive font-medium" : ""}>{stock.toString()}</span>,
                },
                { label: "Added", key: "createdAt", render: (date) => (date as Date).toLocaleDateString() },
              ]}
              data={filteredProducts}
              actions={(product) => (
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" onClick={() => handleViewProduct(product)}>
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleEditProduct(product)}>
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleDeleteProduct(product.id)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              )}
            />
          </TabsContent>
        </Tabs>
      </Card>

      <ProductFormDialog
        isOpen={isFormOpen}
        onCloseAction={() => {
          setIsFormOpen(false)
          setEditingProduct(null)
        }}
        onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
        initialData={editingProduct}
      />

      {selectedProduct && (
        <ProductDetailDialog isOpen={showDetails} onCloseAction={() => setShowDetails(false)} product={selectedProduct} />
      )}
    </div>
  )
}
