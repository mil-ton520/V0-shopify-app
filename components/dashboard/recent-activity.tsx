"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Eye, Mail, MessageCircle, Bell } from "lucide-react"

const recentActivity = [
  {
    id: 1,
    customer: "João Silva",
    email: "joao@exemplo.com",
    value: "€89.99",
    status: "enviado",
    channel: "email",
    date: "Há 2 horas",
    products: "Ténis Nike Air Max",
  },
  {
    id: 2,
    customer: "Maria Santos",
    email: "maria@exemplo.com",
    value: "€156.50",
    status: "recuperado",
    channel: "whatsapp",
    date: "Há 4 horas",
    products: "Vestido Zara + Sapatos",
  },
  {
    id: 3,
    customer: "Pedro Costa",
    email: "pedro@exemplo.com",
    value: "€45.00",
    status: "pendente",
    channel: "email",
    date: "Há 6 horas",
    products: "Livro de Programação",
  },
  {
    id: 4,
    customer: "Ana Ferreira",
    email: "ana@exemplo.com",
    value: "€234.99",
    status: "enviado",
    channel: "push",
    date: "Há 8 horas",
    products: "iPhone Case + Carregador",
  },
  {
    id: 5,
    customer: "Carlos Oliveira",
    email: "carlos@exemplo.com",
    value: "€67.80",
    status: "recuperado",
    channel: "email",
    date: "Há 1 dia",
    products: "Suplementos Fitness",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "recuperado":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Recuperado</Badge>
    case "enviado":
      return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Enviado</Badge>
    case "pendente":
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pendente</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

const getChannelIcon = (channel: string) => {
  switch (channel) {
    case "email":
      return <Mail className="w-3 h-3 text-gray-500" />
    case "whatsapp":
      return <MessageCircle className="w-3 h-3 text-green-500" />
    case "push":
      return <Bell className="w-3 h-3 text-purple-500" />
    default:
      return <Mail className="w-3 h-3 text-gray-500" />
  }
}

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {recentActivity.map((activity) => (
        <div
          key={activity.id}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-blue-100 text-blue-700 text-sm font-medium">
                {activity.customer
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-medium text-gray-900">{activity.customer}</h4>
                <div className="flex items-center gap-1">{getChannelIcon(activity.channel)}</div>
              </div>
              <p className="text-sm text-gray-600">{activity.products}</p>
              <p className="text-xs text-gray-500">{activity.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="font-semibold text-gray-900">{activity.value}</div>
              <div className="text-xs text-gray-500">{activity.date}</div>
            </div>

            {getStatusBadge(activity.status)}

            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
