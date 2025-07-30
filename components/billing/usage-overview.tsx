"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart3, Users, Play, Mail } from "lucide-react"

export function UsageOverview() {
  const usage = [
    {
      name: "Carrinhos Processados",
      current: 3247,
      limit: 5000,
      icon: BarChart3,
      color: "blue",
    },
    {
      name: "Vídeos Enviados",
      current: 2891,
      limit: "Ilimitado",
      icon: Play,
      color: "purple",
    },
    {
      name: "Clientes Ativos",
      current: 1456,
      limit: "Ilimitado",
      icon: Users,
      color: "green",
    },
    {
      name: "Emails Enviados",
      current: 8934,
      limit: "Ilimitado",
      icon: Mail,
      color: "orange",
    },
  ]

  const getProgressValue = (current: number, limit: number | string) => {
    if (limit === "Ilimitado") return 0
    return (current / (limit as number)) * 100
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-500"
      case "purple":
        return "bg-purple-100 text-purple-500"
      case "green":
        return "bg-green-100 text-green-500"
      case "orange":
        return "bg-orange-100 text-orange-500"
      default:
        return "bg-gray-100 text-gray-500"
    }
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Uso Atual</CardTitle>
        <CardDescription>Acompanha o teu uso mensal</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {usage.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-md flex items-center justify-center ${getColorClasses(item.color)}`}>
                  <item.icon className="w-3 h-3" />
                </div>
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
              </div>
              <span className="text-sm text-gray-500">
                {item.current.toLocaleString()} /{" "}
                {typeof item.limit === "number" ? item.limit.toLocaleString() : item.limit}
              </span>
            </div>
            {typeof item.limit === "number" && (
              <Progress value={getProgressValue(item.current, item.limit)} className="h-2" />
            )}
          </div>
        ))}

        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">Período de faturação: 15 Jan - 15 Fev 2024</p>
        </div>
      </CardContent>
    </Card>
  )
}
