"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Download, Wand2, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function NewsletterPage() {
  const [selectedTone, setSelectedTone] = useState("friendly")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")

  const tones = [
    { value: "friendly", label: "Friendly" },
    { value: "professional", label: "Professional" },
    { value: "hype", label: "Hype" },
    { value: "casual", label: "Casual" },
  ]

  const handleGenerate = async () => {
    setIsGenerating(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock generated content based on tone
    let content = ""

    if (selectedTone === "friendly") {
      content = `Hey there! 👋

Hope you've been doing amazing! I wanted to share some exciting updates with you.

## What's New This Month

I just posted a new video about "10 Tips for Content Creators" that's already getting tons of love! If you haven't checked it out yet, I'd really appreciate your support. 💕

Also, I've been experimenting with some new editing techniques that I think you'll love in my upcoming content.

## Coming Soon

Next week, I'll be sharing my complete workflow for creating viral content. Make sure you're subscribed so you don't miss it!

Thanks for being part of this journey with me!

Talk soon,
[Your Name]`
    } else if (selectedTone === "professional") {
      content = `Dear Subscribers,

I hope this newsletter finds you well. I'm writing to share some important updates regarding my content schedule and recent developments.

## Recent Highlights

My latest analysis on "Content Creation Strategies for 2023" has received significant engagement. The data-driven approach seems to have resonated with many of you, and I appreciate your thoughtful comments.

## Upcoming Content

In the coming weeks, I will be releasing an in-depth guide on optimizing your content for algorithm changes. This comprehensive resource will include actionable strategies based on recent platform updates.

Thank you for your continued support and professional engagement.

Best regards,
[Your Name]`
    } else if (selectedTone === "hype") {
      content = `WHAT'S UP EVERYONE!!! 🔥🔥🔥

OMG you guys are NOT going to believe what I've been working on!!! 😱

## INSANE NEWS!!!

My latest video ABSOLUTELY BLEW UP with over 100K views in just 24 HOURS!!! This is CRAZY and I couldn't have done it without YOU! 🙌

## MASSIVE ANNOUNCEMENT!!!

I'm dropping the BIGGEST project of my career next week!!! It's going to be GAME-CHANGING and you DO NOT want to miss this!!! Hit that notification bell RIGHT NOW!!!

LOVE YOU ALL SO MUCH!!! Let's keep CRUSHING IT!!! 💯💯💯

STAY TUNED!!!
[Your Name]`
    } else if (selectedTone === "casual") {
      content = `Hey!

Just checking in with a quick update on what's been happening lately.

## Recent Stuff

So I made this video about content creation tips the other day, and it's doing pretty well! Thanks to everyone who watched and left comments - you guys are cool.

## What's Next

I'm thinking about doing a Q&A soon, so drop any questions you have in the comments of my latest post. Might also try some different content styles, we'll see how it goes.

Anyway, that's it for now. Thanks for hanging out!

Later,
[Your Name]`
    }

    setGeneratedContent(content)
    setIsGenerating(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">AI Newsletter Generator</h1>

          <Alert className="mb-8">
            <Info className="h-4 w-4" />
            <AlertTitle>How it works</AlertTitle>
            <AlertDescription>
              Our AI analyzes your recent social media posts, engagement patterns, and audience demographics to generate
              personalized newsletter content. Select your preferred tone below and click "Generate Newsletter" to
              create content tailored to your audience.
            </AlertDescription>
          </Alert>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Newsletter Preview</CardTitle>
              <CardDescription>Your AI-generated newsletter content</CardDescription>
            </CardHeader>
            <CardContent>
              {generatedContent ? (
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <div className="whitespace-pre-line">{generatedContent}</div>
                </div>
              ) : (
                <div className="h-[300px] flex items-center justify-center text-center p-4 border border-dashed rounded-lg">
                  <p className="text-muted-foreground">
                    {isGenerating
                      ? "Generating your newsletter..."
                      : "Select your preferences below and click 'Generate Newsletter' to create content"}
                  </p>
                </div>
              )}
            </CardContent>
            {generatedContent && (
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline" onClick={handleCopy}>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            )}
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Newsletter Settings</CardTitle>
              <CardDescription>Customize your AI-generated newsletter</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Select Tone</h3>
                <div className="grid grid-cols-2 gap-2">
                  {tones.map((tone) => (
                    <Button
                      key={tone.value}
                      variant={selectedTone === tone.value ? "default" : "outline"}
                      className={selectedTone === tone.value ? "bg-neon-green text-black hover:bg-neon-green/90" : ""}
                      onClick={() => setSelectedTone(tone.value)}
                    >
                      {tone.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Content Sources</h3>
                <div className="p-3 border rounded-lg bg-muted/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-6 w-6 rounded-full bg-neon-purple flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 text-neon-green"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </div>
                    <span className="text-sm">Recent Instagram posts (3)</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-6 w-6 rounded-full bg-neon-purple flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 text-neon-green"
                      >
                        <path d="M22 4s-.7-1.1-2.9-1.1H5C2.8 2.9 2 4 2 4l1.7 6.8C4.2 12.1 5.5 13 7 13h11c1.5 0 2.7-.9 3.3-2.2L22 4Z"></path>
                        <path d="M4.5 14.5c1 3.6 3 5.5 7.5 5.5s6.5-1.9 7.5-5.5"></path>
                      </svg>
                    </div>
                    <span className="text-sm">Top performing content</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-6 w-6 rounded-full bg-neon-purple flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 text-neon-green"
                      >
                        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                        <path d="M10 2c1 .5 2 2 2 5"></path>
                      </svg>
                    </div>
                    <span className="text-sm">Audience interests</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-neon-purple text-white hover:bg-neon-purple/90"
              >
                <Wand2 className="mr-2 h-4 w-4" />
                {isGenerating ? "Generating..." : "Generate Newsletter"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

