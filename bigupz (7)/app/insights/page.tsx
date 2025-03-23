"use client"

import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InsightsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Detailed Insights</h1>

          <Tabs defaultValue="posts" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="posts">Top Posts</TabsTrigger>
              <TabsTrigger value="timing">Best Posting Times</TabsTrigger>
              <TabsTrigger value="growth">Follower Growth</TabsTrigger>
            </TabsList>

            <TabsContent value="posts">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-neon-purple flex items-center justify-center mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-neon-green"
                      >
                        <path d="M21 15V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    </div>
                    Your Top Performing Posts
                  </CardTitle>
                  <CardDescription>Posts with the highest engagement rates from the past 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-start space-x-4 p-4 border rounded-lg">
                        <div className="w-20 h-20 bg-muted rounded-md overflow-hidden">
                          <img
                            src={`/images/post-${(i % 3) + 1}.jpg`}
                            alt={`Post ${i}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Post {i}: Example post caption with some engaging text...</p>
                            <span className="text-xs bg-neon-green/10 text-black dark:text-neon-green px-2 py-1 rounded-full">
                              {90 - i * 5}% Engagement
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Posted on {new Date(Date.now() - i * 3 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                          </p>
                          <div className="flex space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <span>❤️</span>
                              <span>{1200 - i * 100}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span>💬</span>
                              <span>{240 - i * 20}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span>🔄</span>
                              <span>{60 - i * 5}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timing">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-neon-purple flex items-center justify-center mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-neon-green"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    Best Times to Post
                  </CardTitle>
                  <CardDescription>Analysis of when your content receives the most engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Best Days of the Week</h3>
                      <div className="bg-gradient-to-br from-background to-muted/30 p-6 rounded-xl border shadow-sm">
                        <div className="grid grid-cols-7 gap-2 text-center relative">
                          {/* Y-axis labels */}
                          <div className="absolute -left-8 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground">
                            <span>100%</span>
                            <span>75%</span>
                            <span>50%</span>
                            <span>25%</span>
                            <span>0%</span>
                          </div>

                          {/* Horizontal grid lines */}
                          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                            <div className="border-t border-dashed border-muted-foreground/20 h-0 w-full"></div>
                            <div className="border-t border-dashed border-muted-foreground/20 h-0 w-full"></div>
                            <div className="border-t border-dashed border-muted-foreground/20 h-0 w-full"></div>
                            <div className="border-t border-dashed border-muted-foreground/20 h-0 w-full"></div>
                          </div>

                          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                            // Calculate height based on engagement (Tuesday and Thursday are highest)
                            const heights = [70, 100, 60, 90, 65, 40, 30]
                            const height = heights[i]
                            const percentage = (height / 100) * 100

                            return (
                              <div key={day} className="space-y-2 relative">
                                <div className="h-40 bg-muted/10 rounded-md relative flex items-end group">
                                  <div
                                    className={`w-full ${
                                      percentage >= 90
                                        ? "bg-gradient-to-t from-neon-green to-neon-green/80"
                                        : percentage >= 70
                                          ? "bg-gradient-to-t from-neon-purple to-neon-purple/80"
                                          : percentage >= 50
                                            ? "bg-gradient-to-t from-neon-purple/70 to-neon-purple/50"
                                            : "bg-gradient-to-t from-muted-foreground/40 to-muted-foreground/20"
                                    } rounded-md transition-all duration-500 hover:brightness-110 cursor-pointer`}
                                    style={{ height: `${percentage}%` }}
                                  >
                                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-neon-purple text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                      {percentage.toFixed(0)}% engagement
                                    </div>
                                  </div>
                                </div>
                                <div className="text-sm font-medium">{day}</div>
                                <div className="text-xs text-foreground/70">{heights[i] / 10} posts</div>
                              </div>
                            )
                          })}
                        </div>

                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                          {["Tue", "Thu"].map((day, i) => (
                            <div
                              key={day}
                              className="p-4 border rounded-lg bg-card shadow-sm text-center hover:border-neon-purple transition-colors"
                            >
                              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neon-purple mb-2">
                                <span className="text-xs font-bold text-white">{i === 0 ? "1" : "2"}</span>
                              </div>
                              <p className="text-sm font-medium mb-1">{day === "Tue" ? "Tuesday" : "Thursday"}</p>
                              <p className="text-lg font-bold">{day === "Tue" ? "7:30 PM" : "8:00 PM"}</p>
                              <p className="text-xs text-foreground/70 mt-1">
                                {day === "Tue" ? "100%" : "90%"} engagement
                              </p>
                            </div>
                          ))}

                          <div className="p-4 border rounded-lg bg-card shadow-sm col-span-2 flex items-center">
                            <div className="h-12 w-12 rounded-full bg-neon-green flex items-center justify-center mr-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6 text-black"
                              >
                                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium">Pro Tip</p>
                              <p className="text-sm text-foreground/70">
                                Posts on Tuesday and Thursday evenings receive 3.2x more engagement than other times.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Best Hours of the Day</h3>
                      <div className="bg-muted/20 p-6 rounded-lg">
                        <div className="h-40 flex items-end space-x-1">
                          {Array.from({ length: 24 }).map((_, i) => {
                            // Calculate height based on time of day (prime times are morning and evening)
                            let height
                            if (i >= 7 && i <= 9) {
                              // Morning peak
                              height = 70 + Math.random() * 20
                            } else if (i >= 17 && i <= 21) {
                              // Evening peak
                              height = 80 + Math.random() * 20
                            } else if (i >= 0 && i <= 5) {
                              // Late night/early morning
                              height = 10 + Math.random() * 10
                            } else {
                              // Other times
                              height = 30 + Math.random() * 30
                            }

                            return (
                              <div key={i} className="flex-1 flex flex-col items-center">
                                <div
                                  className={`w-full bg-neon-${i % 2 === 0 ? "green" : "purple"} rounded-t-sm transition-all duration-500`}
                                  style={{ height: `${height}%` }}
                                ></div>
                                {i % 3 === 0 && <div className="text-[10px] mt-1">{i}:00</div>}
                              </div>
                            )
                          })}
                        </div>
                        <div className="mt-6 grid grid-cols-3 gap-4">
                          <div className="p-3 bg-card rounded-lg text-center">
                            <div className="text-sm font-medium mb-1">Morning Peak</div>
                            <div className="text-lg font-bold">7:00 - 9:00 AM</div>
                          </div>
                          <div className="p-3 bg-card rounded-lg text-center">
                            <div className="text-sm font-medium mb-1">Evening Peak</div>
                            <div className="text-lg font-bold">5:00 - 9:00 PM</div>
                          </div>
                          <div className="p-3 bg-card rounded-lg text-center">
                            <div className="text-sm font-medium mb-1">Optimal Time</div>
                            <div className="text-lg font-bold">7:30 PM</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="growth">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-neon-purple flex items-center justify-center mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-neon-green"
                      >
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                        <polyline points="17 6 23 6 23 12"></polyline>
                      </svg>
                    </div>
                    Follower Growth
                  </CardTitle>
                  <CardDescription>Track your audience growth over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/20 p-6 rounded-lg mb-8">
                    <div className="h-[400px] relative">
                      <div className="absolute inset-x-0 bottom-0 h-px bg-border"></div>
                      <div className="absolute inset-y-0 left-0 w-px bg-border"></div>

                      {/* Y-axis labels */}
                      <div className="absolute left-2 top-0 text-xs text-muted-foreground">15k</div>
                      <div className="absolute left-2 top-1/4 text-xs text-muted-foreground">12k</div>
                      <div className="absolute left-2 top-1/2 text-xs text-muted-foreground">9k</div>
                      <div className="absolute left-2 top-3/4 text-xs text-muted-foreground">6k</div>

                      {/* X-axis labels */}
                      <div className="absolute bottom-2 left-0 text-xs text-muted-foreground">Jan</div>
                      <div className="absolute bottom-2 left-1/6 text-xs text-muted-foreground">Feb</div>
                      <div className="absolute bottom-2 left-2/6 text-xs text-muted-foreground">Mar</div>
                      <div className="absolute bottom-2 left-3/6 text-xs text-muted-foreground">Apr</div>
                      <div className="absolute bottom-2 left-4/6 text-xs text-muted-foreground">May</div>
                      <div className="absolute bottom-2 left-5/6 text-xs text-muted-foreground">Jun</div>

                      {/* Line chart (simplified representation) */}
                      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                        <path
                          d="M 0,350 L 50,320 L 100,300 L 150,280 L 200,260 L 250,220 L 300,200 L 350,170 L 400,150 L 450,120 L 500,100 L 550,80 L 600,50"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#D0FF00" />
                            <stop offset="100%" stopColor="#8000FF" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Data points */}
                      <div className="absolute left-0 bottom-[50px] h-3 w-3 rounded-full bg-neon-green"></div>
                      <div className="absolute left-1/6 bottom-[80px] h-3 w-3 rounded-full bg-neon-green"></div>
                      <div className="absolute left-2/6 bottom-[100px] h-3 w-3 rounded-full bg-neon-green"></div>
                      <div className="absolute left-3/6 bottom-[120px] h-3 w-3 rounded-full bg-neon-purple"></div>
                      <div className="absolute left-4/6 bottom-[150px] h-3 w-3 rounded-full bg-neon-purple"></div>
                      <div className="absolute left-5/6 bottom-[180px] h-3 w-3 rounded-full bg-neon-purple"></div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 border rounded-lg bg-card">
                      <div className="text-2xl font-bold">+32%</div>
                      <p className="text-sm text-muted-foreground">Growth Rate</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-card">
                      <div className="text-2xl font-bold">5,280</div>
                      <p className="text-sm text-muted-foreground">New Followers</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-card">
                      <div className="text-2xl font-bold">1.2%</div>
                      <p className="text-sm text-muted-foreground">Churn Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

