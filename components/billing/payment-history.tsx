"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, Calendar } from "lucide-react"

export function PaymentHistory() {
  const invoices = [
    {
      id: "INV-2024-001",
      date: "15 Jan 2024",
      amount: "€49.00",
      status: "paid",
      plan: "Professional",
      period: "Jan 2024",
    },
    {
      id: "INV-2023-012",
      date: "15 Dez 2023",
      amount: "€49.00",
      status: "paid",
      plan: "Professional",
      period: "Dez 2023",
    },
    {
      id: "INV-2023-011",
      date: "15 Nov 2023",
      amount: "€49.00",
      status: "paid",
      plan: "Professional",
      period: "Nov 2023",
    },
    {
      id: "INV-2023-010",
      date: "15 Out 2023",
      amount: "€19.00",
      status: "paid",
      plan: "Starter",
      period: "Out 2023",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Pago</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pendente</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Falhado</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold text-gray-900">Histórico de Pagamentos</CardTitle>
          <CardDescription>Todas as tuas faturas e pagamentos</CardDescription>
        </div>
        <Button size="sm" variant="outline">
          <Calendar className="w-4 h-4 mr-2" />
          Filtrar
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-gray-900">{invoice.id}</span>
                {getStatusBadge(invoice.status)}
              </div>
              <p className="text-sm text-gray-600">
                {invoice.plan} - {invoice.period}
              </p>
              <p className="text-xs text-gray-500">{invoice.date}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="font-semibold text-gray-900">{invoice.amount}</div>
              </div>

              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}

        <div className="pt-4 border-t border-gray-100 text-center">
          <Button variant="outline" size="sm">
            Ver Todas as Faturas
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
