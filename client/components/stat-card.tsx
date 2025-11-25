import { Card } from "./ui/card"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  description?: string
  icon: LucideIcon
  trend?: number
}

export function StatCard({ title, value, description, icon: Icon, trend }: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
          {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
          {trend !== undefined && (
            <p className={`text-xs font-medium mt-2 ${trend >= 0 ? "text-green-600" : "text-red-600"}`}>
              {trend >= 0 ? "+" : ""}
              {trend}% from last month
            </p>
          )}
        </div>
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </Card>
  )
}
