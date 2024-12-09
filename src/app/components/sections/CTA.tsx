import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="container mx-auto px-4 py-12 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl">
        <Image 
          src="/images/cta.png" 
          alt="No more manual processes! Enjoy a more efficient, organized, and results-driven recruitment experience!" 
          width={1920} 
          height={400} 
          className="w-full h-auto object-cover"
          priority
        />
        {/* <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
          <Button 
            variant="secondary" 
            size="lg"
            className="rounded-full bg-white text-[#8B5CF6] hover:bg-white/90"
          >
            Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      </div>
    </section>
  )
}

