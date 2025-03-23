"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Wand2,
  ImageIcon,
  Video,
  Paperclip,
  Smile,
  Hash,
  Clock,
  TrendingUp,
  BarChart2,
  AlertCircle,
  Upload,
  X,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function ViralPredictor() {
  const [caption, setCaption] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [imageAnalysisResult, setImageAnalysisResult] = useState<{
    score: number
    suggestions: string[]
    tags: string[]
    colors: string[]
    composition: string
  } | null>(null)
  const [result, setResult] = useState<{
    score: number
    suggestions: string[]
    hashtags: string[]
  } | null>(null)

  const handlePredict = async () => {
    if (!caption.trim()) return

    setIsAnalyzing(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock prediction logic
    const score = Math.floor(50 + Math.random() * 40)

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
    indices.forEach((index) => suggestions.push(suggestionPool[index]))

    // Select 4 random hashtags
    const hashtags = []
    const hashIndices = new Set()
    while (hashIndices.size < 4) {
      hashIndices.add(Math.floor(Math.random() * hashtagPool.length))
    }
    hashIndices.forEach((index) => hashtags.push(hashtagPool[index]))

    setResult({ score, suggestions, hashtags })
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

      // Generate mock image analysis
      const score = Math.floor(60 + Math.random() * 30)
      const suggestions = [
        "Use more vibrant colors for better engagement",
        "Center the main subject for improved composition",
        "Add a subtle filter to enhance visual appeal",
        "Ensure good lighting to highlight details",
      ]
      const tags = ["#Photography", "#Lifestyle", "#Travel", "#Aesthetic", "#Vacation"]
      const colors = ["Neutral tones", "Blue accents", "Natural lighting"]
      const composition = "Good rule of thirds, could improve subject focus"

      setImageAnalysisResult({
        score,
        suggestions: suggestions.slice(0, 3),
        tags,
        colors,
        composition,
      })
    }, 2000)
  }

  const clearSelectedImage = () => {
    setSelectedImage(null)
    setImageAnalysisResult(null)
  }

  return (
    <Card className="bigupz-card">
      <CardHeader>
        <CardTitle className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-neon-purple flex items-center justify-center mr-2">
            <TrendingUp className="h-4 w-4 text-neon-green" />
          </div>
          Viral Predictor
        </CardTitle>
        <CardDescription>Analyze your content before posting to maximize engagement</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="caption" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="caption">Caption Analysis</TabsTrigger>
            <TabsTrigger value="image">Image Analysis</TabsTrigger>
          </TabsList>
          <TabsContent value="caption" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
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

                  <Textarea
                    placeholder="Write your caption here..."
                    className="min-h-[150px] border-none p-0 focus:ring-0 resize-none bg-transparent"
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
                  disabled={isAnalyzing || !caption.trim()}
                  className="w-full bigupz-button bg-neon-purple text-white hover:bg-neon-purple/90 py-6"
                >
                  <Wand2 className="mr-2 h-5 w-5" />
                  {isAnalyzing ? "Analyzing..." : "Predict Viral Score"}
                </Button>
              </div>

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

                    <div className="space-y-4 w-full">
                      <div className="p-4 border rounded-lg bg-card shadow-sm">
                        <h3 className="font-medium mb-2 flex items-center">
                          <div className="h-6 w-6 rounded-full bg-neon-purple flex items-center justify-center mr-2">
                            <Wand2 className="h-3 w-3 text-neon-green" />
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
                            <p className="text-lg">7:00 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full min-h-[300px] rounded-lg overflow-hidden">
                    <img
                      src="/images/post-1.jpg"
                      alt="Content example"
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center px-6 py-4 glass-effect rounded-xl max-w-xs">
                        <Wand2 className="h-8 w-8 mx-auto mb-2" />
                        <p className="font-medium">Enter your caption and click "Predict Viral Score"</p>
                        <p className="text-sm text-foreground/70 mt-2">
                          Our AI will analyze your content against millions of viral posts
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="image" className="space-y-4">
            {!selectedImage ? (
              <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg border-muted-foreground/25">
                <ImageIcon className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Upload an image for analysis</h3>
                <p className="text-sm text-foreground/70 text-center mb-4">
                  Our AI will analyze your image for viral potential based on composition, colors, and content
                </p>
                <div className="relative">
                  <input
                    type="file"
                    id="image-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  <label htmlFor="image-upload">
                    <Button
                      className="bigupz-button bg-neon-green text-black hover:bg-neon-green/90 dark:text-black"
                      as="span"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Image
                    </Button>
                  </label>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {isUploading ? (
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Uploading image...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </div>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="relative">
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
                        <div className="border rounded-xl overflow-hidden">
                          <img
                            src={selectedImage || "/placeholder.svg"}
                            alt="Selected image"
                            className="w-full h-auto object-contain max-h-[400px]"
                          />
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg bg-card shadow-sm">
                        <h3 className="font-medium mb-2">Image Details</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-foreground/70">Type:</span>
                            <span>Lifestyle Photo</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/70">Resolution:</span>
                            <span>High Quality</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/70">Aspect Ratio:</span>
                            <span>4:3</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {imageAnalysisResult && (
                      <div className="space-y-4">
                        <div className="flex flex-col items-center">
                          <div className="relative w-32 h-32 mb-2">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-4xl font-bold">{imageAnalysisResult.score}%</div>
                            </div>
                            <div className="absolute inset-0 border-8 border-muted rounded-full"></div>
                            <div
                              className="absolute inset-0 border-8 rounded-full border-neon-green"
                              style={{
                                clipPath: `polygon(0% 0%, ${imageAnalysisResult.score}% 0%, ${imageAnalysisResult.score}% 100%, 0% 100%)`,
                                transform: "rotate(-90deg)",
                                transformOrigin: "center",
                              }}
                            ></div>
                          </div>
                          <div className="text-center mb-4">
                            <p className="font-medium">
                              {imageAnalysisResult.score >= 70
                                ? "High viral potential!"
                                : imageAnalysisResult.score >= 50
                                  ? "Moderate viral potential"
                                  : "Low viral potential"}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 border rounded-lg bg-card shadow-sm">
                          <h3 className="font-medium mb-2 flex items-center">
                            <div className="h-6 w-6 rounded-full bg-neon-purple flex items-center justify-center mr-2">
                              <Wand2 className="h-3 w-3 text-neon-green" />
                            </div>
                            Suggestions to improve:
                          </h3>
                          <ul className="space-y-2">
                            {imageAnalysisResult.suggestions.map((suggestion, index) => (
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
                              <Hash className="h-3 w-3 text-neon-green" />
                            </div>
                            Recommended tags:
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {imageAnalysisResult.tags.map((tag, index) => (
                              <span key={index} className="text-sm bg-muted px-2 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="p-4 border rounded-lg bg-card shadow-sm">
                          <h3 className="font-medium mb-2 flex items-center">
                            <div className="h-6 w-6 rounded-full bg-neon-purple flex items-center justify-center mr-2">
                              <BarChart2 className="h-3 w-3 text-neon-green" />
                            </div>
                            Analysis:
                          </h3>
                          <div className="space-y-2">
                            <div>
                              <p className="text-sm font-medium">Color Palette:</p>
                              <p className="text-sm text-foreground/70">{imageAnalysisResult.colors.join(", ")}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Composition:</p>
                              <p className="text-sm text-foreground/70">{imageAnalysisResult.composition}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 pt-0">
        <div className="flex items-start space-x-2 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">Pro Tip</p>
            <p className="text-xs text-yellow-700 dark:text-yellow-400">
              Posts with a viral score above 75% typically see 3x more engagement than average posts.
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

