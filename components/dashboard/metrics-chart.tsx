"use client"

export function MetricsChart() {
  const data = [
    { month: "Jan", recovery: 18.2 },
    { month: "Fev", recovery: 19.8 },
    { month: "Mar", recovery: 21.4 },
    { month: "Abr", recovery: 22.1 },
    { month: "Mai", recovery: 23.7 },
    { month: "Jun", recovery: 24.8 },
  ]

  return (
    <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Gráfico de Evolução</h3>
        <p className="text-gray-600 mb-4">Taxa de recuperação nos últimos 6 meses</p>
        <div className="flex justify-center gap-4 text-sm">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              <div className="font-medium text-gray-900">{item.month}</div>
              <div className="text-blue-500">{item.recovery}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
