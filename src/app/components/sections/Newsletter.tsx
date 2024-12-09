import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-[#8B5CF6]">
      <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-300 mb-8 text-base sm:text-lg">
            Get the latest notifications about what we've updated now and in the last month, and you can opt-out email from notifications about us
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="E.g Doejohn@example.com"
              className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-full"
            />
            <Button 
              className="h-12 px-8 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white whitespace-nowrap"
            >
              Discover more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="absolute left-4 bottom-4">
          <span className="inline-block px-3 py-1 bg-[#00DC82] text-xs text-black rounded-full">
            Terry Betol
          </span>
        </div>
        
        <div className="absolute right-4 bottom-4">
          <span className="inline-block px-3 py-1 bg-[#FF5733] text-xs text-white rounded-full">
            Miracle Esthom Bothman
          </span>
        </div>
      </div>
    </section>
  )
}

