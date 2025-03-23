"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, Users, Download, ArrowRight, Bell, Sun, Moon, Sunrise, Sunset } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BestPostingTimesPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("all")
  const [selectedTimeframe, setSelectedTimeframe] = useState("30days")

  // Mock data for best posting times
  const weekdayData = [
    { day: "Monday", engagement: 70, posts: 12, bestTime: "7:30 PM" },
    { day: "Tuesday", engagement: 100, posts: 15, bestTime: "6:45 PM" },
    { day: "Wednesday", engagement: 60, posts: 10, bestTime: "12:15 PM" },
    { day: "Thursday", engagement: 90, posts: 14, bestTime: "8:00 PM" },
    { day: "Friday", engagement: 65, posts: 11, bestTime: "5:30 PM" },
    { day: "Saturday", engagement: 40, posts: 8, bestTime: "11:00 AM" },
    { day: "Sunday", engagement: 30, posts: 6, bestTime: "3:00 PM" },
  ]

  // Time of day data
  const timeOfDayData = [
    { time: "Early Morning (5AM-8AM)", engagement: 45, icon: <Sunrise className="h-5 w-5" /> },
    { time: "Morning (8AM-11AM)", engagement: 65, icon: <Sun className="h-5 w-5" /> },
    { time: "Midday (11AM-2PM)", engagement: 80, icon: <Sun className="h-5 w-5" /> },
    { time: "Afternoon (2PM-5PM)", engagement: 60, icon: <Sun className="h-5 w-5" /> },
    { time: "Evening (5PM-8PM)", engagement: 95, icon: <Sunset className="h-5 w-5" /> },
    { time: "Night (8PM-11PM)", engagement: 75, icon: <Moon className="h-5 w-5" /> },
    { time: "Late Night (11PM-5AM)", engagement: 25, icon: <Moon className="h-5 w-5" /> },
  ]

  // Audience activity data
  const audienceData = [
    { platform: "Instagram", peakDays: ["Tuesday", "Thursday"], peakTimes: ["6PM-8PM"], audienceSize: "8.2K" },
    { platform: "TikTok", peakDays: ["Monday", "Wednesday", "Friday"], peakTimes: ["7PM-9PM"], audienceSize: "12.5K" },
    { platform: "YouTube", peakDays: ["Saturday", "Sunday"], peakTimes: ["2PM-5PM"], audienceSize: "5.8K" },
    { platform: "Twitter", peakDays: ["Monday", "Thursday"], peakTimes: ["12PM-2PM", "7PM-9PM"], audienceSize: "4.3K" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Best Posting Times</h1>
              <p className="text-foreground/70">Optimize your content schedule for maximum engagement</p>
            </div>
            <div className="flex items-center space-x-2">
              <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Platforms</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                  <SelectItem value="youtube">YouTube</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 Days</SelectItem>
                  <SelectItem value="30days">Last 30 Days</SelectItem>
                  <SelectItem value="90days">Last 90 Days</SelectItem>
                  <SelectItem value="year">Last Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Optimal Posting Day</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Tuesday</div>
                <p className="text-xs text-foreground/70">Based on highest engagement rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Optimal Posting Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7:30 PM</div>
                <p className="text-xs text-foreground/70">When your audience is most active</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Engagement Increase</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+42%</div>
                <p className="text-xs text-foreground/70">When posting at optimal times</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="days" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="days">Days of Week</TabsTrigger>
              <TabsTrigger value="times">Time of Day</TabsTrigger>
              <TabsTrigger value="audience">Audience Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="days">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-neon-purple" />
                    Best Days to Post
                  </CardTitle>
                  <CardDescription>Analysis of engagement by day of the week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <div className="grid grid-cols-7 gap-2 text-center">
                      {weekdayData.map((day) => {
                        const percentage = (day.engagement / 100) * 100

                        return (
                          <div key={day.day} className="space-y-2">
                            <div className="h-32 bg-muted/30 rounded-t-md relative flex items-end">
                              <div
                                className={`w-full ${
                                  day.engagement >= 90
                                    ? "bg-neon-green"
                                    : day.engagement >= 60
                                      ? "bg-neon-purple"
                                      : "bg-muted-foreground/30"
                                } rounded-t-md transition-all duration-500`}
                                style={{ height: `${percentage}%` }}
                              >
                                <div className="absolute bottom-2 left-0 right-0 text-xs font-medium text-center">
                                  {percentage.toFixed(0)}%
                                </div>
                              </div>
                            </div>
                            <div className="text-xs font-medium">{day.day.substring(0, 3)}</div>
                            <div className="text-[10px] text-foreground/70">{day.posts} posts</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {weekdayData
                      .filter((day) => day.engagement >= 70)
                      .map((day) => (
                        <div key={day.day} className="p-4 border rounded-lg text-center">
                          <p className="text-sm font-medium mb-1">{day.day}</p>
                          <p className="text-lg font-bold">{day.bestTime}</p>
                          <p className="text-xs text-foreground/70 mt-1">{day.engagement}% engagement</p>
                        </div>
                      ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-6">
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Export Day Analysis
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="times">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-neon-purple" />
                    Best Times to Post
                  </CardTitle>
                  <CardDescription>Analysis of engagement by time of day</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Time of Day Analysis</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {timeOfDayData.map((timeSlot) => (
                        <div
                          key={timeSlot.time}
                          className={`p-4 border rounded-lg flex items-center space-x-3 ${
                            timeSlot.engagement > 80 ? "border-neon-green" : ""
                          }`}
                        >
                          <div
                            className={`h-10 w-10 rounded-full ${
                              timeSlot.engagement > 80
                                ? "bg-neon-green text-black"
                                : timeSlot.engagement > 60
                                  ? "bg-neon-purple text-white"
                                  : "bg-muted"
                            } flex items-center justify-center`}
                          >
                            {timeSlot.icon}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{timeSlot.time}</p>
                            <div className="flex items-center justify-between">
                              <p className="text-xs text-foreground/70">Engagement rate</p>
                              <p className="text-sm font-bold">{timeSlot.engagement}%</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-6">
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Export Time Analysis
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="audience">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-neon-purple" />
                    Audience Activity
                  </CardTitle>
                  <CardDescription>When your audience is most active by platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {audienceData.map((platform) => (
                      <div key={platform.platform} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                              {platform.platform === "Instagram" && (
                                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#E1306C]">
                                  <path
                                    fill="currentColor"
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                  />
                                </svg>
                              )}
                              {platform.platform === "TikTok" && (
                                <svg viewBox="0 0 24 24" className="h-6 w-6 text-black dark:text-white">
                                  <path
                                    fill="currentColor"
                                    d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"
                                  />
                                </svg>
                              )}
                              {platform.platform === "YouTube" && (
                                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#FF0000]">
                                  <path
                                    fill="currentColor"
                                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                  />
                                </svg>
                              )}
                              {platform.platform === "Twitter" && (
                                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#1DA1F2]">
                                  <path
                                    fill="currentColor"
                                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v
.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                  />
                                </svg>
                              )}
                            </div>
                            <div>
                              <p className="font-medium">{platform.platform}</p>
                              <p className="text-xs text-foreground/70">{platform.audienceSize} followers</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Set Schedule
                          </Button>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <p className="text-sm font-medium mb-2">Peak Days</p>
                            <div className="flex flex-wrap gap-2">
                              {platform.peakDays.map((day) => (
                                <span key={day} className="text-xs bg-muted px-2 py-1 rounded-full">
                                  {day}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium mb-2">Peak Times</p>
                            <div className="flex flex-wrap gap-2">
                              {platform.peakTimes.map((time) => (
                                <span key={time} className="text-xs bg-muted px-2 py-1 rounded-full">
                                  {time}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-6">
                  <Button variant="outline" className="w-full">
                    <Bell className="mr-2 h-4 w-4" />
                    Set Posting Reminders
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Posting Schedule Recommendations</CardTitle>
                <CardDescription>AI-generated optimal posting schedule based on your audience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 border rounded-lg bg-muted/30">
                    <h3 className="font-medium mb-4">Weekly Schedule</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="p-3 border rounded-lg bg-card">
                        <p className="text-sm font-medium mb-1">Instagram</p>
                        <p className="text-xs text-foreground/70">Tuesday & Thursday @ 7:30 PM</p>
                      </div>
                      <div className="p-3 border rounded-lg bg-card">
                        <p className="text-sm font-medium mb-1">TikTok</p>
                        <p className="text-xs text-foreground/70">Monday, Wednesday & Friday @ 8:00 PM</p>
                      </div>
                      <div className="p-3 border rounded-lg bg-card">
                        <p className="text-sm font-medium mb-1">YouTube</p>
                        <p className="text-xs text-foreground/70">Saturday @ 3:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-neon-purple text-white hover:bg-neon-purple/90">
                      Apply to Content Calendar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

