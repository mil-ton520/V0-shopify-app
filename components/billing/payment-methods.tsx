"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Plus, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function PaymentMethods() {
  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiryMonth: "12",
      expiryYear: "2025",
      isDefault: true,
    },
    {
      id: 2,
      type: "Mastercard",
      last4: "8888",
      expiryMonth: "08",
      expiryYear: "2026",
      isDefault: false,
    },
  ]

  const getCardIcon = (type: string) => {
    return <CreditCard className="w-5 h-5 text-gray-400" />
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold text-gray-900">Métodos de Pagamento</CardTitle>
          <CardDescription>Gere os teus cartões e métodos de pagamento</CardDescription>
        </div>
        <Button size="sm" variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              {getCardIcon(method.type)}
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">
                    {method.type} •••• {method.last4}
                  </span>
                  {method.isDefault && (
                    <Badge variant="secondary" className="text-xs">
                      Padrão
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  Expira em {method.expiryMonth}/{method.expiryYear}
                </p>
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {!method.isDefault && <DropdownMenuItem>Definir como padrão</DropdownMenuItem>}
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">Remover</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}

        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Os teus dados de pagamento estão seguros e encriptados. Aceitamos Visa, Mastercard, e American Express.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
