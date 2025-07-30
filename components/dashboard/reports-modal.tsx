"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, TrendingUp, ShoppingCart, Play, Mail, MessageCircle } from "lucide-react"

interface ReportsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ReportsModal({ open, onOpenChange }: ReportsModalProps) {
  const [selectedPeriod, setSelectedPeriod] = useState("30d")

  const overviewData = {
    totalCarts: 1247,
    videosSet: 892,
    recovered: 312,
    revenue: "€12,847",
    recoveryRate: "25.1%",
    avgOrderValue: "€41.18",
  }

  const channelData = [
    { name: "Email", sent: 456, opened: 234, clicked: 89, recovered: 67, rate: "14.7%" },
    { name: "WhatsApp", sent: 234, opened: 198, clicked: 123, recovered: 89, rate: "38.0%" },
    { name: "Push", sent: 202, opened: 145, clicked: 67, recovered: 34, rate: "16.8%" },
  ]

  const topProducts = [
    { name: "Ténis Nike Air Max", carts: 89, recovered: 34, revenue: "€2,456" },
    { name: "iPhone Case Premium", carts: 67, recovered: 23, revenue: "€1,234" },
    { name: "Vestido Zara Elegante", carts: 45, recovered: 19, revenue: "€1,890" },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Relatórios Detalhados
          </DialogTitle>
          <DialogDescription>Análise completa da performance de recuperação de carrinhos</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Period Selector */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {["7d", "30d", "90d", "1y"].map((period) => (
                <Button
                  key={period}
                  variant={selectedPeriod === period ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPeriod(period)}
                >
                  {period === "7d" && "7 dias"}
                  {period === "30d" && "30 dias"}
                  {period === "90d" && "90 dias"}
                  {period === "1y" && "1 ano"}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Exportar PDF
            </Button>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="channels">Canais</TabsTrigger>
              <TabsTrigger value="products">Produtos</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <ShoppingCart className="w-8 h-8 text-blue-500" />
                      <div>
                        <div className="text-2xl font-bold">{overviewData.totalCarts}</div>
                        <div className="text-sm text-gray-600">Carrinhos Abandonados</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Play className="w-8 h-8 text-purple-500" />
                      <div>
                        <div className="text-2xl font-bold">{overviewData.videosSet}</div>
                        <div className="text-sm text-gray-600">Vídeos Enviados</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-8 h-8 text-green-500" />
                      <div>
                        <div className="text-2xl font-bold">{overviewData.recovered}</div>
                        <div className="text-sm text-gray-600">Recuperados</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Performance Chart Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Performance ao Longo do Tempo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Gráfico de performance detalhado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="channels" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance por Canal</CardTitle>
                  <CardDescription>Comparação de eficácia entre canais de comunicação</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {channelData.map((channel, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            {channel.name === "Email" && <Mail className="w-5 h-5 text-blue-500" />}
                            {channel.name === "WhatsApp" && <MessageCircle className="w-5 h-5 text-green-500" />}
                            {channel.name === "Push" && <div className="w-5 h-5 bg-purple-500 rounded" />}
                            <h4 className="font-medium">{channel.name}</h4>
                          </div>
                          <Badge className="bg-green-100 text-green-700">{channel.rate}</Badge>
                        </div>
                        <div className="grid grid-cols-4 gap-4 text-sm">
                          <div>
                            <div className="font-medium">{channel.sent}</div>
                            <div className="text-gray-600">Enviados</div>
                          </div>
                          <div>
                            <div className="font-medium">{channel.opened}</div>
                            <div className="text-gray-600">Abertos</div>
                          </div>
                          <div>
                            <div className="font-medium">{channel.clicked}</div>
                            <div className="text-gray-600">Cliques</div>
                          </div>
                          <div>
                            <div className="font-medium">{channel.recovered}</div>
                            <div className="text-gray-600">Recuperados</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="products" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Produtos Abandonados</CardTitle>
                  <CardDescription>Produtos com mais carrinhos abandonados e recuperações</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topProducts.map((product, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{product.name}</h4>
                          <p className="text-sm text-gray-600">{product.carts} carrinhos abandonados</p>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-green-600">{product.revenue}</div>
                          <div className="text-sm text-gray-600">{product.recovered} recuperados</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timeline" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Timeline de Atividade</CardTitle>
                  <CardDescription>Atividade recente de recuperação de carrinhos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { time: "Há 2 horas", event: "Vídeo enviado para João Silva", value: "€89.99" },
                      { time: "Há 4 horas", event: "Carrinho recuperado - Maria Santos", value: "€156.50" },
                      { time: "Há 6 horas", event: "Nova sequência ativada", value: "VIP Customers" },
                      { time: "Há 8 horas", event: "Vídeo enviado para Pedro Costa", value: "€45.00" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <div className="flex-1">
                          <p className="font-medium">{item.event}</p>
                          <p className="text-sm text-gray-600">{item.time}</p>
                        </div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
