"use client"

import { useMemo } from "react"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

// 📊 Recharts components – carregados só no client
const ResponsiveContainer = dynamic(
  () => import("recharts").then((m) => m.ResponsiveContainer),
  { ssr: false }
)
const LineChart = dynamic(
  () => import("recharts").then((m) => m.LineChart),
  { ssr: false }
)
const Line = dynamic(
  () => import("recharts").then((m) => m.Line),
  { ssr: false }
)
const XAxis = dynamic(
  () => import("recharts").then((m) => m.XAxis),
  { ssr: false }
)
const YAxis = dynamic(
  () => import("recharts").then((m) => m.YAxis),
  { ssr: false }
)
const Tooltip = dynamic(
  () => import("recharts").then((m) => m.Tooltip),
  { ssr: false }
)

interface MetricsChartProps {
  loading?: boolean
}

export function MetricsChart({ loading = false }: MetricsChartProps) {
  // TODO: trocar por fetch/GraphQL Shopify
  const data = useMemo(
    () => [
      { month: "Jan", recovery: 18.2 },
      { month: "Fev", recovery: 19.8 },
      { month: "Mar", recovery: 21.4 },
      { month: "Abr", recovery: 22.1 },
      { month: "Mai", recovery: 23.7 },
      { month: "Jun", recovery: 24.8 },
    ],
    []
  )

  if (loading) {
    return <Skeleton className="h-60 w-full rounded-md" />
  }

  return (
    <div className="aspect-[4/3] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="recovery"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ r: 4, fill: "hsl(var(--primary))" }}
          />
          <XAxis
            dataKey="month"
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v: number) => `${v}%`}
            domain={[0, (max: number) => max + 5]}
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            width={32}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(v: number) => `${v}%`}
            contentStyle={{ borderRadius: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
