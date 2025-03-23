"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X, BarChart2, TrendingUp, Crown } from "lucide-react"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Free",
      description: "For creators just getting started",
      price: {
        monthly: 0,
        yearly: 0,
      },
      features: [
        { name: "Basic analytics", included: true },
        { name: "Limited viral predictions", included: true },
        { name: "5 AI comment responses per day", included: true },
        { name: "Single platform connection", included: true },
        { name: "Community support", included: true },
        { name: "Advanced analytics", included: false },
        { name: "Unlimited viral predictions", included: false },
        { name: "Unlimited AI responses", included: false },
        { name: "Multi-platform management", included: false },
        { name: "Priority support", included: false },
      ],
      cta: "Get Started",
      popular: false,
      icon: <BarChart2 className="h-5 w-5" />,
    },
    {
      name: "Premium",
      description: "For growing creators and influencers",
      price: {
        monthly: 19,
        yearly: 190,
      },
      features: [
        { name: "Basic analytics", included: true },
        { name: "Unlimited viral predictions", included: true },
        { name: "50 AI comment responses per day", included: true },
        { name: "Multi-platform connections (3)", included: true },
        { name: "Email support", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Content calendar", included: true },
        { name: "Posting time optimizer", included: true },
        { name: "Custom AI voice training", included: false },
        { name: "Priority support", included: false },
      ],
      cta: "Start Free Trial",
      popular: true,
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      name: "Pro",
      description: "For professional creators and teams",
      price: {
        monthly: 49,
        yearly: 490,
      },
      features: [
        { name: "Basic analytics", included: true },
        { name: "Unlimited viral predictions", included: true },
        { name: "Unlimited AI comment responses", included: true },
        { name: "Unlimited platform connections", included: true },
        { name: "Priority support", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Content calendar", included: true },
        { name: "Posting time optimizer", included: true },
        { name: "Custom AI voice training", included: true },
        { name: "Team collaboration", included: true },
      ],
      cta: "Start Free Trial",
      popular: false,
      icon: <Crown className="h-5 w-5" />,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Choose Your Plan</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Select the perfect plan to accelerate your growth as a creator. All plans include a 30-day free trial.
            </p>

            <div className="flex items-center justify-center mt-8">
              <div className="flex items-center space-x-2 bg-muted/30 p-1 rounded-full">
                <Button
                  variant={billingCycle === "monthly" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setBillingCycle("monthly")}
                  className={billingCycle === "monthly" ? "bg-neon-green text-black" : ""}
                >
                  Monthly
                </Button>
                <Button
                  variant={billingCycle === "yearly" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setBillingCycle("yearly")}
                  className={billingCycle === "yearly" ? "bg-neon-green text-black" : ""}
                >
                  Yearly (Save 20%)
                </Button>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${plan.popular ? "border-neon-purple shadow-lg shadow-neon-purple/10" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <div className="bg-neon-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`h-8 w-8 rounded-full ${
                          plan.name === "Free"
                            ? "bg-muted"
                            : plan.name === "Premium"
                              ? "bg-neon-purple text-white"
                              : "bg-neon-green text-black"
                        } flex items-center justify-center`}
                      >
                        {plan.icon}
                      </div>
                      <CardTitle>{plan.name}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">${plan.price[billingCycle]}</span>
                      {plan.price[billingCycle] > 0 && (
                        <span className="text-foreground/70 ml-1">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
                      )}
                    </div>
                    {plan.price[billingCycle] > 0 && (
                      <p className="text-xs text-foreground/70 mt-1">Includes 30-day free trial</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    {plan.features.map((feature) => (
                      <div key={feature.name} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        ) : (
                          <X className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-neon-purple text-white hover:bg-neon-purple/90"
                        : plan.name === "Free"
                          ? "bg-muted-foreground/20 text-foreground hover:bg-muted-foreground/30"
                          : "bg-neon-green text-black hover:bg-neon-green/90"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Compare Features</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4">Feature</th>
                    <th className="text-center py-4 px-4">Free</th>
                    <th className="text-center py-4 px-4">Premium</th>
                    <th className="text-center py-4 px-4">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Viral Predictions</td>
                    <td className="text-center py-4 px-4">5 per day</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">AI Comment Responses</td>
                    <td className="text-center py-4 px-4">5 per day</td>
                    <td className="text-center py-4 px-4">50 per day</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Platform Connections</td>
                    <td className="text-center py-4 px-4">1</td>
                    <td className="text-center py-4 px-4">3</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Analytics</td>
                    <td className="text-center py-4 px-4">Basic</td>
                    <td className="text-center py-4 px-4">Advanced</td>
                    <td className="text-center py-4 px-4">Advanced</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Posting Time Optimizer</td>
                    <td className="text-center py-4 px-4">
                      <X className="h-4 w-4 text-muted-foreground mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Custom AI Voice Training</td>
                    <td className="text-center py-4 px-4">
                      <X className="h-4 w-4 text-muted-foreground mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <X className="h-4 w-4 text-muted-foreground mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Team Collaboration</td>
                    <td className="text-center py-4 px-4">
                      <X className="h-4 w-4 text-muted-foreground mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <X className="h-4 w-4 text-muted-foreground mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Support</td>
                    <td className="text-center py-4 px-4">Community</td>
                    <td className="text-center py-4 px-4">Email</td>
                    <td className="text-center py-4 px-4">Priority</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto mt-8 grid gap-6 md:grid-cols-2">
              <div className="text-left">
                <h3 className="font-bold mb-2">Can I cancel my subscription?</h3>
                <p className="text-foreground/70 text-sm">
                  Yes, you can cancel your subscription at any time. If you cancel during your free trial, you won't be
                  charged.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-2">How does the 30-day free trial work?</h3>
                <p className="text-foreground/70 text-sm">
                  You'll get full access to your chosen plan for 30 days without being charged. We'll send a reminder
                  before your trial ends.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-2">Can I switch plans?</h3>
                <p className="text-foreground/70 text-sm">
                  Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while
                  downgrades apply at the end of your billing cycle.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-2">What payment methods do you accept?</h3>
                <p className="text-foreground/70 text-sm">We accept all major credit cards, PayPal, and Apple Pay.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-muted/30 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to grow your audience?</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
              Join thousands of creators who are already using BigUpz to scale their social media presence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-neon-purple text-white hover:bg-neon-purple/90">
                Start Your Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

