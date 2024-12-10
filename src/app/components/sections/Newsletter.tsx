import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#020817]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(139,92,246,0.3), transparent 60%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-400 mb-8 text-base sm:text-lg">
            Get the latest notifications about what we've updated now and in the
            last month, and you can opt-out email from notifications about us
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="E.g Doejohn@example.com"
              className="h-12 bg-[#1a1a1a]/60 border-white/10 text-white placeholder:text-gray-500 rounded-lg"
            />
            <Button className="h-12 px-8 rounded-lg bg-purple hover:bg-purple-900 text-white whitespace-nowrap">
              Discover more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Name tags */}
        <div className="absolute left-4 bottom-4 sm:left-8 sm:bottom-8">
          <div className="flex items-center gap-2">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[12px] border-r-[#00DC82] border-b-[6px] border-b-transparent" />
            <span className="bg-[#00DC82] text-black text-xs px-3 py-1 rounded-md">
              Terry Bator
            </span>
          </div>
        </div>

        <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-8">
          <div className="flex items-center gap-2">
            <span className="bg-[#FF5733] text-white text-xs px-3 py-1 rounded-md">
              Miracle Ekstrom Bothman
            </span>
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#FF5733] border-b-[6px] border-b-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
