import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Zap, Shield, BarChart3, MessageSquare, CheckCircle, ArrowRight, Star, Users, Target } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Cart Saver</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#como-funciona" className="text-gray-600 hover:text-gray-900 transition-colors">
                Como funciona
              </Link>
              <Link href="#beneficios" className="text-gray-600 hover:text-gray-900 transition-colors">
                Benefícios
              </Link>
              <Link href="#precos" className="text-gray-600 hover:text-gray-900 transition-colors">
                Preços
              </Link>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600" asChild>
                <Link href="/dashboard">Começar teste grátis</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
              <Zap className="w-3 h-3 mr-1" />
              Nova tecnologia de recuperação
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Recupera até <span className="text-blue-500">3x mais carrinhos</span> abandonados com vídeos impossíveis
              de ignorar
            </h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Cart Saver é a primeira ferramenta Shopify que envia vídeos personalizados com a tua cara e voz para cada
              cliente que abandona o carrinho. Não é só mais um email — é uma mensagem humana, criada por IA, impossível
              de ignorar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-4" asChild>
                <Link href="/dashboard">
                  Começar teste grátis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                <Play className="w-5 h-5 mr-2" />
                Ver demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white"></div>
                </div>
                <span>Usado por 500+ lojas Shopify</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1">4.9/5 (127 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explicação */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">O que é a Cart Saver?</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Cart Saver é uma app para Shopify que transforma o abandono de carrinhos num momento de conexão pessoal.
            Assim que um cliente sai sem comprar, recebe um vídeo feito à sua medida — com a tua cara, a tua voz e uma
            oferta personalizada. Tudo automático, seguro e sem esforço.
          </p>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Porque escolher Cart Saver?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A única solução que combina tecnologia de IA com o toque humano que os teus clientes procuram.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vídeos reais, com IA</h3>
                <p className="text-gray-600">
                  Usa o teu rosto e voz reais para criar vídeos personalizados. Cada cliente recebe uma mensagem única e
                  autêntica.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Integração 1-clique</h3>
                <p className="text-gray-600">
                  Liga-te ao Shopify em segundos. Sem configurações complexas, sem código, sem dores de cabeça.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sequências ilimitadas</h3>
                <p className="text-gray-600">
                  Cria funis flexíveis com múltiplos pontos de contacto. Personaliza timing, ofertas e mensagens.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-canal</h3>
                <p className="text-gray-600">
                  Envia via email, WhatsApp ou push notification. Chega aos clientes onde eles estão mais atentos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Métricas em tempo real</h3>
                <p className="text-gray-600">
                  Acompanha taxas de abertura, cliques e conversões. Otimiza as tuas campanhas com dados precisos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">GDPR Compliant</h3>
                <p className="text-gray-600">
                  Totalmente seguro e em conformidade com regulamentos de privacidade. Os teus dados estão protegidos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Como funciona?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Três passos simples para começares a recuperar mais carrinhos hoje mesmo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Liga e grava</h3>
              <p className="text-gray-600">
                Conecta a tua loja Shopify e grava um vídeo base de 30 segundos. A nossa IA vai usar a tua imagem e voz
                para criar variações personalizadas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">IA trabalha por ti</h3>
              <p className="text-gray-600">
                Quando um cliente abandona o carrinho, a IA cria automaticamente um vídeo personalizado e envia-o pelos
                melhores canais no timing perfeito.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Acompanha resultados</h3>
              <p className="text-gray-600">
                Vê o aumento nas recuperações diretamente no dashboard. Analisa métricas detalhadas e otimiza as tuas
                campanhas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Pronto para recuperar mais carrinhos?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Junta-te a centenas de lojas que já estão a usar Cart Saver para aumentar as suas vendas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-4" asChild>
              <Link href="/dashboard">
                Começar teste grátis de 14 dias
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
              <Play className="w-5 h-5 mr-2" />
              Ver demo ao vivo
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 text-sm text-gray-500">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Configuração em 5 minutos</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Suporte 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Cart Saver</span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                A primeira ferramenta Shopify que recupera carrinhos abandonados através de vídeos personalizados com
                IA.
              </p>
              <div className="text-sm text-gray-500">
                <p>© 2024 Cart Saver. Todos os direitos reservados.</p>
                <p className="mt-1">GDPR Compliant • Dados seguros • Privacidade garantida</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Como funciona
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Preços
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Integrações
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Centro de ajuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Termos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
