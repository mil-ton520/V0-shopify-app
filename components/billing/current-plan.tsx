"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Crown, Calendar, CheckCircle } from "lucide-react"

export function CurrentPlan() {
  const currentPlan = {
    name: "Professional",
    price: "€49",
    period: "mês",
    status: "active",
    nextBilling: "15 de Fevereiro, 2024",
    features: [
      "Até 5,000 carrinhos/mês",
      "Vídeos ilimitados",
      "Todos os canais (Email, WhatsApp, Push)",
      "Analytics avançados",
      "Suporte prioritário",
    ],
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Crown className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-gray-900">Plano Atual</CardTitle>
              <CardDescription>Gere a tua subscrição ativa</CardDescription>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            <CheckCircle className="w-3 h-3 mr-1" />
            Ativo
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{currentPlan.name}</h3>
            <p className="text-gray-600">
              {currentPlan.price}/{currentPlan.period}
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <Calendar className="w-4 h-4" />
              Próxima cobrança
            </div>
            <p className="font-medium text-gray-900">{currentPlan.nextBilling}</p>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-3">Funcionalidades incluídas:</h4>
          <ul className="space-y-2">
            {currentPlan.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="outline" className="flex-1 bg-transparent">
            Alterar Plano
          </Button>
          <Button variant="outline" className="flex-1 text-red-600 border-red-200 hover:bg-red-50 bg-transparent">
            Cancelar Subscrição
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
