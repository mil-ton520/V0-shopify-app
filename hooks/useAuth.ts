"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function useAuth() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const signUp = async (email: string, password: string) => {
    try {
      setLoading(true)
      setError(null)

      // Simular delay de API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simular sucesso
      router.push("/dashboard")
    } catch (error: any) {
      setError("Erro ao criar conta")
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true)
      setError(null)

      // Simular delay de API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simular sucesso
      router.push("/dashboard")
    } catch (error: any) {
      setError("Erro ao fazer login")
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setLoading(true)
      router.push("/")
    } catch (error: any) {
      setError("Erro ao sair")
    } finally {
      setLoading(false)
    }
  }

  return {
    signUp,
    signIn,
    signOut,
    loading,
    error,
  }
}
