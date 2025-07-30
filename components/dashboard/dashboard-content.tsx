"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  ShoppingCart,
  TrendingUp,
  Play,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  ExternalLink,
  Video,
  Camera,
  Mic,
  BarChart3,
} from "lucide-react"
import { MetricsChart } from "./metrics-chart"
import { RecentActivity } from "./recent-activity"
import { VideoRecorder } from "./video-recorder"
import { ReportsModal } from "./reports-modal"

export function DashboardContent() {
  const [isRecording, setIsRecording] = useState(false)
  const [hasRecordedVideo, setHasRecordedVideo] = useState(false)
  const [showReports, setShowReports] = useState(false)

  const metrics = [
    {
      title: "Carrinhos Processados",
      value: "1,247",
      change: "+12.5%",
      trend: "up",
      icon: ShoppingCart,
      description: "Últimos 30 dias",
    },
    {
      title: "Vídeos Enviados",
      value: "892",
      change: "+8.2%",
      trend: "up",
      icon: Play,
      description: "Últimos 30 dias",
    },
    {
      title: "Taxa de Recuperação",
      value: "24.8%",
      change: "+3.1%",
      trend: "up",
      icon: TrendingUp,
      description: "Média da indústria: 18%",
    },
    {
      title: "Receita Recuperada",
      value: "€12,847",
      change: "+18.7%",
      trend: "up",
      icon: DollarSign,
      description: "Últimos 30 dias",
    },
  ]

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bem-vindo de volta!</h1>
          <p className="text-gray-600 mt-1">Aqui está um resumo da performance da tua loja.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={() => setShowReports(true)}>
            <BarChart3 className="w-4 h-4 mr-2" />
            Ver Relatórios
          </Button>
        </div>
      </div>

      {/* Video Recording Highlight */}
      {!hasRecordedVideo && (
        <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Grava o teu primeiro vídeo!</h2>
                  <p className="text-gray-600 mb-4 max-w-md">
                    Cria o vídeo base que será usado para gerar versões personalizadas para cada cliente.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Camera className="w-4 h-4" />
                      <span>30-60 segundos</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mic className="w-4 h-4" />
                      <span>Áudio claro</span>
                    </div>
                  </div>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-4">
                    <Video className="w-5 h-5 mr-2" />
                    Gravar Agora
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Gravar Vídeo Base</DialogTitle>
                    <DialogDescription>
                      Grava um vídeo de 30-60 segundos que será usado como base para criar versões personalizadas.
                    </DialogDescription>
                  </DialogHeader>
                  <VideoRecorder onVideoRecorded={() => setHasRecordedVideo(true)} />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <metric.icon className="w-4 h-4 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="flex items-center gap-2">
                <div
                  className={`flex items-center gap-1 text-sm ${
                    metric.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {metric.trend === "up" ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  {metric.change}
                </div>
                <span className="text-xs text-gray-500">{metric.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <Card className="lg:col-span-2 border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Evolução de Recuperação</CardTitle>
            <CardDescription>Taxa de recuperação de carrinhos nos últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <MetricsChart />
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Conectar Shopify</h3>
                  <p className="text-sm text-gray-600">Liga a tua loja para começar</p>
                </div>
              </div>
              <Button size="sm" className="w-full bg-blue-500 hover:bg-blue-600">
                <ExternalLink className="w-4 h-4 mr-2" />
                Conectar Agora
              </Button>
            </div>

            {hasRecordedVideo && (
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Vídeo Gravado ✓</h3>
                    <p className="text-sm text-gray-600">Pronto para usar</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  Ver Vídeo
                </Button>
              </div>
            )}

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Relatórios</h3>
                  <p className="text-sm text-gray-600">Analisa a performance</p>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-full border-purple-200 text-purple-700 hover:bg-purple-100 bg-transparent"
                onClick={() => setShowReports(true)}
              >
                Ver Relatórios
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">Atividade Recente</CardTitle>
            <CardDescription>Últimos carrinhos processados e vídeos enviados</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            Ver Todos
          </Button>
        </CardHeader>
        <CardContent>
          <RecentActivity />
        </CardContent>
      </Card>

      {/* Reports Modal */}
      <ReportsModal open={showReports} onOpenChange={setShowReports} />
    </div>
  )
}
