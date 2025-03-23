"use client"

import { Navbar } from "@/components/navbar"
import { ViralPredictor } from "@/components/viral-predictor"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, BarChart2, Clock, Hash, Award } from "lucide-react"

export default function ViralPredictorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 p-4 md:p-8 pb-16 md:pb-8 mobile-pb">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h1>Viral Predictor</h1>
              <p className="text-foreground/70">Analyze your content before posting to maximize engagement</p>
            </div>
          </div>

          <div className="space-y-8">
            <ViralPredictor />

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bigupz-card">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-neon-green" />
                    How It Works
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-4">
                    Our AI-powered viral predictor analyzes your content against millions of viral posts to determine
                    its potential.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neon-green text-black">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Content Analysis</p>
                        <p className="text-sm text-foreground/70">
                          We analyze caption length, structure, keywords, and sentiment to identify patterns that drive
                          engagement.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neon-purple text-white">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Trend Comparison</p>
                        <p className="text-sm text-foreground/70">
                          Your content is compared to current trending patterns across multiple platforms to identify
                          opportunities.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neon-green text-black">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Engagement Prediction</p>
                        <p className="text-sm text-foreground/70">
                          Our algorithm calculates a viral score based on predicted likes, comments, shares, and saves.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neon-purple text-white">
                        <span className="text-sm font-bold">4</span>
                      </div>
                      <div>
                        <p className="font-medium">Actionable Suggestions</p>
                        <p className="text-sm text-foreground/70">
                          Receive personalized recommendations to improve your content before posting.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bigupz-card">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 h-5 w-5 text-neon-purple" />
                    Tips for Viral Content
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Hash className="h-5 w-5 text-neon-green" />
                        <h3 className="font-medium">Hashtag Strategy</h3>
                      </div>
                      <ul className="space-y-1">
                        <li className="text-sm text-foreground/70">Use 5-10 relevant hashtags</li>
                        <li className="text-sm text-foreground/70">Mix popular and niche tags</li>
                        <li className="text-sm text-foreground/70">Research trending hashtags daily</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="h-5 w-5 text-neon-purple" />
                        <h3 className="font-medium">Timing Matters</h3>
                      </div>
                      <ul className="space-y-1">
                        <li className="text-sm text-foreground/70">Post when your audience is active</li>
                        <li className="text-sm text-foreground/70">Test different times and days</li>
                        <li className="text-sm text-foreground/70">Consistency builds algorithm favor</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <BarChart2 className="h-5 w-5 text-neon-green" />
                        <h3 className="font-medium">Engagement Hooks</h3>
                      </div>
                      <ul className="space-y-1">
                        <li className="text-sm text-foreground/70">Ask questions in captions</li>
                        <li className="text-sm text-foreground/70">Include a call-to-action</li>
                        <li className="text-sm text-foreground/70">Respond to comments quickly</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-neon-purple" />
                        <h3 className="font-medium">Content Quality</h3>
                      </div>
                      <ul className="space-y-1">
                        <li className="text-sm text-foreground/70">High-quality visuals stand out</li>
                        <li className="text-sm text-foreground/70">First 3 seconds are critical</li>
                        <li className="text-sm text-foreground/70">Authenticity drives connection</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 border rounded-lg bg-muted/30">
                    <h3 className="font-medium mb-2">Pro Tip</h3>
                    <p className="text-sm text-foreground/70">
                      Creators who use our Viral Predictor before posting see an average 43% increase in engagement
                      compared to unpredicted content.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

