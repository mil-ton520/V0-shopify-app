"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { Eye, Mail, MessageCircle, Bell } from "lucide-react"

/* -------------------------------------------------------------------------- */
/*                         MOCK – trocar pela API Shopify                     */
/* -------------------------------------------------------------------------- */

const mockActivity = [
  {
    id: 1,
    customer: "João Silva",
    email: "joao@exemplo.com",
    value: "€ 89,99",
    status: "enviado",
    channel: "email",
    date: "Há 2 h",
    products: "Ténis Nike Air Max",
  },
  {
    id: 2,
    customer: "Maria Santos",
    email: "maria@exemplo.com",
    value: "€ 156,50",
    status: "recuperado",
    channel: "whatsapp",
    date: "Há 4 h",
    products: "Vestido Zara + Sapatos",
  },
  {
    id: 3,
    customer: "Pedro Costa",
    email: "pedro@exemplo.com",
    value: "€ 45,00",
    status: "pendente",
    channel: "email",
    date: "Há 6 h",
    products: "Livro de Programação",
  },
  {
    id: 4,
    customer: "Ana Ferreira",
    email: "ana@exemplo.com",
    value: "€ 234,99",
    status: "enviado",
    channel: "push",
    date: "Há 8 h",
    products: "iPhone Case + Carregador",
  },
]

/* -------------------------------------------------------------------------- */
/*                             HELPER COMPONENTS                              */
/* -------------------------------------------------------------------------- */

function StatusBadge({ status }: { status: string }) {
  const variants: Record<string, string> = {
    recuperado: "bg-green-500/10 text-green-700",
    enviado: "bg-primary/10 text-primary",
    pendente: "bg-yellow-500/10 text-yellow-700",
  }
  const style = variants[status] ?? "bg-muted text-foreground"
  return <Badge className={style}>{status}</Badge>
}

function ChannelIcon({ channel }: { channel: string }) {
  const map: Record<string, JSX.Element> = {
    email: <Mail className="w-3 h-3 text-muted-foreground" />,
    whatsapp: <MessageCircle className="w-3 h-3 text-green-600" />,
    push: <Bell className="w-3 h-3 text-purple-600" />,
  }
  return map[channel] ?? map.email
}

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

interface RecentActivityProps {
  loading?: boolean
}

export function RecentActivity({ loading = false }: RecentActivityProps) {
  const [activity] = useState(mockActivity)

  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-20 w-full" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {activity.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-4 rounded-lg bg-muted/40 hover:bg-muted transition-colors"
        >
          {/* LEFT */}
          <div className="flex items-center gap-4 min-w-0">
            <Avatar className="h-10 w-10 shrink-0">
              <AvatarFallback className="bg-primary/10 text-primary">
                {item.customer
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium truncate">{item.customer}</p>
                <ChannelIcon channel={item.channel} />
              </div>
              <p className="text-sm text-muted-foreground truncate">{item.products}</p>
              <p className="text-xs text-muted-foreground truncate">{item.email}</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right">
              <p className="font-semibold">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.date}</p>
            </div>

            <StatusBadge status={item.status} />

            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
