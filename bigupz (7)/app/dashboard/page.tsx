"use client"

import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart2,
  MessageSquare,
  TrendingUp,
  Users,
  Calendar,
  Clock,
  Award,
  Zap,
  Upload,
  Mail,
  PieChart,
  ArrowRight,
  Settings,
  Wand2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 p-4 md:p-8 pb-16 md:pb-8 mobile-pb">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1>Dashboard</h1>
            <p className="text-foreground/70">Welcome back! Here's what's happening with your content</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="bigupz-button">
              <Calendar className="mr-2 h-4 w-4" />
              Last 30 Days
            </Button>
            <Button size="sm" className="bigupz-button bg-neon-green text-black hover:bg-neon-green/90 dark:text-black">
              <Zap className="mr-2 h-4 w-4" />
              Refresh Data
            </Button>
          </div>
        </div>

        {/* Quick Access Feature Cards */}
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6 mb-8">
          <Link href="/content-analysis">
            <Card className="bigupz-card h-full hover:shadow-md transition-all cursor-pointer group">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <div className="h-12 w-12 rounded-full bg-neon-purple flex items-center justify-center mb-3 group-hover:bg-neon-purple/80 transition-colors">
                  <Wand2 className="h-6 w-6 text-neon-green" />
                </div>
                <h3 className="text-base font-medium mb-1">Content Analysis</h3>
                <p className="text-xs text-foreground/70">Analyze captions and images</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/upload">
            <Card className="bigupz-card h-full hover:shadow-md transition-all cursor-pointer group">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <div className="h-12 w-12 rounded-full bg-neon-purple flex items-center justify-center mb-3 group-hover:bg-neon-purple/80 transition-colors">
                  <Upload className="h-6 w-6 text-neon-green" />
                </div>
                <h3 className="text-base font-medium mb-1">Upload Data</h3>
                <p className="text-xs text-foreground/70">Import your social media data</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/newsletter">
            <Card className="bigupz-card h-full hover:shadow-md transition-all cursor-pointer group">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <div className="h-12 w-12 rounded-full bg-neon-purple flex items-center justify-center mb-3 group-hover:bg-neon-purple/80 transition-colors">
                  <Mail className="h-6 w-6 text-neon-green" />
                </div>
                <h3 className="text-base font-medium mb-1">Newsletter</h3>
                <p className="text-xs text-foreground/70">Create AI newsletters</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/insights">
            <Card className="bigupz-card h-full hover:shadow-md transition-all cursor-pointer group">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <div className="h-12 w-12 rounded-full bg-neon-purple flex items-center justify-center mb-3 group-hover:bg-neon-purple/80 transition-colors">
                  <PieChart className="h-6 w-6 text-neon-green" />
                </div>
                <h3 className="text-base font-medium mb-1">Insights</h3>
                <p className="text-xs text-foreground/70">Detailed analytics</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/comments">
            <Card className="bigupz-card h-full hover:shadow-md transition-all cursor-pointer group">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <div className="h-12 w-12 rounded-full bg-neon-purple flex items-center justify-center mb-3 group-hover:bg-neon-purple/80 transition-colors">
                  <MessageSquare className="h-6 w-6 text-neon-green" />
                </div>
                <h3 className="text-base font-medium mb-1">Comment Agent</h3>
                <p className="text-xs text-foreground/70">Auto-respond to comments</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/settings">
            <Card className="bigupz-card h-full hover:shadow-md transition-all cursor-pointer group">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <div className="h-12 w-12 rounded-full bg-neon-purple flex items-center justify-center mb-3 group-hover:bg-neon-purple/80 transition-colors">
                  <Settings className="h-6 w-6 text-neon-green" />
                </div>
                <h3 className="text-base font-medium mb-1">Settings</h3>
                <p className="text-xs text-foreground/70">Account preferences</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bigupz-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
              <div className="h-8 w-8 rounded-full bg-neon-purple flex items-center justify-center">
                <Users className="h-4 w-4 text-neon-green" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,345</div>
              <div className="flex items-center mt-1">
                <span className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full">
                  +15% from last month
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="bigupz-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              <div className="h-8 w-8 rounded-full bg-neon-purple flex items-center justify-center">
                <BarChart2 className="h-4 w-4 text-neon-green" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.6%</div>
              <div className="flex items-center mt-1">
                <span className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full">
                  +2.1% from last month
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="bigupz-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Comments</CardTitle>
              <div className="h-8 w-8 rounded-full bg-neon-purple flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-neon-green" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <div className="flex items-center mt-1">
                <span className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full">
                  +8 from last month
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="bigupz-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Viral Score</CardTitle>
              <div className="h-8 w-8 rounded-full bg-neon-purple flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-neon-green" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <div className="flex items-center mt-1">
                <span className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full">
                  +12% from last month
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="bigupz-button p-1">
            <TabsTrigger value="overview" className="bigupz-button">
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="bigupz-button">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="content" className="bigupz-button">
              Content
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bigupz-card col-span-2">
                <CardHeader>
                  <CardTitle>Viral Predictor</CardTitle>
                  <CardDescription>AI-powered analysis of your content's viral potential</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-5xl font-bold">78%</div>
                      </div>
                      <div className="absolute inset-0 border-8 border-muted rounded-full"></div>
                      <div
                        className="absolute inset-0 border-8 border-neon-green rounded-full"
                        style={{
                          clipPath: "polygon(0% 0%, 78% 0%, 78% 100%, 0% 100%)",
                          transform: "rotate(-90deg)",
                          transformOrigin: "center",
                        }}
                      ></div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3>Your Latest Post</h3>
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-muted rounded-md overflow-hidden">
                          <img src="/images/post-1.jpg" alt="Latest Post" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">My morning routine for productivity...</p>
                          <p className="text-sm text-foreground/70">Posted 2 days ago</p>
                          <div className="flex space-x-4 text-sm mt-1">
                            <span>❤️ 1.2k</span>
                            <span>💬 234</span>
                            <span>🔄 56</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Improvement Suggestions:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start space-x-2">
                            <div className="mt-1 bg-neon-green h-2 w-2 rounded-full"></div>
                            <span className="text-sm">Add trending hashtag #MorningRoutine</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="mt-1 bg-neon-green h-2 w-2 rounded-full"></div>
                            <span className="text-sm">Post between 7-9 AM for better reach</span>
                          </li>
                        </ul>
                      </div>
                      <Link href="/viral-predictor">
                        <Button variant="outline" size="sm" className="bigupz-button">
                          Analyze New Content
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bigupz-card">
                <CardHeader>
                  <CardTitle>AI Suggestions</CardTitle>
                  <CardDescription>Personalized tips to improve your content</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="mt-0.5 h-6 w-6 rounded-full bg-neon-purple flex items-center justify-center">
                        <Clock className="h-3 w-3 text-neon-green" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Post more consistently on Tuesdays and Thursdays</p>
                        <p className="text-xs text-foreground/70 mt-1">Your audience is 2.3x more active</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="mt-0.5 h-6 w-6 rounded-full bg-neon-purple flex items-center justify-center">
                        <MessageSquare className="h-3 w-3 text-neon-green" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Use more trending hashtags like #GenZLife</p>
                        <p className="text-xs text-foreground/70 mt-1">Increases discoverability by 34%</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="mt-0.5 h-6 w-6 rounded-full bg-neon-purple flex items-center justify-center">
                        <Award className="h-3 w-3 text-neon-green" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          Increase video content - your videos get 2x more engagement
                        </p>
                        <p className="text-xs text-foreground/70 mt-1">Videos perform 118% better than images</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="mt-0.5 h-6 w-6 rounded-full bg-neon-purple flex items-center justify-center">
                        <Users className="h-3 w-3 text-neon-green" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Respond to comments within 2 hours for better engagement</p>
                        <p className="text-xs text-foreground/70 mt-1">Increases follower loyalty by 27%</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bigupz-card">
              <CardHeader>
                <CardTitle>Recent Comments</CardTitle>
                <CardDescription>AI-powered comment response suggestions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-muted overflow-hidden">
                          <img
                            src={`/images/creator-${i}.jpg`}
                            alt={`Commenter ${i}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">User{i}23</p>
                            <p className="text-xs text-foreground/70">2h ago</p>
                          </div>
                          <p className="text-sm mt-1">
                            {i === 1 && "This is amazing! How do you come up with these ideas?"}
                            {i === 2 && "Love your content! Would you ever do a collab?"}
                            {i === 3 && "What camera do you use for these shots?"}
                          </p>
                        </div>
                      </div>
                      <div className="ml-13 pl-13">
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <p className="text-xs font-medium mb-1">AI Response Suggestion:</p>
                          <p className="text-sm">
                            {i === 1 &&
                              "Thank you so much! I get inspiration from everyday life and my amazing followers like you! 💡 What kind of content would you like to see more of?"}
                            {i === 2 &&
                              "Thanks for the love! 💕 I'm definitely open to collabs - DM me with your ideas and we can discuss!"}
                            {i === 3 &&
                              "I'm using a Sony A7III for most of my shots! The lighting makes a huge difference too. Are you into photography?"}
                          </p>
                        </div>
                        <div className="flex justify-end mt-2">
                          <Button variant="outline" size="sm" className="bigupz-button text-xs">
                            Use Response
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card className="bigupz-card">
              <CardHeader>
                <CardTitle>Engagement Over Time</CardTitle>
                <CardDescription>Track your engagement metrics over the past 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <p className="text-foreground/70">Analytics chart will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <Card className="bigupz-card">
              <CardHeader>
                <CardTitle>Top Performing Content</CardTitle>
                <CardDescription>Your most engaging posts from the past month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div className="w-16 h-16 bg-muted rounded-md overflow-hidden">
                        <img src={`/images/post-${i}.jpg`} alt={`Post ${i}`} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-medium">
                          {i === 1 && "Post 1: My morning routine for productivity"}
                          {i === 2 && "Post 2: 10 tips for better content creation"}
                          {i === 3 && "Post 3: Behind the scenes of my latest project"}
                        </p>
                        <p className="text-sm text-foreground/70">
                          Posted on {new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                        </p>
                        <div className="flex space-x-4 text-sm">
                          <span>❤️ {1200 - i * 100}</span>
                          <span>💬 {240 - i * 20}</span>
                          <span>🔄 {60 - i * 5}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs bg-neon-green/10 text-black dark:text-neon-green px-2 py-1 rounded-full mb-2">
                          {90 - i * 5}% Engagement
                        </span>
                        <Button variant="outline" size="sm" className="bigupz-button text-xs">
                          Analyze
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

