"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { FileUploader } from "@/components/file-uploader"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowRight, Check, Shield } from "lucide-react"

export default function UploadPage() {
  const router = useRouter()
  const [connectedAccounts, setConnectedAccounts] = useState<string[]>([])

  const handleUploadComplete = () => {
    router.push("/dashboard")
  }

  const handleConnectAccount = (platform: string) => {
    // In a real app, this would trigger the OAuth flow
    // For now, we'll just simulate a successful connection
    setTimeout(() => {
      setConnectedAccounts((prev) => [...prev, platform])
    }, 1000)
  }

  const socialPlatforms = [
    {
      name: "Instagram",
      logo: "/images/social/instagram-logo.png",
      color: "#E1306C",
      bgColor: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
          <path
            fill="currentColor"
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
          />
        </svg>
      ),
    },
    {
      name: "TikTok",
      logo: "/images/social/tiktok-logo.png",
      color: "#000000",
      bgColor: "bg-black",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
          <path
            fill="currentColor"
            d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      logo: "/images/social/youtube-logo.png",
      color: "#FF0000",
      bgColor: "bg-red-600",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
          <path
            fill="currentColor"
            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      logo: "/images/social/twitter-logo.png",
      color: "#1DA1F2",
      bgColor: "bg-blue-400",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
          <path
            fill="currentColor"
            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
          />
        </svg>
      ),
    },
    {
      name: "Facebook",
      logo: "/images/social/facebook-logo.png",
      color: "#4267B2",
      bgColor: "bg-blue-600",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
          <path
            fill="currentColor"
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      logo: "/images/social/linkedin-logo.png",
      color: "#0077B5",
      bgColor: "bg-blue-700",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
          <path
            fill="currentColor"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Upload Your Social Data</h1>

          <Tabs defaultValue="connect" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="connect">Connect Accounts</TabsTrigger>
              <TabsTrigger value="upload">Manual Upload</TabsTrigger>
            </TabsList>

            <TabsContent value="connect">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Connect Your Social Media Accounts</CardTitle>
                  <CardDescription>
                    Connect your accounts directly for automatic data import and real-time analytics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {socialPlatforms.map((platform) => (
                      <div
                        key={platform.name}
                        className="border rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="p-6 flex flex-col items-center text-center">
                          <div
                            className={`h-16 w-16 rounded-full ${platform.bgColor} mb-4 flex items-center justify-center`}
                          >
                            {platform.icon}
                          </div>
                          <h3 className="font-medium mb-1">{platform.name}</h3>
                          <p className="text-xs text-foreground/70 mb-4">Connect your {platform.name} account</p>
                          {connectedAccounts.includes(platform.name) ? (
                            <Button variant="outline" className="w-full" disabled>
                              <Check className="mr-2 h-4 w-4" />
                              Connected
                            </Button>
                          ) : (
                            <Button
                              className={`w-full text-white ${platform.bgColor} hover:opacity-90`}
                              onClick={() => handleConnectAccount(platform.name)}
                            >
                              Connect
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-6">
                  <div className="flex items-start space-x-2">
                    <Shield className="h-5 w-5 text-blue-500 mt-0.5" />
                    <p className="text-sm text-foreground/70">
                      We use secure OAuth to connect to your accounts. BigUpz will never post without your permission.
                    </p>
                  </div>
                  {connectedAccounts.length > 0 && (
                    <Button
                      onClick={() => router.push("/dashboard")}
                      className="bg-neon-purple text-white hover:bg-neon-purple/90"
                    >
                      Continue to Dashboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </CardFooter>
              </Card>

              {connectedAccounts.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Connected Accounts</CardTitle>
                    <CardDescription>Your connected social media accounts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {connectedAccounts.map((account) => {
                        const platform = socialPlatforms.find((p) => p.name === account)!
                        return (
                          <div key={account} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`h-10 w-10 rounded-full ${platform.bgColor} flex items-center justify-center`}
                              >
                                {platform.icon}
                              </div>
                              <div>
                                <p className="font-medium">{account}</p>
                                <p className="text-xs text-foreground/70">Connected just now</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Manage
                            </Button>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="upload">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Upload Social Media Data</CardTitle>
                  <CardDescription>Upload your social media data exports to get personalized insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <FileUploader onUploadComplete={handleUploadComplete} />
                </CardContent>
              </Card>

              <div className="space-y-6">
                <h2 className="text-xl font-semibold">How to export your data</h2>

                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Instagram</h3>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Go to your profile and tap the menu icon in the top right</li>
                      <li>Tap Settings, then Privacy and Security</li>
                      <li>Scroll down to Data Download and tap Request Download</li>
                      <li>Enter your email and password</li>
                      <li>Select JSON format and tap Next</li>
                    </ol>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">TikTok</h3>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Go to your profile and tap the three-line menu icon</li>
                      <li>Tap Settings and Privacy, then Privacy</li>
                      <li>Tap Download Your Data</li>
                      <li>Select JSON format and tap Request Data</li>
                    </ol>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">YouTube</h3>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Go to your Google Account</li>
                      <li>Select Data & Privacy</li>
                      <li>Under "Download or delete your data," select Download your data</li>
                      <li>Select YouTube and choose JSON format</li>
                      <li>Click Next and create export</li>
                    </ol>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

