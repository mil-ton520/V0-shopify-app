"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, CheckCircle, AlertCircle, ExternalLink, Settings, Zap } from "lucide-react"

const mockUser = {
  email: "demo@cartsaver.com",
  id: "demo-user-123",
}

export default function ShopifyPage() {
  return (
    <DashboardLayout user={mockUser}>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Integração Shopify</h1>
            <p className="text-gray-600 mt-1">Conecta e configura a tua loja Shopify.</p>
          </div>
          <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
            <ExternalLink className="w-4 h-4 mr-2" />
            Conectar Loja
          </Button>
        </div>

        {/* Connection Status */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <CardTitle>Estado da Conexão</CardTitle>
                  <CardDescription>Loja conectada e sincronizada</CardDescription>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <CheckCircle className="w-3 h-3 mr-1" />
                Conectado
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">Demo Store</div>
                <p className="text-sm text-gray-600">Nome da Loja</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">1,247</div>
                <p className="text-sm text-gray-600">Produtos Sincronizados</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">Há 5 min</div>
                <p className="text-sm text-gray-600">Última Sincronização</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Configuration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <CardTitle>Configurações</CardTitle>
                  <CardDescription>Personaliza a integração</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Webhook de Carrinho</p>
                  <p className="text-sm text-gray-500">Detectar carrinhos abandonados</p>
                </div>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Ativo</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Sincronização de Produtos</p>
                  <p className="text-sm text-gray-500">Atualizar catálogo automaticamente</p>
                </div>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Ativo</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Dados de Cliente</p>
                  <p className="text-sm text-gray-500">Importar informações de contacto</p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pendente</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <CardTitle>Ações Rápidas</CardTitle>
                  <CardDescription>Ferramentas úteis</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <ExternalLink className="w-4 h-4 mr-2" />
                Abrir Loja Shopify
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Settings className="w-4 h-4 mr-2" />
                Configurar Webhooks
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <CheckCircle className="w-4 h-4 mr-2" />
                Testar Conexão
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
              >
                <AlertCircle className="w-4 h-4 mr-2" />
                Desconectar Loja
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
