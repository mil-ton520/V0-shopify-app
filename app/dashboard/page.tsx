"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DashboardContent } from "@/components/dashboard/dashboard-content"

const mockUser = {
  email: "demo@cartsaver.com",
  id: "demo-user-123",
}

export default function DashboardPage() {
  return (
    <DashboardLayout user={mockUser}>
      <DashboardContent />
    </DashboardLayout>
  )
}
