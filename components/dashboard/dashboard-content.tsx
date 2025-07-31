"use client"

import { useState } from "react"
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import {
  ShoppingCart, TrendingUp, Play, DollarSign,
  ArrowUpRight, ArrowDownRight, ExternalLink,
  Video, Camera, Mic, BarChart3,
} from "lucide-react"

import { MetricsChart } from "./metrics-chart"
import { RecentActivity } from "./recent-activity"
import { VideoRecorder } from "./video-recorder"
import { ReportsModal } from "./reports-modal"

/* -------------------------------------------------------------------------- */
/*                             DATA — replace later                           */
/* -------------------------------------------------------------------------- */

function useDashboardMetrics() {
  // TODO: trocar por fetch / GraphQL Shopify
  return {
    loading: false,
    metrics: [
      {
        title: "Carrinhos Processados",
        value: "1 247",
        change: "+12,5 %",
        trend: "up",
        icon: ShoppingCart,
        description: "Últimos 30 dias",
      },
      {
        title: "Vídeos Enviados",
        value: "892",
        change: "+8,2 %",
        trend: "up",
        icon: Play,
        description: "Últimos 30 dias",
      },
      {
        title: "Taxa de Recuperação",
        value: "24,8 %",
        change: "+3,1 %",
        trend: "up",
        icon: TrendingUp,
        description: "Média do sector : 18 %",
      },
      {
        title: "Receita Recuperada",
        value: "€ 12  847",
        change: "+18,7 %",
        trend: "up",
        icon: DollarSign,
        description: "Últimos 30 dias",
      },
    ],
  }
}

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

export function DashboardContent() {
  const { loading, metrics } = useDashboardMetrics()

  const [hasRecordedVideo, setHasRecordedVideo] = useState(false)
  const [showReports, setShowReports]   = useState(false)

  return (
    <div className="p-4 sm:p-6 space-y-8">
      {/* HEADER ****************************************************** */}
      <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">
            Bem-vindo de volta !
          </h1>
          <p className="text-muted-foreground">
            Eis um resumo da performance da tua loja.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => setShowReports(true)}>
          <BarChart3 className="w-4 h-4 mr-2" />
          Ver relatórios
        </Button>
      </section>

      {/* VIDEO CALL-TO-ACTION **************************************** */}
      {!hasRecordedVideo && (
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary">
              <Video className="w-8 h-8 text-primary-foreground" />
            </div>

            <div className="flex-1 space-y-4">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">Grava o teu primeiro vídeo !</h2>
                <p className="text-muted-foreground max-w-md">
                  Cria o vídeo base que será usado para gerar versões personalizadas para cada cliente.
                </p>
              </div>

              <div className="flex gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  30-60 s
                </div>
                <div className="flex items-center gap-2">
                  <Mic className="w-4 h-4" />
                  Áudio claro
                </div>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg">
                  <Video className="w-5 h-5 mr-2" />
                  Gravar agora
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Gravar vídeo base</DialogTitle>
                  <DialogDescription>
                    Grava um vídeo de 30-60 s que será usado como base.
                  </DialogDescription>
                </DialogHeader>
                <VideoRecorder onVideoRecorded={() => setHasRecordedVideo(true)} />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      )}

      {/* MÉTRICAS **************************************************** */}
      <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {(loading ? Array.from({ length: 4 }) : metrics).map((metric, i) => (
          <Card key={i} className="shadow-sm hover:shadow">
            {loading ? (
              <Skeleton className="h-24" />
            ) : (
              <>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <metric.icon className="w-4 h-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="flex items-center gap-2 text-sm">
                    <span
                      className={`flex items-center gap-1 ${
                        metric.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {metric.trend === "up" ? (
                        <ArrowUpRight className="w-3 h-3" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3" />
                      )}
                      {metric.change}
                    </span>
                    <span className="text-muted-foreground">{metric.description}</span>
                  </div>
                </CardContent>
              </>
            )}
          </Card>
        ))}
      </section>

      {/* CHART + QUICK ACTIONS **************************************** */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* CHART */}
        <Card className="lg:col-span-2 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Evolução de recuperação
            </CardTitle>
            <CardDescription>
              Taxa de recuperação de carrinhos nos últimos 6 meses
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? <Skeleton className="h-60" /> : <MetricsChart />}
          </CardContent>
        </Card>

        {/* QUICK ACTIONS */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Ações rápidas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* CONNECT SHOPIFY */}
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-medium">Conectar Shopify</h3>
                  <p className="text-sm text-muted-foreground">
                    Liga a tua loja para começar
                  </p>
                </div>
              </div>
              <Button size="sm" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                Conectar agora
              </Button>
            </div>

            {/* VIDEO OK */}
            {hasRecordedVideo && (
              <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-md bg-green-500 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Vídeo gravado ✓</h3>
                    <p className="text-sm text-muted-foreground">Pronto para usar</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full">
                  Ver vídeo
                </Button>
              </div>
            )}

            {/* REPORTS */}
            <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-md bg-purple-500 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Relatórios</h3>
                  <p className="text-sm text-muted-foreground">
                    Analisa a performance
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={() => setShowReports(true)}
              >
                Ver relatórios
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ACTIVITY ***************************************************** */}
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">Atividade recente</CardTitle>
            <CardDescription>
              Últimos carrinhos processados e vídeos enviados
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            Ver todos
          </Button>
        </CardHeader>
        <CardContent>
          {loading ? <Skeleton className="h-36" /> : <RecentActivity />}
        </CardContent>
      </Card>

      {/* REPORTS MODAL *********************************************** */}
      <ReportsModal open={showReports} onOpenChange={setShowReports} />
    </div>
  )
}
