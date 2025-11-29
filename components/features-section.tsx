import { Brain, Users, Zap, Lock, BarChart3, Sparkles } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Workflows",
    description:
      "Intelligent automation that learns from your team's patterns and suggests optimizations to boost productivity.",
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description:
      "Work together seamlessly with live editing, instant messaging, and synchronized workspaces that keep everyone in sync.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description:
      "Built on cutting-edge infrastructure for instant load times and smooth interactions, no matter your team size.",
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption, SSO integration, and compliance with SOC 2, GDPR, and HIPAA standards.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get deep insights into team productivity, project progress, and resource allocation with customizable dashboards.",
  },
  {
    icon: Sparkles,
    title: "Smart Integrations",
    description:
      "Connect with 100+ tools you already use. From Slack to GitHub, everything works together effortlessly.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Radial gradient background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-blue-950/20 via-purple-950/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
            Everything your team needs to thrive
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 text-balance max-w-xl mx-auto">
            Powerful features that scale with your business, from startups to enterprises.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              {/* Glass card */}
              <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:translate-y-[-4px]">
                {/* Icon container with glow */}
                <div className="mb-6 inline-flex">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl blur-md" />
                    <div className="relative h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10">
                      <feature.icon className="h-7 w-7 text-blue-400" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-semibold text-white">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{feature.description}</p>

                {/* Gradient bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}