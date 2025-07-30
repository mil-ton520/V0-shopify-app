"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Video, Plus, Play, Pause, BarChart3, Clock, Settings, Trash2 } from "lucide-react"

const mockUser = {
  email: "demo@cartsaver.com",
  id: "demo-user-123",
}

const sequences = [
  {
    id: 1,
    name: "Carrinho Abandonado - Geral",
    description: "Sequência padrão para todos os carrinhos",
    status: "active",
    videos: 3,
    sent: 1247,
    recovered: 312,
    rate: "25.1%",
    trigger: "Carrinho abandonado",
    delay: "1 hora",
  },
  {
    id: 2,
    name: "Clientes VIP",
    description: "Sequência personalizada para VIPs",
    status: "active",
    videos: 2,
    sent: 89,
    recovered: 34,
    rate: "38.2%",
    trigger: "Carrinho &gt; €200",
    delay: "30 minutos",
  },
  {
    id: 3,
    name: "Primeira Compra",
    description: "Para novos clientes",
    status: "paused",
    videos: 4,
    sent: 234,
    recovered: 45,
    rate: "19.2%",
    trigger: "Primeiro carrinho",
    delay: "2 horas",
  },
]

export default function SequencesPage() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newSequence, setNewSequence] = useState({
    name: "",
    description: "",
    trigger: "",
    delay: "",
    segment: "",
  })

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

  const toggleSequence = (id: number) => {
    alert(`Sequência ${id} foi ${sequences.find((s) => s.id === id)?.status === "active" ? "pausada" : "ativada"}!`)
  }

  const deleteSequence = (id: number) => {
    if (confirm("Tens a certeza que queres eliminar esta sequência?")) {
      alert(`Sequência ${id} eliminada!`)
    }
  }

  const createSequence = () => {
    if (!newSequence.name || !newSequence.trigger) {
      alert("Por favor preenche todos os campos obrigatórios.")
      return
    }

    alert("Nova sequência criada com sucesso!")
    setShowCreateModal(false)
    setNewSequence({ name: "", description: "", trigger: "", delay: "", segment: "" })
  }

  return (
    <DashboardLayout user={mockUser}>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Sequências de Vídeo</h1>
            <p className="text-gray-600 mt-1">Cria e gere sequências automatizadas de vídeos personalizados.</p>
          </div>
          <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                <Plus className="w-4 h-4 mr-2" />
                Nova Sequência
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Criar Nova Sequência</DialogTitle>
                <DialogDescription>
                  Define uma nova sequência automatizada de vídeos para recuperação de carrinhos.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome da Sequência *</Label>
                    <Input
                      id="name"
                      placeholder="Ex: Carrinho Abandonado VIP"
                      value={newSequence.name}
                      onChange={(e) => setNewSequence({ ...newSequence, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trigger">Trigger *</Label>
                    <Select
                      value={newSequence.trigger}
                      onValueChange={(value) => setNewSequence({ ...newSequence, trigger: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleciona o trigger" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cart_abandoned">Carrinho Abandonado</SelectItem>
                        <SelectItem value="high_value">Carrinho Alto Valor (&gt;€100)</SelectItem>
                        <SelectItem value="first_time">Primeiro Carrinho</SelectItem>
                        <SelectItem value="returning">Cliente Recorrente</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreve o objetivo desta sequência..."
                    value={newSequence.description}
                    onChange={(e) => setNewSequence({ ...newSequence, description: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="delay">Delay Inicial</Label>
                    <Select
                      value={newSequence.delay}
                      onValueChange={(value) => setNewSequence({ ...newSequence, delay: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Quando enviar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15min">15 minutos</SelectItem>
                        <SelectItem value="30min">30 minutos</SelectItem>
                        <SelectItem value="1h">1 hora</SelectItem>
                        <SelectItem value="2h">2 horas</SelectItem>
                        <SelectItem value="24h">24 horas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="segment">Segmento</Label>
                    <Select
                      value={newSequence.segment}
                      onValueChange={(value) => setNewSequence({ ...newSequence, segment: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Todos os clientes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos os Clientes</SelectItem>
                        <SelectItem value="vip">Clientes VIP</SelectItem>
                        <SelectItem value="new">Novos Clientes</SelectItem>
                        <SelectItem value="returning">Clientes Recorrentes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" onClick={() => setShowCreateModal(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={createSequence} className="bg-blue-500 hover:bg-blue-600">
                    Criar Sequência
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Video className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {sequences.filter((s) => s.status === "active").length}
                  </div>
                  <p className="text-sm text-gray-600">Sequências Ativas</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {sequences.reduce((acc, s) => acc + s.sent, 0)}
                  </div>
                  <p className="text-sm text-gray-600">Vídeos Enviados</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {sequences.reduce((acc, s) => acc + s.recovered, 0)}
                  </div>
                  <p className="text-sm text-gray-600">Carrinhos Recuperados</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24.9%</div>
                  <p className="text-sm text-gray-600">Taxa Média</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sequences List */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Sequências Criadas</CardTitle>
            <CardDescription>Gere as tuas sequências de vídeo automatizadas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sequences.map((sequence) => (
                <div
                  key={sequence.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Video className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{sequence.name}</h4>
                      <p className="text-sm text-gray-600">{sequence.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                        <span>{sequence.videos} vídeos</span>
                        <span>Trigger: {sequence.trigger}</span>
                        <span>Delay: {sequence.delay}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{sequence.sent}</div>
                      <div className="text-xs text-gray-500">Enviados</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{sequence.recovered}</div>
                      <div className="text-xs text-gray-500">Recuperados</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-green-600">{sequence.rate}</div>
                      <div className="text-xs text-gray-500">Taxa</div>
                    </div>
                    {getStatusBadge(sequence.status)}

                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => toggleSequence(sequence.id)}
                      >
                        {sequence.status === "active" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-400 hover:text-red-600"
                        onClick={() => deleteSequence(sequence.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
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
