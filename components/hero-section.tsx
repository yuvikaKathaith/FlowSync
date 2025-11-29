import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950 to-black" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-purple-500/30 bg-purple-500/10 backdrop-blur-xl px-5 py-2 text-sm shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent font-medium">
                Now with AI-powered workflows
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              <span className="text-white">Where teams sync and</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                productivity flows
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300/75 text-balance max-w-2xl mx-auto lg:mx-0">
              Transform how your remote team works together with intelligent workflows, real-time collaboration, and
              AI-powered productivity tools.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 rounded-xl px-8 py-6 text-base font-semibold shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                <span className="relative flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto group bg-white/5 backdrop-blur-xl border-white/20 hover:bg-white/10 text-white rounded-xl px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:border-purple-400/50"
              >
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-6 pt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-3xl p-8 shadow-2xl">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />

                <div className="relative aspect-square w-full rounded-xl bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-indigo-900/40 overflow-hidden">
                  <img
                    src="/3d-abstract-holographic-interface-with-purple-and-.jpg"
                    alt="3D Abstract Illustration"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-2xl border border-purple-400/30 bg-purple-500/10 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.3)] animate-pulse-slow" />
                <div
                  className="absolute -bottom-4 -left-4 h-32 w-32 rounded-2xl border border-blue-400/30 bg-blue-500/10 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-pulse-slow"
                  style={{ animationDelay: "1s" }}
                />
              </div>

              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
