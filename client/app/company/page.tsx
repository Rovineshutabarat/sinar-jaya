"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CompanyPage() {
  const [companyInfo, setCompanyInfo] = useState({
    name: "Tech Commerce Inc.",
    email: "contact@techcommerce.com",
    phone: "+1 (555) 123-4567",
    website: "www.techcommerce.com",
    address: "123 Tech Street, San Francisco, CA 94105",
    description: "Leading provider of quality tech products and accessories.",
  })

  const [taxInfo, setTaxInfo] = useState({
    taxId: "TN-123456789",
    taxRate: "8.5",
    country: "United States",
    state: "California",
  })

  const [settings, setSettings] = useState({
    currency: "USD",
    timezone: "America/Los_Angeles",
    language: "English",
  })

  const handleCompanyUpdate = () => {
    alert("Company information updated successfully!")
  }

  const handleTaxUpdate = () => {
    alert("Tax information updated successfully!")
  }

  const handleSettingsUpdate = () => {
    alert("Settings updated successfully!")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Company Management</h1>
        <p className="text-muted-foreground mt-1">Manage company information and settings</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList>
          <TabsTrigger value="profile">Company Profile</TabsTrigger>
          <TabsTrigger value="tax">Tax Information</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Company Profile */}
        <TabsContent value="profile" className="mt-6">
          <Card className="p-6 max-w-2xl">
            <h2 className="text-xl font-semibold mb-6">Company Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Company Name</label>
                <Input
                  value={companyInfo.name}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input
                    type="email"
                    value={companyInfo.email}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <Input
                    value={companyInfo.phone}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Website</label>
                <Input
                  value={companyInfo.website}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, website: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <Input
                  value={companyInfo.address}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, address: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <Textarea
                  value={companyInfo.description}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, description: e.target.value })}
                  rows={4}
                />
              </div>

              <Button onClick={handleCompanyUpdate}>Save Changes</Button>
            </div>
          </Card>
        </TabsContent>

        {/* Tax Information */}
        <TabsContent value="tax" className="mt-6">
          <Card className="p-6 max-w-2xl">
            <h2 className="text-xl font-semibold mb-6">Tax Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Tax ID</label>
                <Input value={taxInfo.taxId} onChange={(e) => setTaxInfo({ ...taxInfo, taxId: e.target.value })} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Tax Rate (%)</label>
                  <Input
                    type="number"
                    value={taxInfo.taxRate}
                    onChange={(e) => setTaxInfo({ ...taxInfo, taxRate: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Country</label>
                  <Input
                    value={taxInfo.country}
                    onChange={(e) => setTaxInfo({ ...taxInfo, country: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">State/Province</label>
                <Input value={taxInfo.state} onChange={(e) => setTaxInfo({ ...taxInfo, state: e.target.value })} />
              </div>

              <Button onClick={handleTaxUpdate}>Save Changes</Button>
            </div>
          </Card>
        </TabsContent>

        {/* Settings */}
        <TabsContent value="settings" className="mt-6">
          <Card className="p-6 max-w-2xl">
            <h2 className="text-xl font-semibold mb-6">General Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Currency</label>
                <Input
                  value={settings.currency}
                  onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Timezone</label>
                <Input
                  value={settings.timezone}
                  onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Language</label>
                <Input
                  value={settings.language}
                  onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                />
              </div>

              <Button onClick={handleSettingsUpdate}>Save Changes</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
