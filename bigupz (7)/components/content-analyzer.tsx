"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import {
  Wand2,
  ImageIcon,
  Video,
  Paperclip,
  Smile,
  Hash,
  Clock,
  AlertCircle,
  X,
  Camera,
  Sparkles,
  Lightbulb,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ContentAnalyzer() {
  const [caption, setCaption] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [result, setResult] = useState<{
    score: number
    suggestions: string[]
    hashtags: string[]
    imageAnalysis?: {
      composition: string
      colors: string[]
      subject: string
      improvement: string[]
    }
  } | null>(null)

  const handlePredict = async () => {
    if (!caption.trim() && !selectedImage) return

    setIsAnalyzing(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock prediction logic
    const score = Math.floor(60 + Math.random() * 30)

    const suggestionPool = [
      "Add more trending hashtags for better discoverability",
      "Try posting between 6-8 PM for better engagement",
      "Include a question to encourage comments",
      "Add emojis to make your caption more engaging",
      "Keep your caption concise and to the point",
      "Include a call-to-action at the end",
      "Mention other creators to increase reach",
      "Use storytelling to connect with your audience",
      "Include relevant keywords for better discoverability",
      "Add line breaks to make your caption more readable",
    ]

    const hashtagPool = [
      "#ContentCreator",
      "#GenZLife",
      "#TrendingNow",
      "#ViralContent",
      "#CreatorEconomy",
      "#SocialMediaTips",
      "#InfluencerMarketing",
      "#DigitalCreator",
    ]

    // Select 3 random suggestions
    const suggestions = []
    const indices = new Set()
    while (indices.size < 3) {
      indices.add(Math.floor(Math.random() * suggestionPool.length))
    }
    indices.forEach((index) => suggestions.push(suggestionPool[index as number]))

    // Select 4 random hashtags
    const hashtags = []
    const hashIndices = new Set()
    while (hashIndices.size < 4) {
      hashIndices.add(Math.floor(Math.random() * hashtagPool.length))
    }
    hashIndices.forEach((index) => hashtags.push(hashtagPool[index as number]))

    // Image analysis if an image is selected
    const imageAnalysis = selectedImage
      ? {
          composition: "Good rule of thirds, strong focal point",
          colors: ["Vibrant", "Complementary", "Eye-catching"],
          subject: "Clear subject with good contrast",
          improvement: [
            "Increase brightness slightly",
            "Consider a warmer filter",
            "Crop tighter to emphasize subject",
          ],
        }
      : undefined

    setResult({ score, suggestions, hashtags, imageAnalysis })
    setIsAnalyzing(false)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
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

    // Create a URL for the selected image
    const imageUrl = URL.createObjectURL(file)
    setSelectedImage(imageUrl)

    // Simulate API call delay
    setTimeout(() => {
      clearInterval(interval)
      setUploadProgress(100)
      setIsUploading(false)
    }, 1500)
  }

  const clearSelectedImage = () => {
    setSelectedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <Card className="bigupz-card">
      <CardContent className="p-6 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column - Input Section */}
          <div className="space-y-4">
            <div className="border rounded-xl p-4 space-y-4 bg-card shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-muted overflow-hidden">
                  <img src="/images/creator-1.jpg" alt="Your Profile" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-medium">Your Username</p>
                  <p className="text-xs text-foreground/70">Draft Post</p>
                </div>
              </div>

              {/* Image Upload Area */}
              {selectedImage ? (
                <div className="relative mb-4">
                  <div className="absolute top-2 right-2 z-10">
                    <Button
                      variant="destructive"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={clearSelectedImage}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <img
                    src={selectedImage || "/placeholder.svg"}
                    alt="Selected image"
                    className="w-full h-auto object-contain max-h-[200px] rounded-lg"
                  />
                </div>
              ) : (
                <div
                  onClick={triggerFileInput}
                  className="flex flex-col items-center justify-center p-4 border-2 border-dashed rounded-lg border-muted-foreground/25 cursor-pointer hover:bg-muted/10 transition-colors"
                >
                  <Camera className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm font-medium mb-1">Add an image</p>
                  <p className="text-xs text-foreground/70 text-center">
                    Upload an image to analyze alongside your caption
                  </p>
                  <input
                    type="file"
                    id="image-upload"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>
              )}

              {isUploading && (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Uploading image...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}

              <Textarea
                placeholder="Write your caption here..."
                className="min-h-[120px] border-none p-0 focus:ring-0 resize-none bg-transparent"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="h-9 w-9 rounded-full p-0">
                    <ImageIcon className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-9 w-9 rounded-full p-0">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-9 w-9 rounded-full p-0">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-9 w-9 rounded-full p-0">
                    <Smile className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-9 w-9 rounded-full p-0">
                    <Hash className="h-5 w-5" />
                  </Button>
                </div>
                <div className="text-xs text-foreground/70">{caption.length} / 2200</div>
              </div>
            </div>

            <Button
              onClick={handlePredict}
              disabled={isAnalyzing || (!caption.trim() && !selectedImage)}
              className="w-full bigupz-button bg-neon-purple text-white hover:bg-neon-purple/90 py-6"
            >
              {isAnalyzing ? (
                <>
                  <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-5 w-5" />
                  Analyze Content
                </>
              )}
            </Button>
          </div>

          {/* Right Column - Results Section */}
          <div className="flex flex-col items-center justify-center space-y-4">
            {result ? (
              <div className="space-y-6 w-full">
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-2">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold">{result.score}%</div>
                    </div>
                    <div className="absolute inset-0 border-8 border-muted rounded-full"></div>
                    <div
                      className="absolute inset-0 border-8 rounded-full border-neon-green"
                      style={{
                        clipPath: `polygon(0% 0%, ${result.score}% 0%, ${result.score}% 100%, 0% 100%)`,
                        transform: "rotate(-90deg)",
                        transformOrigin: "center",
                      }}
                    ></div>
                  </div>
                  <div className="text-center mb-4">
                    <p className="font-medium">
                      {result.score >= 70
                        ? "High viral potential!"
                        : result.score >= 50
                          ? "Moderate viral potential"
                          : "Low viral potential"}
                    </p>
                  </div>
                </div>

                <Tabs defaultValue="suggestions" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                    <TabsTrigger value="hashtags">Hashtags</TabsTrigger>
                    {result.imageAnalysis && <TabsTrigger value="image">Image Analysis</TabsTrigger>}
                  </TabsList>

                  <TabsContent value="suggestions" className="space-y-4 mt-4">
                    <div className="p-4 border rounded-lg bg-card shadow-sm">
                      <h3 className="font-medium mb-2 flex items-center">
                        <div className="h-6 w-6 rounded-full bg-neon-purple flex items-center justify-center mr-2">
                          <Lightbulb className="h-3 w-3 text-neon-green" />
                        </div>
                        Suggestions to improve:
                      </h3>
                      <ul className="space-y-2">
                        {result.suggestions.map((suggestion, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="mt-1 bg-neon-green h-2 w-2 rounded-full"></div>
                            <span className="text-sm">{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg bg-card shadow-sm">
                      <h3 className="font-medium mb-2 flex items-center">
                        <div className="h-6 w-6 rounded-full bg-neon-purple flex items-center justify-center mr-2">
                          <Clock className="h-3 w-3 text-neon-green" />
                        </div>
                        Best time to post:
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 bg-muted/50 rounded-lg text-center">
                          <p className="text-sm font-medium">Day</p>
                          <p className="text-lg">Tuesday</p>
                        </div>
                        <div className="p-2 bg-muted/50 rounded-lg text-center">
                          <p className="text-sm font-medium">Time</p>
                          <p className="text-lg">7:30 PM</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="hashtags" className="space-y-4 mt-4">
                    <div className="p-4 border rounded-lg bg-card shadow-sm">
                      <h3 className="font-medium mb-2 flex items-center">
                        <div className="h-6 w-6 rounded-full bg-neon-purple flex items-center justify-center mr-2">
                          <Hash className="h-3 w-3 text-neon-green" />
                        </div>
                        Recommended hashtags:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {result.hashtags.map((hashtag, index) => (
                          <span key={index} className="text-sm bg-muted px-2 py-1 rounded-full">
                            {hashtag}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-foreground/70 mt-4">
                        These hashtags are trending and relevant to your content. Using them can increase your
                        discoverability by up to 35%.
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg bg-card shadow-sm">
                      <h3 className="font-medium mb-2">Hashtag Strategy</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <div className="mt-1 bg-neon-green h-2 w-2 rounded-full"></div>
                          <span>Use a mix of popular and niche hashtags</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="mt-1 bg-neon-green h-2 w-2 rounded-full"></div>
                          <span>Place hashtags at the end of your caption</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="mt-1 bg-neon-green h-2 w-2 rounded-full"></div>
                          <span>Use 5-10 hashtags for optimal reach</span>
                        </li>
                      </ul>
                    </div>
                  </TabsContent>

                  {result.imageAnalysis && (
                    <TabsContent value="image" className="space-y-4 mt-4">
                      <div className="p-4 border rounded-lg bg-card shadow-sm">
                        <h3 className="font-medium mb-2 flex items-center">
                          <div className="h-6 w-6 rounded-full bg-neon-purple flex items-center justify-center mr-2">
                            <ImageIcon className="h-3 w-3 text-neon-green" />
                          </div>
                          Image Analysis:
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium">Composition:</p>
                            <p className="text-sm text-foreground/70">{result.imageAnalysis.composition}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Color Palette:</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {result.imageAnalysis.colors.map((color, index) => (
                                <span key={index} className="text-xs bg-muted px-2 py-1 rounded-full">
                                  {color}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Subject:</p>
                            <p className="text-sm text-foreground/70">{result.imageAnalysis.subject}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg bg-card shadow-sm">
                        <h3 className="font-medium mb-2 flex items-center">
                          <div className="h-6 w-6 rounded-full bg-neon-purple flex items-center justify-center mr-2">
                            <Wand2 className="h-3 w-3 text-neon-green" />
                          </div>
                          Image Improvements:
                        </h3>
                        <ul className="space-y-2">
                          {result.imageAnalysis.improvement.map((suggestion, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="mt-1 bg-neon-green h-2 w-2 rounded-full"></div>
                              <span className="text-sm">{suggestion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                  )}
                </Tabs>
              </div>
            ) : (
              <div className="relative w-full h-full min-h-[300px] rounded-lg overflow-hidden">
                <img src="/images/post-1.jpg" alt="Content example" className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6 py-4 glass-effect rounded-xl max-w-xs">
                    <Wand2 className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-medium">Add an image and/or write a caption</p>
                    <p className="text-sm text-foreground/70 mt-2">
                      Our AI will analyze your content against millions of viral posts
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 pt-0 px-6 pb-6">
        <div className="flex items-start space-x-2 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">Pro Tip</p>
            <p className="text-xs text-yellow-700 dark:text-yellow-400">
              Analyzing both your caption and image together provides 35% more accurate predictions than analyzing them
              separately.
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

