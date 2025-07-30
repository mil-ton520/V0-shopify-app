"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Camera, Square, Play, RotateCcw, Check, Upload } from "lucide-react"

interface VideoRecorderProps {
  onVideoRecorded: () => void
}

export function VideoRecorder({ onVideoRecorded }: VideoRecorderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [hasRecorded, setHasRecorded] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        streamRef.current = stream
      }

      setIsRecording(true)
      setRecordingTime(0)

      // Simular timer de gravação
      const timer = setInterval(() => {
        setRecordingTime((prev) => {
          if (prev >= 60) {
            stopRecording()
            clearInterval(timer)
            return 60
          }
          return prev + 1
        })
      }, 1000)
    } catch (error) {
      console.error("Erro ao acessar câmera:", error)
      alert("Erro ao acessar câmera. Verifique as permissões.")
    }
  }

  const stopRecording = () => {
    setIsRecording(false)
    setHasRecorded(true)

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
    }
  }

  const retakeVideo = () => {
    setHasRecorded(false)
    setRecordingTime(0)
  }

  const uploadVideo = async () => {
    setIsUploading(true)
    setUploadProgress(0)

    // Simular upload
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          onVideoRecorded()
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  if (isUploading) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Upload className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">A carregar vídeo...</h3>
          <p className="text-gray-600">O teu vídeo está a ser processado e otimizado.</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Progresso</span>
            <span>{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} className="h-2" />
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Video Preview */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative bg-gray-900 aspect-video flex items-center justify-center">
            {!hasRecorded ? (
              <video ref={videoRef} autoPlay muted className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center text-white">
                <div className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4" />
                  <p>Vídeo gravado com sucesso!</p>
                </div>
              </div>
            )}

            {/* Recording Indicator */}
            {isRecording && (
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-sm font-medium">REC {formatTime(recordingTime)}</span>
              </div>
            )}

            {/* Time Limit Indicator */}
            {isRecording && (
              <div className="absolute bottom-4 left-4 right-4">
                <Progress value={(recordingTime / 60) * 100} className="h-1" />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        {!isRecording && !hasRecorded && (
          <Button size="lg" onClick={startRecording} className="bg-red-500 hover:bg-red-600 text-white px-8">
            <Camera className="w-5 h-5 mr-2" />
            Começar Gravação
          </Button>
        )}

        {isRecording && (
          <Button size="lg" onClick={stopRecording} className="bg-gray-800 hover:bg-gray-900 text-white px-8">
            <Square className="w-5 h-5 mr-2" />
            Parar Gravação
          </Button>
        )}

        {hasRecorded && (
          <div className="flex gap-3">
            <Button variant="outline" size="lg" onClick={retakeVideo} className="px-6 bg-transparent">
              <RotateCcw className="w-5 h-5 mr-2" />
              Gravar Novamente
            </Button>
            <Button size="lg" onClick={uploadVideo} className="bg-green-500 hover:bg-green-600 text-white px-8">
              <Check className="w-5 h-5 mr-2" />
              Usar Este Vídeo
            </Button>
          </div>
        )}
      </div>

      {/* Tips */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-2">Dicas para um bom vídeo:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Fala de forma clara e natural</li>
          <li>• Mantém contacto visual com a câmera</li>
          <li>• Usa boa iluminação (luz natural é ideal)</li>
          <li>• Grava num ambiente silencioso</li>
          <li>• Duração ideal: 30-60 segundos</li>
        </ul>
      </div>
    </div>
  )
}
