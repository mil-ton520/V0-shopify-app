"use client"
import { Button } from "@/components/ui/button"
import { Download, ArrowUpRight } from "lucide-react"
import { CurrentPlan } from "./current-plan"
import { PricingPlans } from "./pricing-plans"
import { PaymentHistory } from "./payment-history"
import { PaymentMethods } from "./payment-methods"
import { UsageOverview } from "./usage-overview"

export function BillingContent() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Billing & Planos</h1>
          <p className="text-gray-600 mt-1">Gere a tua subscrição, pagamentos e faturação.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Baixar Fatura
          </Button>
          <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
            <ArrowUpRight className="w-4 h-4 mr-2" />
            Upgrade
          </Button>
        </div>
      </div>

      {/* Current Plan & Usage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CurrentPlan />
        </div>
        <div>
          <UsageOverview />
        </div>
      </div>

      {/* Pricing Plans */}
      <PricingPlans />

      {/* Payment Methods & History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PaymentMethods />
        <PaymentHistory />
      </div>
    </div>
  )
}
