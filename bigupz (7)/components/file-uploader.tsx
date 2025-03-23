"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface FileUploaderProps {
  onUploadComplete: () => void
}

export function FileUploader({ onUploadComplete }: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0])
      setUploadError(null)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/json": [".json"],
    },
    maxFiles: 1,
  })

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval)
          return 95
        }
        return prev + 5
      })
    }, 100)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      clearInterval(interval)
      setUploadProgress(100)
      setUploadSuccess(true)

      // Simulate processing time
      setTimeout(() => {
        onUploadComplete()
      }, 1000)
    } catch (error) {
      clearInterval(interval)
      setUploadError("Upload failed. Please try again.")
      setUploading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragActive
            ? "border-neon-green bg-neon-green/10"
            : "border-muted-foreground/25 hover:border-muted-foreground/50"
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center space-y-2">
          <Upload className="h-8 w-8 text-muted-foreground" />
          <p className="text-sm font-medium">
            {isDragActive ? "Drop the file here" : "Drag and drop your JSON file here, or click to select"}
          </p>
          <p className="text-xs text-muted-foreground">
            Supports JSON files from Instagram, TikTok, and other platforms
          </p>
        </div>
      </div>

      {file && !uploading && !uploadSuccess && (
        <div className="flex items-center justify-between p-2 border rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-muted rounded-md flex items-center justify-center">
              <span className="text-xs font-medium">.JSON</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium truncate max-w-[200px]">{file.name}</p>
              <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
            </div>
          </div>
          <Button onClick={handleUpload} className="bg-neon-green text-black hover:bg-neon-green/90">
            Upload
          </Button>
        </div>
      )}

      {uploading && (
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>Uploading...</span>
            <span>{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} className="h-2" />
        </div>
      )}

      {uploadSuccess && (
        <div className="flex items-center space-x-2 text-green-500">
          <Check className="h-5 w-5" />
          <span>Upload complete!</span>
        </div>
      )}

      {uploadError && (
        <div className="flex items-center space-x-2 text-red-500">
          <AlertCircle className="h-5 w-5" />
          <span>{uploadError}</span>
        </div>
      )}
    </div>
  )
}

