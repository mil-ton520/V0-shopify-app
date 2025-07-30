"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Crown, Zap, Building } from "lucide-react"

export function PricingPlans() {
  const plans = [
    {
      name: "Starter",
      price: "€19",
      period: "mês",
      description: "Perfeito para lojas pequenas",
      icon: Zap,
      features: [
        "Até 1,000 carrinhos/mês",
        "Vídeos básicos",
        "Email + WhatsApp",
        "Analytics básicos",
        "Suporte por email",
      ],
      current: false,
      popular: false,
    },
    {
      name: "Professional",
      price: "€49",
      period: "mês",
      description: "Para lojas em crescimento",
      icon: Crown,
      features: [
        "Até 5,000 carrinhos/mês",
        "Vídeos ilimitados",
        "Todos os canais",
        "Analytics avançados",
        "Suporte prioritário",
      ],
      current: true,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "€149",
      period: "mês",
      description: "Para grandes volumes",
      icon: Building,
      features: [
        "Carrinhos ilimitados",
        "Vídeos premium com IA",
        "Todos os canais + API",
        "Analytics personalizados",
        "Gestor de conta dedicado",
      ],
      current: false,
      popular: false,
    },
  ]

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Planos Disponíveis</CardTitle>
        <CardDescription>Escolhe o plano que melhor se adequa às tuas necessidades</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-lg border-2 transition-all ${
                plan.current
                  ? "border-blue-200 bg-blue-50"
                  : plan.popular
                    ? "border-blue-200 bg-blue-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 hover:bg-blue-500">
                  Mais Popular
                </Badge>
              )}

              {plan.current && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 hover:bg-green-500">
                  Plano Atual
                </Badge>
              )}

              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.current
                    ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
                disabled={plan.current}
              >
                {plan.current ? "Plano Atual" : "Escolher Plano"}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
