"use client"

import { StatCard } from "@/components/stat-card"
import { Card } from "@/components/ui/card"
import { Users, Package, ShoppingCart, TrendingUp } from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { dummyUsers, dummyProducts, dummyOrders } from "@/lib/fake-data"

const salesData = [
  { month: "Jan", revenue: 4000, orders: 24 },
  { month: "Feb", revenue: 3000, orders: 21 },
  { month: "Mar", revenue: 2000, orders: 29 },
  { month: "Apr", revenue: 2780, orders: 39 },
  { month: "May", revenue: 1890, orders: 23 },
  { month: "Jun", revenue: 2390, orders: 34 },
]

const categoryData = [
  { name: "Electronics", value: 45, fill: "hsl(var(--chart-1))" },
  { name: "Accessories", value: 35, fill: "hsl(var(--chart-2))" },
  { name: "Cables", value: 20, fill: "hsl(var(--chart-3))" },
]

export default function DashboardPage() {
  const totalRevenue = dummyOrders.reduce((sum, order) => sum + order.total, 0)
  const totalUsers = dummyUsers.length
  const totalProducts = dummyProducts.length
  const lowStockProducts = dummyProducts.filter((p) => p.stock < 50).length

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's your sales overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          description="From all orders"
          icon={TrendingUp}
          trend={12}
        />
        <StatCard title="Total Users" value={totalUsers} description="Active users" icon={Users} trend={5} />
        <StatCard title="Total Products" value={totalProducts} description="In inventory" icon={Package} trend={-2} />
        <StatCard
          title="Low Stock Items"
          value={lowStockProducts}
          description="Need restocking"
          icon={ShoppingCart}
          trend={0}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue & Orders Chart */}
        <Card className="lg:col-span-2 p-6">
          <h2 className="text-lg font-semibold mb-4">Revenue & Orders</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="hsl(var(--chart-1))" name="Revenue ($)" />
              <Line type="monotone" dataKey="orders" stroke="hsl(var(--chart-2))" name="Orders" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Category Distribution */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Products by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Order Status Chart */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Orders by Status</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={[
              { status: "Pending", count: dummyOrders.filter((o) => o.status === "pending").length },
              { status: "Processing", count: dummyOrders.filter((o) => o.status === "processing").length },
              { status: "Shipped", count: dummyOrders.filter((o) => o.status === "shipped").length },
              { status: "Delivered", count: dummyOrders.filter((o) => o.status === "delivered").length },
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="status" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="hsl(var(--chart-1))" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {dummyOrders
            .slice(-5)
            .reverse()
            .map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium">Order #{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.createdAt.toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${order.total}</p>
                  <p
                    className={`text-sm capitalize ${
                      order.status === "delivered"
                        ? "text-green-600"
                        : order.status === "shipped"
                          ? "text-blue-600"
                          : order.status === "pending"
                            ? "text-yellow-600"
                            : "text-gray-600"
                    }`}
                  >
                    {order.status}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </Card>
    </div>
  )
}
