"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Upload, BarChart2, Mail, PieChart, Menu, X, MessageSquare, Clock, Wand2 } from "lucide-react"
import { useState, useEffect } from "react"

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check if user is logged in
  useEffect(() => {
    // This would normally check a token in localStorage or a cookie
    // For demo purposes, we'll consider users logged in on any page except /, /login, and /onboarding
    const nonAuthPages = ["/", "/login", "/onboarding"]
    setIsLoggedIn(!nonAuthPages.includes(pathname))
  }, [pathname])

  const routes = [
    {
      href: "/upload",
      label: "Upload",
      icon: <Upload className="h-5 w-5" />,
      active: pathname === "/upload",
      showAlways: false,
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <BarChart2 className="h-5 w-5" />,
      active: pathname === "/dashboard",
      showAlways: false,
    },
    {
      href: "/content-analysis",
      label: "Content Analysis",
      icon: <Wand2 className="h-5 w-5" />,
      active: pathname === "/content-analysis",
      showAlways: false,
    },
    {
      href: "/newsletter",
      label: "Newsletter",
      icon: <Mail className="h-5 w-5" />,
      active: pathname === "/newsletter",
      showAlways: false,
    },
    {
      href: "/insights",
      label: "Insights",
      icon: <PieChart className="h-5 w-5" />,
      active: pathname === "/insights",
      showAlways: false,
    },
    {
      href: "/comments",
      label: "Comments",
      icon: <MessageSquare className="h-5 w-5" />,
      active: pathname === "/comments",
      showAlways: false,
    },
    {
      href: "/best-posting-times",
      label: "Best Times",
      icon: <Clock className="h-5 w-5" />,
      active: pathname === "/best-posting-times",
      showAlways: false,
    },
  ]

  // Filter routes based on login status and hide home icon on landing page
  const visibleRoutes = routes.filter((route) => {
    // Hide home icon when on the home page
    if (route.href === "/" && pathname === "/") {
      return false
    }
    return route.showAlways || isLoggedIn
  })

  return (
    <>
      {/* Desktop Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="BigUpz Logo" className="h-10 w-auto rounded-lg" />
            </Link>

            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {visibleRoutes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80 flex items-center",
                    route.active ? "text-foreground font-bold" : "text-foreground/60",
                  )}
                  title={route.label}
                >
                  {route.icon}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <ModeToggle />
            </div>
            {!isLoggedIn ? (
              <>
                <div className="hidden md:block">
                  <Link href="/login">
                    <Button variant="outline" size="sm" className="bigupz-button">
                      Login
                    </Button>
                  </Link>
                </div>
                <div className="hidden md:block">
                  <Link href="/onboarding">
                    <Button size="sm" className="bigupz-button bg-neon-green text-black hover:bg-neon-green/90">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <div className="hidden md:block">
                <Link href="/pricing">
                  <Button size="sm" className="bigupz-button bg-neon-purple text-white hover:bg-neon-purple/90">
                    Upgrade
                  </Button>
                </Link>
              </div>
            )}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background pt-16">
          <div className="container py-6 space-y-4">
            {visibleRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg",
                  route.active ? "bg-muted font-medium" : "text-foreground",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {route.icon}
                <span>{route.label}</span>
              </Link>
            ))}
            <div className="pt-4 border-t mt-4 space-y-4">
              {!isLoggedIn ? (
                <>
                  <Link href="/login" className="block">
                    <Button variant="outline" className="w-full bigupz-button">
                      Login
                    </Button>
                  </Link>
                  <Link href="/onboarding" className="block">
                    <Button className="w-full bigupz-button bg-neon-green text-black hover:bg-neon-green/90">
                      Sign Up
                    </Button>
                  </Link>
                </>
              ) : (
                <Link href="/pricing" className="block">
                  <Button className="w-full bigupz-button bg-neon-purple text-white hover:bg-neon-purple/90">
                    Upgrade
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden bigupz-nav py-2">
        <div className="container flex justify-between items-center">
          {visibleRoutes.slice(0, 5).map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex flex-col items-center p-1",
                route.active ? "text-foreground font-medium" : "text-foreground/60",
              )}
              title={route.label}
            >
              {route.icon}
              <span className="text-[10px] mt-1">{route.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

