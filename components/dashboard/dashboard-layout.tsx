"use client"

import type { ReactNode } from "react"
import { AppSidebar } from "./app-sidebar"
import { DashboardHeader } from "./dashboard-header"
import { SidebarProvider } from "@/components/ui/sidebar"

interface DashboardLayoutProps {
  children: ReactNode
  user: {
    id: string
    email: string
  }
}

export function DashboardLayout({ children, user }: DashboardLayoutProps) {
  return (
    <SidebarProvider defaultOpen>
      {/* 12-col grid alinhada aos breakpoints Polaris */}
      <div className="min-h-screen grid grid-cols-12 gap-4 sm:gap-4 md:gap-6 lg:gap-6 bg-background">
        {/* Sidebar — só visível ≥ md */}
        <aside className="hidden md:block md:col-span-4 lg:col-span-3 xl:col-span-2">
          <AppSidebar />
        </aside>

        {/* Área principal */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9 xl:col-span-10 flex flex-col">
          <DashboardHeader user={user} />
          <main className="flex-1 flex flex-col gap-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
