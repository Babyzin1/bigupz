"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, User, Check } from "lucide-react"
import { useRouter } from "next/navigation"
import { FileUploader } from "@/components/file-uploader"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })
  const [connectedAccounts, setConnectedAccounts] = useState<string[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    nextStep()
  }

  const handleFileUploadComplete = () => {
    // In a real app, we would process the file here
    router.push("/dashboard")
  }

  const handleConnectAccount = (platform: string) => {
    // In a real app, this would trigger the OAuth flow
    // For now, we'll just simulate a successful connection
    setConnectedAccounts((prev) => [...prev, platform])
  }

  const socialPlatforms = [
    {
      name: "Instagram",
      color: "#E1306C",
      bgColor: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
          <path
            fill="currentColor"
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
          />
        </svg>
      ),
    },
    {
      name: "TikTok",
      color: "#000000",
      bgColor: "bg-black",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
          <path
            fill="currentColor"
            d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      color: "#FF0000",
      bgColor: "bg-red-600",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
          <path
            fill="currentColor"
            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      color: "#1DA1F2",
      bgColor: "bg-blue-400",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
          <path
            fill="currentColor"
            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">
              {step === 1 && "Welcome to BigUpz!"}
              {step === 2 && "Create Your Account"}
              {step === 3 && "Connect Your Accounts"}
              {step === 4 && "Upload Your Social Data"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Let's get you set up with your new AI-powered social media assistant."}
              {step === 2 && "Fill in your details to create your account."}
              {step === 3 && "Connect your social media accounts for better insights."}
              {step === 4 && "Upload your social media data to get personalized insights."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-neon-green to-neon-purple rounded-full flex items-center justify-center">
                    <User className="h-12 w-12 text-white" />
                  </div>
                </div>
                <p className="text-center">
                  BigUpz helps you analyze your social media performance, predict viral content, and generate AI-powered
                  responses.
                </p>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Connect your social media accounts to get the most out of BigUpz. We'll analyze your content and
                  provide personalized recommendations.
                </p>
                <div className="grid gap-3">
                  {socialPlatforms.map((platform) => (
                    <div
                      key={platform.name}
                      className="border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="p-4 flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`h-10 w-10 rounded-full ${platform.bgColor} flex items-center justify-center`}
                          >
                            {platform.icon}
                          </div>
                          <div>
                            <p className="font-medium">{platform.name}</p>
                            <p className="text-xs text-foreground/70">Connect your {platform.name} account</p>
                          </div>
                        </div>
                        {connectedAccounts.includes(platform.name) ? (
                          <div className="flex items-center text-green-500">
                            <Check className="h-5 w-5 mr-1" />
                            <span className="text-sm">Connected</span>
                          </div>
                        ) : (
                          <Button
                            size="sm"
                            className={`text-white ${platform.bgColor} hover:opacity-90`}
                            onClick={() => handleConnectAccount(platform.name)}
                          >
                            Connect
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {connectedAccounts.length > 0 && (
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-800 dark:text-green-300 text-sm">
                    <p className="font-medium">Great! You've connected {connectedAccounts.length} account(s).</p>
                    <p className="text-xs mt-1">You can connect more accounts later from your dashboard.</p>
                  </div>
                )}
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <FileUploader onUploadComplete={handleFileUploadComplete} />
                <div className="text-sm text-muted-foreground">
                  <p>Upload your social media data exports (JSON format).</p>
                  <p className="mt-2">We accept data from Instagram, TikTok, YouTube, and other platforms.</p>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button variant="outline" onClick={prevStep}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            ) : (
              <div></div>
            )}
            {step < 4 ? (
              <Button onClick={nextStep} className="bg-neon-green text-black hover:bg-neon-green/90">
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleFileUploadComplete} className="bg-neon-green text-black hover:bg-neon-green/90">
                Skip for Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

