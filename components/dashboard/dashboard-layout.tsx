"use client"

import type React from "react"

import { AppSidebar } from "./app-sidebar"
import { DashboardHeader } from "./dashboard-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
  user: any
}

export function DashboardLayout({ children, user }: DashboardLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader user={user} />
        <main className="flex-1 bg-gray-50">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
