import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, MessageSquare, TrendingUp, Star, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pb-16 md:pb-0 mobile-pb">
        {/* Hero Section */}
        <section className="relative w-full py-8 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/hero.png" alt="Creator with smartphone" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4 md:space-y-6 py-4 md:py-6 lg:py-8">
                <div className="space-y-2">
                  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter drop-shadow-md">
                    <span className="block text-4xl md:text-5xl lg:text-6xl">Go Viral, A Smart Social Agent</span>
                  </h1>
                  <p className="max-w-[600px] text-white/90 text-base md:text-xl font-medium drop-shadow-sm">
                    BigUpz helps creators and influencers automate content, scale reach, and monetize smarter with AI.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 min-[400px]:flex-row">
                  <Link href="/onboarding">
                    <Button className="bigupz-button bg-neon-green text-black hover:bg-neon-green/90 w-full sm:w-auto px-6 py-5 text-base md:text-lg font-bold">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button
                      variant="outline"
                      className="bigupz-button w-full sm:w-auto px-6 py-5 text-base md:text-lg font-bold text-neon-purple border-white hover:bg-white/20"
                    >
                      Plans
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center mt-6 md:mt-0">
                <div className="glass-effect rounded-3xl p-4 md:p-8 w-full max-w-md backdrop-blur-lg border border-white/30 bg-black/80 text-black dark:text-white relative overflow-hidden group">
                  {/* Animated background elements */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-purple/20 rounded-full blur-3xl animate-pulse"></div>
                  <div
                    className="absolute -bottom-24 -left-24 w-48 h-48 bg-neon-green/20 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-green to-neon-purple"></div>
                  <div className="absolute bottom-0 right-0 w-1/2 h-1 bg-gradient-to-r from-neon-purple to-neon-green"></div>

                  <div className="space-y-3 md:space-y-4">
                    <div className="flex justify-between items-center p-3 md:p-4 rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-neon-purple/20 relative overflow-hidden">
                      <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-neon-purple/10 rounded-full blur-xl"></div>
                      <div className="flex items-center space-x-2 md:space-x-3 relative z-10">
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-neon-purple flex items-center justify-center">
                          <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-neon-green" />
                        </div>
                        <div>
                          <p className="font-medium text-sm md:text-base text-black dark:text-white">Viral Score</p>
                          <p className="text-xs md:text-sm text-black dark:text-white/90">Predict content success</p>
                        </div>
                      </div>
                      <div className="relative z-10">
                        <div className="text-xl md:text-2xl font-bold text-black dark:text-white flex items-center">
                          <span className="mr-1">+</span>
                          <span className="inline-block w-[3ch] tabular-nums">78</span>
                          <span>%</span>
                        </div>
                        <div className="h-1 w-full bg-black/10 dark:bg-white/10 rounded-full mt-1">
                          <div
                            className="h-1 bg-gradient-to-r from-neon-green to-neon-purple rounded-full"
                            style={{ width: "78%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 md:p-4 rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors duration-300 group-hover:translate-x-1 group-hover:shadow-lg group-hover:shadow-neon-purple/20 relative overflow-hidden">
                      <div className="absolute -left-4 -top-4 w-16 h-16 bg-neon-green/10 rounded-full blur-xl"></div>
                      <div className="flex items-center space-x-2 md:space-x-3 relative z-10">
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-neon-purple flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 md:h-5 md:w-5 text-neon-green" />
                        </div>
                        <div>
                          <p className="font-medium text-sm md:text-base text-black dark:text-white">AI Comments</p>
                          <p className="text-xs md:text-sm text-black dark:text-white/90">Auto-respond to fans</p>
                        </div>
                      </div>
                      <div className="relative z-10 flex items-center">
                        <span className="text-xl md:text-2xl font-bold text-black dark:text-white tabular-nums">24</span>
                        <span className="ml-1 text-xs text-black/60 dark:text-white/60">today</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 md:p-4 rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-lg group-hover:shadow-neon-green/20 relative overflow-hidden">
                      <div className="absolute -right-4 -top-4 w-16 h-16 bg-neon-purple/10 rounded-full blur-xl"></div>
                      <div className="flex items-center space-x-2 md:space-x-3 relative z-10">
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-neon-purple flex items-center justify-center">
                          <BarChart2 className="h-4 w-4 md:h-5 md:w-5 text-neon-green" />
                        </div>
                        <div>
                          <p className="font-medium text-sm md:text-base text-black dark:text-white">Growth Rate</p>
                          <p className="text-xs md:text-sm text-black dark:text-white/90">Monthly increase</p>
                        </div>
                      </div>
                      <div className="relative z-10">
                        <div className="text-xl md:text-2xl font-bold text-black dark:text-white flex items-center">
                          <span className="mr-1">+</span>
                          <span className="inline-block w-[2ch] tabular-nums">32</span>
                          <span>%</span>
                        </div>
                        <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1"
                          >
                            <path
                              d="M7 17L17 7M17 7H7M17 7V17"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>vs last month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-10 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold">Features That Make You Go Viral</h2>
                <p className="max-w-[900px] text-foreground/70 text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to create, analyze, and optimize your social media content.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:gap-8 py-8 md:py-12 md:grid-cols-3">
              <div className="bigupz-card p-6 md:p-8 flex flex-col items-center space-y-3 md:space-y-4">
                <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-neon-purple flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 md:h-8 md:w-8 text-neon-green" />
                </div>
                <h3 className="text-xl font-bold text-center">AI Viral Predictor</h3>
                <p className="text-foreground/70 text-center text-sm md:text-base">
                  Our advanced algorithm analyzes your content against thousands of viral posts to predict success with
                  92% accuracy. Get instant feedback on captions, hashtags, and posting times.
                </p>
                <Link href="/viral-predictor" className="mt-2">
                  <Button variant="link" className="text-neon-purple">
                    Try Predictor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bigupz-card p-6 md:p-8 flex flex-col items-center space-y-3 md:space-y-4">
                <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-neon-purple flex items-center justify-center">
                  <MessageSquare className="h-7 w-7 md:h-8 md:w-8 text-neon-green" />
                </div>
                <h3 className="text-xl font-bold text-center">Smart Comment Responder</h3>
                <p className="text-foreground/70 text-center text-sm md:text-base">
                  Save hours with AI that responds to comments in your unique voice. Choose from multiple tones,
                  schedule responses, and maintain your personal connection with followers.
                </p>
                <Link href="/dashboard" className="mt-2">
                  <Button variant="link" className="text-neon-purple">
                    Explore Responder
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bigupz-card p-6 md:p-8 flex flex-col items-center space-y-3 md:space-y-4">
                <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-neon-purple flex items-center justify-center">
                  <BarChart2 className="h-7 w-7 md:h-8 md:w-8 text-neon-green" />
                </div>
                <h3 className="text-xl font-bold text-center">Advanced Analytics</h3>
                <p className="text-foreground/70 text-center text-sm md:text-base">
                  Gain deep insights with our comprehensive analytics suite. Track engagement patterns, identify
                  top-performing content, and discover optimal posting times with beautiful visualizations.
                </p>
                <Link href="/insights" className="mt-2">
                  <Button variant="link" className="text-neon-purple">
                    View Analytics
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-10 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold">How BigUpz Works</h2>
                <p className="max-w-[900px] text-foreground/70 text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Three simple steps to transform your social media presence
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:gap-12 md:grid-cols-3">
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-4 md:mb-6 w-full max-w-[200px] md:max-w-[250px] h-[160px] md:h-[200px] rounded-xl overflow-hidden bg-black/5">
                  <img
                    src="/images/upload-content.png"
                    alt="Upload Your Content"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-neon-purple text-neon-green mb-3 md:mb-4 z-10">
                  <span className="text-lg md:text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Upload Your Content</h3>
                <p className="text-foreground/70 text-sm md:text-base">
                  Connect your social accounts or upload your content data. Our system analyzes your posting history,
                  engagement patterns, and audience behavior.
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div className="mb-4 md:mb-6 w-full max-w-[200px] md:max-w-[250px] h-[160px] md:h-[200px] rounded-xl overflow-hidden bg-black/5">
                  <img
                    src="/images/ai-insights.png"
                    alt="Get AI-Powered Insights"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-neon-purple text-neon-green mb-3 md:mb-4 z-10">
                  <span className="text-lg md:text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Get AI-Powered Insights</h3>
                <p className="text-foreground/70 text-sm md:text-base">
                  Our AI analyzes your data against millions of viral posts to identify patterns and opportunities.
                  Receive personalized recommendations for content optimization.
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div className="mb-4 md:mb-6 w-full max-w-[200px] md:max-w-[250px] h-[160px] md:h-[200px] rounded-xl overflow-hidden bg-black/5">
                  <img
                    src="/images/grow-audience.png"
                    alt="Grow Your Audience"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-neon-purple text-neon-green mb-3 md:mb-4 z-10">
                  <span className="text-lg md:text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Grow Your Audience</h3>
                <p className="text-foreground/70 text-sm md:text-base">
                  Implement our suggestions, automate your engagement, and watch your metrics soar. Users report an
                  average 43% increase in engagement within 30 days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="w-full py-10 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold">Creator Success Stories</h2>
                <p className="max-w-[900px] text-foreground/70 text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how creators are transforming their social media presence with BigUpz
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-3">
              <div className="bigupz-card p-5 md:p-6">
                <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                  <img
                    src="/images/creator-1.jpg"
                    alt="Creator 1"
                    className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover border-2 border-neon-green"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Alex Morgan</h3>
                    <p className="text-sm text-foreground/70">Travel Vlogger</p>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" fill="currentColor" />
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" fill="currentColor" />
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" fill="currentColor" />
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" fill="currentColor" />
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" fill="currentColor" />
                  </div>
                  <p className="text-foreground/70 text-sm md:text-base">
                    "BigUpz transformed my content strategy. The viral predictor is incredibly accurate - my engagement
                    increased by 45% in just two months. The AI suggestions feel like having a personal social media
                    manager."
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="font-medium">Results:</span>
                    <span className="font-medium">+45% Engagement</span>
                    <span>•</span>
                    <span className="font-medium">+12K Followers</span>
                  </div>
                </div>
              </div>
              <div className="bigupz-card p-5 md:p-6">
                <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                  <img
                    src="/images/creator-2.jpg"
                    alt="Creator 2"
                    className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover border-2 border-neon-purple"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Jamie Chen</h3>
                    <p className="text-sm text-foreground/70">Fitness Influencer</p>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" fill="currentColor" />
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" fill="currentColor" />
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" fill="currentColor" />
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" fill="currentColor" />
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" fill="currentColor" />
                  </div>
                  <p className="text-foreground/70 text-sm md:text-base">
                    "The AI comment responder is a game-changer. It saves me hours every day while maintaining my
                    authentic voice. My audience engagement has never been higher, and I've secured three brand deals
                    since using BigUpz."
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="font-medium">Results:</span>
                    <span className="font-medium">+68% Comments</span>
                    <span>•</span>
                    <span className="font-medium">3 Brand Deals</span>
                  </div>
                </div>
              </div>
              <div className="bigupz-card p-5 md:p-6">
                <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                  <img
                    src="/images/creator-3.jpg"
                    alt="Creator 3"
                    className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover border-2 border-neon-green"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Taylor Reed</h3>
                    <p className="text-sm text-foreground/70">Gaming Creator</p>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" fill="currentColor" />
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" fill="currentColor" />
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" fill="currentColor" />
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" fill="currentColor" />
                  </div>
                  <p className="text-foreground/70 text-sm md:text-base">
                    "The insights page helped me understand when my audience is most active. My views have doubled since
                    using BigUpz, and I've been able to optimize my streaming schedule for maximum engagement."
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="font-medium">Results:</span>
                    <span className="font-medium">+103% Views</span>
                    <span>•</span>
                    <span className="font-medium">+5 Sponsorships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-10 md:py-24 lg:py-32 bg-gradient-to-b from-muted/10 to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold">Our Impact in Numbers</h2>
                <p className="max-w-[900px] text-foreground/70 text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Real results from creators who have transformed their social media presence with BigUpz
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-neon-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/10">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-neon-purple/10 flex items-center justify-center mb-3 md:mb-4">
                  <BarChart2 className="h-6 w-6 md:h-8 md:w-8 text-neon-purple" />
                </div>
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">10M+</div>
                <p className="text-foreground/70 font-medium mb-1 text-sm md:text-base">Posts Analyzed</p>
                <p className="text-xs md:text-sm text-foreground/60">
                  Our AI has processed millions of posts
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-neon-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/10">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-neon-green/10 flex items-center justify-center mb-3 md:mb-4">
                  <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-neon-green" />
                </div>
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">92%</div>
                <p className="text-foreground/70 font-medium mb-1 text-sm md:text-base">Prediction Accuracy</p>
                <p className="text-xs md:text-sm text-foreground/60">
                  Our viral predictor is highly accurate
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-neon-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/10">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-neon-purple/10 flex items-center justify-center mb-3 md:mb-4">
                  <ArrowRight className="h-6 w-6 md:h-8 md:w-8 text-neon-purple" />
                </div>
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">43%</div>
                <p className="text-foreground/70 font-medium mb-1 text-sm md:text-base">Avg. Engagement Increase</p>
                <p className="text-xs md:text-sm text-foreground/60">Creators see dramatic growth within 30 days</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-neon-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/10">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-neon-green/10 flex items-center justify-center mb-3 md:mb-4">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-neon-green" />
                </div>
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">25K+</div>
                <p className="text-foreground/70 font-medium mb-1 text-sm md:text-base">Happy Creators</p>
                <p className="text-xs md:text-sm text-foreground/60">From nano-influencers to major brands</p>
              </div>
            </div>

            <div className="mt-10 md:mt-16 flex justify-center">
              <div className="p-4 md:p-6 rounded-xl bg-neon-purple/5 border border-neon-purple/20 max-w-3xl">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-neon-purple/20 flex items-center justify-center flex-shrink-0">
                    <Star className="h-8 w-8 md:h-10 md:w-10 text-neon-purple" fill="currentColor" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-base md:text-lg font-medium mb-2">
                      "BigUpz has completely transformed how I approach content creation. The data-driven insights have
                      helped me grow my audience by over 200% in just 6 months."
                    </p>
                    <p className="text-xs md:text-sm text-foreground/70">— Jamie Chen, Fitness Creator with 1.2M followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-10 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold">Ready to Level Up Your Social Media?</h2>
                <p className="max-w-[900px] text-foreground/70 text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Join thousands of creators who are already using BigUpz to grow their audience.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 min-[400px]:flex-row mt-4">
        <Link href="/onboarding">
          <Button
            size="lg"
            className="bigupz-button bg-neon-green text-black hover:bg-neon-green/90 w-full sm:w-auto px-6 py-5 text-base md:text-lg"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>

<footer className="w-full border-t py-6 md:py-0">
  <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
    <div className="flex items-center space-x-2">
      <img src="/images/logo.png" alt="BigUpz Logo" className="h-8 w-auto rounded-lg" />
      <p className="text-center text-sm leading-loose text-foreground/70 md:text-left">
        © 2023 BigUpz. All rights reserved.
      </p>
    </div>
    <div className="flex items-center gap-4">
      <Link href="/terms" className="text-sm text-foreground/70 underline-offset-4 hover:underline">
        Terms
      </Link>
      <Link href="/privacy" className="text-sm text-foreground/70 underline-offset-4 hover:underline">
        Privacy
      </Link>
      <Link href="/help" className="text-sm text-foreground/70 underline-offset-4 hover:underline">
        Help
      </Link>
    </div>
  </div>
</footer>
    </div>
  );
}

