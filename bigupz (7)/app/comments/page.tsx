"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Clock, Check, Copy, Filter } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CommentsPage() {
  const [selectedComment, setSelectedComment] = useState<number | null>(null)
  const [responseType, setResponseType] = useState("friendly")
  const [customResponse, setCustomResponse] = useState("")

  const comments = [
    {
      id: 1,
      user: {
        name: "Alex Morgan",
        avatar: "/images/creator-1.jpg",
        username: "alex_travels",
      },
      comment: "This is amazing! How do you come up with these ideas?",
      time: "2h ago",
      platform: "Instagram",
      post: "My morning routine for productivity...",
      suggestions: [
        "Thank you so much! I get inspiration from everyday life and my amazing followers like you! 💡 What kind of content would you like to see more of?",
        "Thanks Alex! I keep a journal of ideas and try to notice interesting things in daily life. Your support means a lot! 🙏",
        "I appreciate that! It's a mix of research and personal experience. I'd love to hear what topics interest you most!",
      ],
    },
    {
      id: 2,
      user: {
        name: "Jamie Chen",
        avatar: "/images/creator-2.jpg",
        username: "jamie_fitness",
      },
      comment: "Love your content! Would you ever do a collab?",
      time: "3h ago",
      platform: "TikTok",
      post: "10 tips for better content creation",
      suggestions: [
        "Thanks for the love! 💕 I'm definitely open to collabs - DM me with your ideas and we can discuss!",
        "Thank you Jamie! I'm always looking for collaboration opportunities. Send me a DM and let's make something awesome together!",
        "I appreciate that! Collabs are definitely on my radar. What kind of content do you create? Let's connect in DMs!",
      ],
    },
    {
      id: 3,
      user: {
        name: "Taylor Reed",
        avatar: "/images/creator-3.jpg",
        username: "taylor_games",
      },
      comment: "What camera do you use for these shots? The quality is insane!",
      time: "5h ago",
      platform: "YouTube",
      post: "Behind the scenes of my latest project",
      suggestions: [
        "I'm using a Sony A7III for most of my shots! The lighting makes a huge difference too. Are you into photography?",
        "Thank you! I use a Sony A7III with a 24-70mm lens. Lighting and editing are just as important as the camera though!",
        "Appreciate the compliment! It's a Sony A7III. I also spend a lot of time on color grading in post. Happy to share more details if you're interested!",
      ],
    },
    {
      id: 4,
      user: {
        name: "Jordan Smith",
        avatar: "/images/creator-4.jpg",
        username: "jordan_creates",
      },
      comment: "Your editing style is so unique! Any tutorials coming soon?",
      time: "1d ago",
      platform: "Instagram",
      post: "Creative editing techniques showcase",
      suggestions: [
        "Thank you! I'm actually planning a tutorial series next month! I'll cover my entire workflow from start to finish. Is there anything specific you'd like me to cover?",
        "Thanks Jordan! Yes, I have a 3-part tutorial series coming up next week. Make sure you're subscribed so you don't miss it!",
        "I appreciate that! I just added a tutorial to my content calendar for next month. Would love to know what aspects of my editing you're most curious about!",
      ],
    },
    {
      id: 5,
      user: {
        name: "Riley Johnson",
        avatar: "/images/creator-1.jpg",
        username: "riley_music",
      },
      comment: "The music choice in this video is perfect! What's the track called?",
      time: "2d ago",
      platform: "YouTube",
      post: "Day in the life vlog",
      suggestions: [
        "Thank you! The track is 'Sunrise' by Ambient Collective. I've linked it in the description with a discount code for their music library!",
        "Glad you liked it! It's 'Sunrise' by Ambient Collective - I use their music a lot for my vlogs. Check the description for links!",
        "Thanks Riley! The song is 'Sunrise' by Ambient Collective. I have all my music sources linked in the description below!",
      ],
    },
  ]

  const handleSelectComment = (id: number) => {
    setSelectedComment(id)
    setCustomResponse("")
  }

  const handleUseResponse = (response: string) => {
    setCustomResponse(response)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">AI Comment Responder</h1>
              <p className="text-foreground/70">Manage and respond to comments across all your platforms</p>
            </div>
            <div className="flex items-center space-x-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Platforms</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                  <SelectItem value="youtube">YouTube</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-neon-purple" />
                    Recent Comments
                  </CardTitle>
                  <CardDescription>Comments from across your platforms</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {comments.map((comment) => (
                      <div
                        key={comment.id}
                        className={`p-4 cursor-pointer transition-colors hover:bg-muted/50 ${selectedComment === comment.id ? "bg-muted" : ""}`}
                        onClick={() => handleSelectComment(comment.id)}
                      >
                        <div className="flex items-start space-x-3 mb-2">
                          <div className="h-10 w-10 rounded-full bg-muted overflow-hidden flex-shrink-0">
                            <img
                              src={comment.user.avatar || "/placeholder.svg"}
                              alt={comment.user.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="font-medium truncate">{comment.user.username}</p>
                              <div className="flex items-center space-x-1 text-xs text-foreground/60">
                                <Clock className="h-3 w-3" />
                                <span>{comment.time}</span>
                              </div>
                            </div>
                            <p className="text-sm mt-1 line-clamp-2">{comment.comment}</p>
                            <div className="flex items-center mt-1 text-xs text-foreground/60">
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-muted">
                                {comment.platform}
                              </span>
                              <span className="ml-2 truncate">on: {comment.post}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t p-4">
                  <div className="w-full flex justify-between items-center">
                    <Button variant="outline" size="sm">
                      Previous
                    </Button>
                    <span className="text-sm text-foreground/70">Showing 5 of 24</span>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>

            <div className="md:col-span-2">
              {selectedComment ? (
                <Card>
                  <CardHeader>
                    <CardTitle>AI Response Suggestions</CardTitle>
                    <CardDescription>Choose a suggested response or customize your own</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="p-4 border rounded-lg bg-muted/30">
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="h-10 w-10 rounded-full bg-muted overflow-hidden">
                          <img
                            src={comments.find((c) => c.id === selectedComment)?.user.avatar || "/placeholder.svg"}
                            alt="Commenter"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">
                              {comments.find((c) => c.id === selectedComment)?.user.username}
                            </p>
                            <p className="text-xs text-foreground/70">
                              {comments.find((c) => c.id === selectedComment)?.time}
                            </p>
                          </div>
                          <p className="text-sm mt-1">{comments.find((c) => c.id === selectedComment)?.comment}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">Response Tone</h3>
                        <Select value={responseType} onValueChange={setResponseType}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select tone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="friendly">Friendly</SelectItem>
                            <SelectItem value="professional">Professional</SelectItem>
                            <SelectItem value="casual">Casual</SelectItem>
                            <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">AI Suggestions</h3>
                      {comments
                        .find((c) => c.id === selectedComment)
                        ?.suggestions.map((suggestion, index) => (
                          <div key={index} className="p-4 border rounded-lg hover:border-neon-purple transition-colors">
                            <p className="text-sm mb-3">{suggestion}</p>
                            <div className="flex justify-end">
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-xs"
                                onClick={() => handleUseResponse(suggestion)}
                              >
                                Use Response
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Your Response</h3>
                      <Textarea
                        placeholder="Write your response or use one of the suggestions above..."
                        className="min-h-[100px]"
                        value={customResponse}
                        onChange={(e) => setCustomResponse(e.target.value)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-6">
                    <Button variant="outline">
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                    <Button className="bg-neon-purple text-white hover:bg-neon-purple/90">
                      <Check className="mr-2 h-4 w-4" />
                      Post Response
                    </Button>
                  </CardFooter>
                </Card>
              ) : (
                <div className="h-full flex items-center justify-center p-8 border-2 border-dashed rounded-lg border-muted-foreground/25">
                  <div className="text-center">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Select a comment</h3>
                    <p className="text-sm text-foreground/70 max-w-md">
                      Choose a comment from the list to see AI-generated response suggestions
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

