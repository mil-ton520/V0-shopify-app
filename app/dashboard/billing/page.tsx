"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { BillingContent } from "@/components/billing/billing-content"

// Mock user data para demonstração
const mockUser = {
  email: "demo@cartsaver.com",
  id: "demo-user-123",
}

export default function BillingPage() {
  return (
    <DashboardLayout user={mockUser}>
      <BillingContent />
    </DashboardLayout>
  )
}
