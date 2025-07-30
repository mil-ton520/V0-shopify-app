"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Plus, Target, Crown, Thermometer, Clock } from "lucide-react"

const mockUser = {
  email: "demo@cartsaver.com",
  id: "demo-user-123",
}

const segments = [
  {
    id: 1,
    name: "Clientes VIP",
    description: "Clientes com compras > €500",
    count: 234,
    icon: Crown,
    color: "yellow",
    status: "active",
  },
  {
    id: 2,
    name: "Clientes Frios",
    description: "Sem compras há 90+ dias",
    count: 567,
    icon: Thermometer,
    color: "blue",
    status: "active",
  },
  {
    id: 3,
    name: "Primeira Compra",
    description: "Novos clientes (0 compras)",
    count: 123,
    icon: Target,
    color: "green",
    status: "active",
  },
  {
    id: 4,
    name: "Carrinho Recente",
    description: "Abandonaram nas últimas 24h",
    count: 89,
    icon: Clock,
    color: "red",
    status: "paused",
  },
]

export default function SegmentsPage() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "yellow":
        return "bg-yellow-100 text-yellow-500"
      case "blue":
        return "bg-blue-100 text-blue-500"
      case "green":
        return "bg-green-100 text-green-500"
      case "red":
        return "bg-red-100 text-red-500"
      default:
        return "bg-gray-100 text-gray-500"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Ativo</Badge>
      case "paused":
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pausado</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <DashboardLayout user={mockUser}>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Segmentação de Clientes</h1>
            <p className="text-gray-600 mt-1">Organiza os teus clientes em grupos para campanhas direcionadas.</p>
          </div>
          <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
            <Plus className="w-4 h-4 mr-2" />
            Novo Segmento
          </Button>
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">1,013</div>
                  <p className="text-sm text-gray-600">Total Clientes</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4</div>
                  <p className="text-sm text-gray-600">Segmentos Ativos</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Crown className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">234</div>
                  <p className="text-sm text-gray-600">Clientes VIP</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Thermometer className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">567</div>
                  <p className="text-sm text-gray-600">Clientes Frios</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Segments List */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Segmentos Criados</CardTitle>
            <CardDescription>Lista de todos os segmentos de clientes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {segments.map((segment) => (
                <div
                  key={segment.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(segment.color)}`}
                    >
                      <segment.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{segment.name}</h4>
                      <p className="text-sm text-gray-600">{segment.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{segment.count}</div>
                      <div className="text-xs text-gray-500">clientes</div>
                    </div>
                    {getStatusBadge(segment.status)}
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                      Editar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
