"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/hooks/use-auth"

export default function SettingsPage() {
  const { user } = useAuth()
  const [accountSettings, setAccountSettings] = useState({
    name: user?.name || "",
    username: user?.username || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [systemSettings, setSystemSettings] = useState({
    maintenanceMode: false,
    apiLogging: true,
    emailNotifications: true,
    backupFrequency: "daily",
  })

  const handleAccountUpdate = () => {
    alert("Account settings updated!")
  }

  const handleSystemUpdate = () => {
    alert("System settings updated!")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account and system settings</p>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">Account Settings</TabsTrigger>
          <TabsTrigger value="system">System Settings</TabsTrigger>
          <TabsTrigger value="logs">Activity Logs</TabsTrigger>
        </TabsList>

        {/* Account Settings */}
        <TabsContent value="account" className="mt-6">
          <Card className="p-6 max-w-2xl">
            <h2 className="text-xl font-semibold mb-6">Account Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <Input
                  value={accountSettings.name}
                  onChange={(e) => setAccountSettings({ ...accountSettings, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Username</label>
                <Input
                  type="text"
                  value={accountSettings.username}
                  onChange={(e) => setAccountSettings({ ...accountSettings, username: e.target.value })}
                />
              </div>

              <hr className="my-6" />

              <h3 className="font-semibold">Change Password</h3>

              <div>
                <label className="block text-sm font-medium mb-1">Current Password</label>
                <Input
                  type="password"
                  value={accountSettings.currentPassword}
                  onChange={(e) => setAccountSettings({ ...accountSettings, currentPassword: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">New Password</label>
                <Input
                  type="password"
                  value={accountSettings.newPassword}
                  onChange={(e) => setAccountSettings({ ...accountSettings, newPassword: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Confirm Password</label>
                <Input
                  type="password"
                  value={accountSettings.confirmPassword}
                  onChange={(e) => setAccountSettings({ ...accountSettings, confirmPassword: e.target.value })}
                />
              </div>

              <Button onClick={handleAccountUpdate}>Save Changes</Button>
            </div>
          </Card>
        </TabsContent>

        {/* System Settings */}
        <TabsContent value="system" className="mt-6">
          <Card className="p-6 max-w-2xl">
            <h2 className="text-xl font-semibold mb-6">System Configuration</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3 p-4 border rounded cursor-pointer hover:bg-muted/50">
                <input
                  type="checkbox"
                  checked={systemSettings.maintenanceMode}
                  onChange={(e) => setSystemSettings({ ...systemSettings, maintenanceMode: e.target.checked })}
                  className="w-4 h-4"
                />
                <div>
                  <p className="font-medium">Maintenance Mode</p>
                  <p className="text-sm text-muted-foreground">Enable during maintenance</p>
                </div>
              </label>

              <label className="flex items-center gap-3 p-4 border rounded cursor-pointer hover:bg-muted/50">
                <input
                  type="checkbox"
                  checked={systemSettings.apiLogging}
                  onChange={(e) => setSystemSettings({ ...systemSettings, apiLogging: e.target.checked })}
                  className="w-4 h-4"
                />
                <div>
                  <p className="font-medium">API Logging</p>
                  <p className="text-sm text-muted-foreground">Log all API requests</p>
                </div>
              </label>

              <label className="flex items-center gap-3 p-4 border rounded cursor-pointer hover:bg-muted/50">
                <input
                  type="checkbox"
                  checked={systemSettings.emailNotifications}
                  onChange={(e) => setSystemSettings({ ...systemSettings, emailNotifications: e.target.checked })}
                  className="w-4 h-4"
                />
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive system alerts</p>
                </div>
              </label>

              <div>
                <label className="block text-sm font-medium mb-2">Backup Frequency</label>
                <select
                  value={systemSettings.backupFrequency}
                  onChange={(e) => setSystemSettings({ ...systemSettings, backupFrequency: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              <Button onClick={handleSystemUpdate}>Save Changes</Button>
            </div>
          </Card>
        </TabsContent>

        {/* Activity Logs */}
        <TabsContent value="logs" className="mt-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Activity Log</h2>
            <div className="space-y-3">
              {[
                { action: "Login", time: "2 hours ago", ip: "192.168.1.1" },
                { action: "User Created", time: "4 hours ago", ip: "192.168.1.1" },
                { action: "Product Updated", time: "1 day ago", ip: "192.168.1.1" },
                { action: "Order Status Changed", time: "2 days ago", ip: "192.168.1.1" },
                { action: "Settings Modified", time: "3 days ago", ip: "192.168.1.1" },
              ].map((log, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">{log.action}</p>
                    <p className="text-sm text-muted-foreground">IP: {log.ip}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{log.time}</p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
