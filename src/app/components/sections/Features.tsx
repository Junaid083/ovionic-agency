import Image from 'next/image'
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Web Application",
    description: "This includes sales figures, lead conversion rates, customer support response times, and more. Real-time data allows users to make informed decisions on the spot, respond to emerging trends, and spot potential issues as they arise.",
    image: "/images/feature/web.png",
    imageAlt: "Web Application Dashboard Preview"
  },
  {
    id: 2,
    title: "Mobile Application",
    description: "This ensures that every team member can have a tailored view that focuses on what matters most to them, whether it's sales, marketing, customer support, or management-related data.",
    image: "/images/feature/mobile.png",
    imageAlt: "Mobile Application Interface"
  },
  {
    id: 3,
    title: "Interactive and Drill-Down Capabilities",
    description: "A good CRM dashboard should allow users to interact with the data and drill down to get more details. Interactive elements like filters, click-through options, and the ability to view historical data help users understand the context of their current numbers.",
    image: "/images/feature/drill.png",
    imageAlt: "Interactive Dashboard Features"
  }
]

export default function Features() {
  return (
    <section className="py-12 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <Badge 
            variant="secondary" 
            className="bg-[#EEF2FF] text-purple mb-8 px-6 py-2 text-sm font-medium"
          >
            OUR FEATURES
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937]">
            Dive in and experience the difference!
          </h2>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className={`grid lg:grid-cols-2 gap-8 sm:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>

              <div className={`space-y-6 ${
                index % 2 === 1 ? 'lg:col-start-1' : ''
              }`}>
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF2FF] text-sm text-purple font-medium">
                  {feature.id}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1F2937]">
                  {feature.title}
                </h3>
                <p className="text-gray text-base sm:text-lg leading-relaxed">
                  {feature.description}
                </p>
                <Button
                  variant="link"
                  className="text-purple font-medium p-0 h-auto hover:text-[#7C3AED] hover:no-underline"
                  asChild
                >
                  <Link href="#" className="inline-flex items-center gap-2">
                    View our projects
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

