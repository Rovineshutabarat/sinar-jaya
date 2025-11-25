"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { dummyTickets } from "@/lib/fake-data"
import { ChevronDown } from "lucide-react"

export default function SupportPage() {
  const [expandedFaqIdx, setExpandedFaqIdx] = useState<number | null>(null)

  const faqs = [
    {
      q: "How do I create a new product?",
      a: 'Click the "Add Product" button in the Products section. Fill in the product details and click Save.',
    },
    {
      q: "How do I update order status?",
      a: "Go to Orders, find the order, click the Edit button, and select the new status from the dropdown.",
    },
    {
      q: "Can I export sales data?",
      a: 'Yes, go to Reports and click the "Export CSV" button to download sales data.',
    },
    {
      q: "How do I manage user roles?",
      a: "In the Users section, edit a user and change their role to Admin or User.",
    },
    {
      q: "Is there a backup system?",
      a: "Yes, you can configure backup frequency in Settings under System Settings.",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Support Center</h1>
        <p className="text-muted-foreground mt-1">Get help and manage support tickets</p>
      </div>

      <Tabs defaultValue="faq" className="w-full">
        <TabsList>
          <TabsTrigger value="faq">FAQs</TabsTrigger>
          <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
        </TabsList>

        {/* FAQs */}
        <TabsContent value="faq" className="mt-6">
          <Card className="p-6 max-w-2xl">
            <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border rounded-lg">
                  <button
                    onClick={() => setExpandedFaqIdx(expandedFaqIdx === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 hover:bg-muted/50"
                  >
                    <p className="font-medium text-left">{faq.q}</p>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${expandedFaqIdx === idx ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedFaqIdx === idx && <div className="px-4 pb-4 text-muted-foreground border-t">{faq.a}</div>}
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Support Tickets */}
        <TabsContent value="tickets" className="mt-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Support Tickets</h2>
            <div className="space-y-3">
              {dummyTickets.map((ticket) => (
                <div key={ticket.id} className="p-4 border rounded-lg hover:bg-muted/50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-semibold">
                          Ticket #{ticket.id}: {ticket.subject}
                        </p>
                        <span
                          className={`text-xs px-2 py-1 rounded font-medium ${
                            ticket.status === "resolved"
                              ? "bg-green-100 text-green-800"
                              : ticket.status === "in-progress"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {ticket.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{ticket.description}</p>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>Priority: {ticket.priority}</span>
                        <span>Created: {ticket.createdAt.toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
