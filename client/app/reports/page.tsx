"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { dummyOrders } from "@/lib/fake-data"
import { Download } from "lucide-react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const salesData = [
  { month: "Jan", revenue: 4000, orders: 24, growth: 0 },
  { month: "Feb", revenue: 3000, orders: 21, growth: -25 },
  { month: "Mar", revenue: 2000, orders: 29, growth: -33 },
  { month: "Apr", revenue: 2780, orders: 39, growth: 39 },
  { month: "May", revenue: 1890, orders: 23, growth: -32 },
  { month: "Jun", revenue: 2390, orders: 34, growth: 26 },
]

const userGrowthData = [
  { month: "Jan", users: 10, activeUsers: 8 },
  { month: "Feb", users: 15, activeUsers: 12 },
  { month: "Mar", users: 20, activeUsers: 16 },
  { month: "Apr", users: 25, activeUsers: 20 },
  { month: "May", users: 28, activeUsers: 22 },
  { month: "Jun", users: 32, activeUsers: 25 },
]

export default function ReportsPage() {
  const totalRevenue = dummyOrders.reduce((sum, o) => sum + o.total, 0)
  const totalOrders = dummyOrders.length
  const avgOrderValue = (totalRevenue / totalOrders).toFixed(2)

  const handleExportCSV = () => {
    const csv =
      "Month,Revenue,Orders,Growth\n" +
      salesData.map((d) => `${d.month},${d.revenue},${d.orders},${d.growth}%`).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "sales-report.csv"
    a.click()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reports</h1>
          <p className="text-muted-foreground mt-1">View detailed analytics and reports</p>
        </div>
        <Button onClick={handleExportCSV}>
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Total Revenue</p>
          <p className="text-3xl font-bold mt-2">${totalRevenue.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground mt-2">Last 6 months</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Total Orders</p>
          <p className="text-3xl font-bold mt-2">{totalOrders}</p>
          <p className="text-xs text-muted-foreground mt-2">Completed orders</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Avg Order Value</p>
          <p className="text-3xl font-bold mt-2">${avgOrderValue}</p>
          <p className="text-xs text-muted-foreground mt-2">Average transaction</p>
        </Card>
      </div>

      <Tabs defaultValue="sales" className="w-full">
        <TabsList>
          <TabsTrigger value="sales">Sales Report</TabsTrigger>
          <TabsTrigger value="users">User Growth</TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="mt-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Sales & Revenue Trend</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="hsl(var(--chart-1))" name="Revenue ($)" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">User Growth Analysis</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="hsl(var(--chart-1))" name="Total Users" />
                <Bar dataKey="activeUsers" fill="hsl(var(--chart-2))" name="Active Users" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Detailed Table */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Monthly Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
                <th className="text-left py-3 px-4">Month</th>
                <th className="text-right py-3 px-4">Revenue</th>
                <th className="text-right py-3 px-4">Orders</th>
                <th className="text-right py-3 px-4">Growth</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((row) => (
                <tr key={row.month} className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4">{row.month}</td>
                  <td className="text-right py-3 px-4 font-medium">${row.revenue}</td>
                  <td className="text-right py-3 px-4">{row.orders}</td>
                  <td
                    className={`text-right py-3 px-4 font-medium ${row.growth >= 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    {row.growth >= 0 ? "+" : ""}
                    {row.growth}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
