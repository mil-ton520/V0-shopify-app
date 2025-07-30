"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Bell, Settings, BarChart3, Save, TestTube } from "lucide-react"

const mockUser = {
  email: "demo@cartsaver.com",
  id: "demo-user-123",
}

const initialChannels = [
  {
    id: 1,
    name: "Email",
    description: "Envio via email tradicional",
    icon: Mail,
    color: "blue",
    enabled: true,
    sent: 892,
    delivered: 856,
    opened: 234,
    rate: "27.3%",
    config: {
      fromName: "Cart Saver",
      fromEmail: "noreply@cartsaver.com",
      subject: "Esqueceste-te de algo no teu carrinho!",
    },
  },
  {
    id: 2,
    name: "WhatsApp",
    description: "Mensagens via WhatsApp Business",
    icon: MessageCircle,
    color: "green",
    enabled: true,
    sent: 456,
    delivered: 445,
    opened: 178,
    rate: "40.0%",
    config: {
      phoneNumber: "+351 912 345 678",
      businessName: "Cart Saver",
      template: "Olá {{name}}, esqueceste-te do teu carrinho!",
    },
  },
  {
    id: 3,
    name: "Push Notification",
    description: "Notificações push no browser",
    icon: Bell,
    color: "purple",
    enabled: false,
    sent: 123,
    delivered: 98,
    opened: 23,
    rate: "23.5%",
    config: {
      title: "Carrinho Abandonado",
      message: "Volta e completa a tua compra!",
      icon: "/icon-192x192.png",
    },
  },
]

export default function ChannelsPage() {
  const [channels, setChannels] = useState(initialChannels)
  const [selectedChannel, setSelectedChannel] = useState<any>(null)
  const [showConfig, setShowConfig] = useState(false)

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-500"
      case "green":
        return "bg-green-100 text-green-500"
      case "purple":
        return "bg-purple-100 text-purple-500"
      default:
        return "bg-gray-100 text-gray-500"
    }
  }

  const toggleChannel = (id: number) => {
    setChannels(channels.map((channel) => (channel.id === id ? { ...channel, enabled: !channel.enabled } : channel)))
  }

  const testChannel = (channelName: string) => {
    alert(`Teste enviado via ${channelName}! Verifica a tua caixa de entrada.`)
  }

  const saveChannelConfig = () => {
    alert("Configurações guardadas com sucesso!")
    setShowConfig(false)
  }

  const openChannelConfig = (channel: any) => {
    setSelectedChannel(channel)
    setShowConfig(true)
  }

  return (
    <DashboardLayout user={mockUser}>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Canais de Comunicação</h1>
            <p className="text-gray-600 mt-1">Configura e gere os canais para envio de vídeos personalizados.</p>
          </div>
          <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
            <Settings className="w-4 h-4 mr-2" />
            Configurações Gerais
          </Button>
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{channels.reduce((acc, c) => acc + c.sent, 0)}</div>
                  <p className="text-sm text-gray-600">Total Enviados</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {channels.reduce((acc, c) => acc + c.delivered, 0)}
                  </div>
                  <p className="text-sm text-gray-600">Entregues</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {channels.reduce((acc, c) => acc + c.opened, 0)}
                  </div>
                  <p className="text-sm text-gray-600">Abertos</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">31.1%</div>
                  <p className="text-sm text-gray-600">Taxa de Abertura</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Channels Configuration */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Configuração de Canais</CardTitle>
            <CardDescription>Ativa e configura os canais de comunicação</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {channels.map((channel) => (
                <div key={channel.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(channel.color)}`}
                      >
                        <channel.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{channel.name}</h4>
                        <p className="text-sm text-gray-600">{channel.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Switch checked={channel.enabled} onCheckedChange={() => toggleChannel(channel.id)} />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-500 hover:text-blue-600"
                        onClick={() => testChannel(channel.name)}
                      >
                        <TestTube className="w-4 h-4 mr-1" />
                        Testar
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => openChannelConfig(channel)}
                      >
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">{channel.sent}</div>
                      <div className="text-xs text-gray-500">Enviados</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">{channel.delivered}</div>
                      <div className="text-xs text-gray-500">Entregues</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">{channel.opened}</div>
                      <div className="text-xs text-gray-500">Abertos</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-green-600">{channel.rate}</div>
                      <div className="text-xs text-gray-500">Taxa</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Channel Configuration Modal */}
        <Dialog open={showConfig} onOpenChange={setShowConfig}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {selectedChannel && <selectedChannel.icon className="w-5 h-5" />}
                Configurar {selectedChannel?.name}
              </DialogTitle>
              <DialogDescription>Personaliza as configurações para este canal de comunicação.</DialogDescription>
            </DialogHeader>

            {selectedChannel && (
              <div className="space-y-4">
                {selectedChannel.name === "Email" && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fromName">Nome do Remetente</Label>
                        <Input id="fromName" defaultValue={selectedChannel.config.fromName} placeholder="Cart Saver" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fromEmail">Email do Remetente</Label>
                        <Input
                          id="fromEmail"
                          type="email"
                          defaultValue={selectedChannel.config.fromEmail}
                          placeholder="noreply@cartsaver.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto do Email</Label>
                      <Input
                        id="subject"
                        defaultValue={selectedChannel.config.subject}
                        placeholder="Esqueceste-te de algo no teu carrinho!"
                      />
                    </div>
                  </>
                )}

                {selectedChannel.name === "WhatsApp" && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber">Número de Telefone</Label>
                        <Input
                          id="phoneNumber"
                          defaultValue={selectedChannel.config.phoneNumber}
                          placeholder="+351 912 345 678"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Nome do Negócio</Label>
                        <Input
                          id="businessName"
                          defaultValue={selectedChannel.config.businessName}
                          placeholder="Cart Saver"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="template">Template da Mensagem</Label>
                      <Textarea
                        id="template"
                        defaultValue={selectedChannel.config.template}
                        placeholder="Olá {{name}}, esqueceste-te do teu carrinho!"
                        rows={3}
                      />
                    </div>
                  </>
                )}

                {selectedChannel.name === "Push Notification" && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Título da Notificação</Label>
                        <Input
                          id="title"
                          defaultValue={selectedChannel.config.title}
                          placeholder="Carrinho Abandonado"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="icon">URL do Ícone</Label>
                        <Input id="icon" defaultValue={selectedChannel.config.icon} placeholder="/icon-192x192.png" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        defaultValue={selectedChannel.config.message}
                        placeholder="Volta e completa a tua compra!"
                        rows={2}
                      />
                    </div>
                  </>
                )}

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" onClick={() => setShowConfig(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={saveChannelConfig} className="bg-blue-500 hover:bg-blue-600">
                    <Save className="w-4 h-4 mr-2" />
                    Guardar Configurações
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  )
}
