"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Search, Filter, Download, Eye, Play, Mail, MessageCircle, Bell, Send } from "lucide-react"

const mockUser = {
  email: "demo@cartsaver.com",
  id: "demo-user-123",
}

const recoveryData = [
  {
    id: 1,
    customer: "João Silva",
    email: "joao@exemplo.com",
    value: "€89.99",
    status: "recuperado",
    date: "2024-01-15",
    products: "Ténis Nike Air Max",
    videoSent: true,
    channel: "email",
    lastActivity: "Comprou há 2 horas",
  },
  {
    id: 2,
    customer: "Maria Santos",
    email: "maria@exemplo.com",
    value: "€156.50",
    status: "enviado",
    date: "2024-01-14",
    products: "Vestido Zara + Sapatos",
    videoSent: true,
    channel: "whatsapp",
    lastActivity: "Vídeo aberto há 1 hora",
  },
  {
    id: 3,
    customer: "Pedro Costa",
    email: "pedro@exemplo.com",
    value: "€45.00",
    status: "pendente",
    date: "2024-01-14",
    products: "Livro de Programação",
    videoSent: false,
    channel: "email",
    lastActivity: "Carrinho abandonado há 3 horas",
  },
]

export default function RecoveryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null)
  const [showFilters, setShowFilters] = useState(false)

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
        return <Mail className="w-4 h-4 text-blue-500" />
      case "whatsapp":
        return <MessageCircle className="w-4 h-4 text-green-500" />
      case "push":
        return <Bell className="w-4 h-4 text-purple-500" />
      default:
        return <Mail className="w-4 h-4 text-gray-500" />
    }
  }

  const filteredData = recoveryData.filter(
    (item) =>
      item.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.products.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const sendVideo = (customerId: number) => {
    alert(`Vídeo enviado para cliente ${customerId}!`)
  }

  return (
    <DashboardLayout user={mockUser}>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Recuperação de Carrinhos</h1>
            <p className="text-gray-600 mt-1">Acompanha todos os carrinhos abandonados e vídeos enviados.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Status</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option>Todos</option>
                    <option>Pendente</option>
                    <option>Enviado</option>
                    <option>Recuperado</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Canal</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option>Todos</option>
                    <option>Email</option>
                    <option>WhatsApp</option>
                    <option>Push</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Data</label>
                  <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Valor Mínimo</label>
                  <input
                    type="number"
                    placeholder="€0"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Carrinhos Abandonados</CardTitle>
                <CardDescription>
                  Lista de todos os carrinhos processados ({filteredData.length} resultados)
                </CardDescription>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Procurar cliente..."
                    className="pl-10 w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 font-medium text-sm">
                        {item.customer
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.customer}</h4>
                      <p className="text-sm text-gray-600">{item.products}</p>
                      <p className="text-xs text-gray-500">{item.email}</p>
                      <p className="text-xs text-blue-600">{item.lastActivity}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{item.value}</div>
                      <div className="text-xs text-gray-500">{item.date}</div>
                    </div>

                    <div className="flex items-center gap-2">
                      {getChannelIcon(item.channel)}
                      {item.videoSent && (
                        <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600">
                          <Play className="w-4 h-4" />
                        </Button>
                      )}
                      {!item.videoSent && item.status === "pendente" && (
                        <Button
                          size="sm"
                          className="bg-blue-500 hover:bg-blue-600 text-white"
                          onClick={() => sendVideo(item.id)}
                        >
                          <Send className="w-4 h-4 mr-1" />
                          Enviar
                        </Button>
                      )}
                      {getStatusBadge(item.status)}
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Detalhes do Cliente</DialogTitle>
                          <DialogDescription>Informações completas sobre o carrinho abandonado</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium">Cliente</h4>
                            <p>
                              {item.customer} ({item.email})
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium">Produtos</h4>
                            <p>{item.products}</p>
                          </div>
                          <div>
                            <h4 className="font-medium">Valor</h4>
                            <p>{item.value}</p>
                          </div>
                          <div>
                            <h4 className="font-medium">Status</h4>
                            {getStatusBadge(item.status)}
                          </div>
                          <div>
                            <h4 className="font-medium">Última Atividade</h4>
                            <p>{item.lastActivity}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
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
