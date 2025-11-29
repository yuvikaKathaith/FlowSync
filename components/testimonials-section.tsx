"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechFlow Inc",
    image: "/professional-woman-diverse.png",
    content:
      "FlowSync transformed how our distributed team collaborates. We've seen a 40% increase in productivity and our developers actually enjoy using it.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Product Manager",
    company: "InnovateLabs",
    image: "/professional-man.jpg",
    content:
      "The AI-powered workflows are game-changing. What used to take hours of coordination now happens automatically. Best investment we've made.",
    rating: 4,
  },
  {
    name: "Emily Watson",
    role: "CEO",
    company: "StartupHub",
    image: "/confident-business-woman.png",
    content:
      "As a fast-growing startup, we needed tools that could scale with us. FlowSync delivered beyond expectations. The team adopted it instantly.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "CTO",
    company: "CloudScale Systems",
    image: "/asian-professional-man.png",
    content:
      "The integration capabilities are outstanding. We connected all our tools in under a day. Our team's efficiency has doubled since adopting FlowSync.",
    rating: 5,
  },
  {
    name: "Jennifer Martinez",
    role: "Head of Operations",
    company: "Global Dynamics",
    image: "/professional-woman-glasses.png",
    content:
      "Security and compliance were our top concerns. FlowSync exceeded all our requirements while making our workflows incredibly smooth.",
    rating: 4,
  },
  {
    name: "Ahmed Hassan",
    role: "Director of Technology",
    company: "NextGen Solutions",
    image: "/middle-eastern-professional.png",
    content:
      "We've tried many collaboration tools, but FlowSync is the only one our entire team loves. The ROI was clear within the first month.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance mb-4">
            Trusted by innovative teams worldwide
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Join thousands of companies that have transformed their workflow with FlowSync.
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card border-border flex-shrink-0 w-[400px]">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="mb-6 text-foreground leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Social proof stats */}
        <div className="mt-16 grid gap-8 sm:grid-cols-3 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Active Teams</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Customer Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime SLA</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
