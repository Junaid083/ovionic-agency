import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface BenefitCard {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
}

const benefits: BenefitCard[] = [
  {
    icon: "/images/services/ai-integration.png",
    title: "AI Integration",
    description:
      "Gain instant insights into your sales performance, track key metrics, and monitor sales activities as they happen.",
  },
  {
    icon: "/images/services/web.png",
    title: "Web Application",
    description:
      "Gain instant insights into your sales performance, track key metrics, and monitor sales activities as they happen.",
    featured: true,
  },
  {
    icon: "/images/services/mobile.png",
    title: "Mobile Application",
    description:
      "Gain instant insights into your sales performance, track key metrics, and monitor sales activities as they happen.",
  },
];

export default function Benefits() {
  return (
    <section className="relative py-12 sm:py-24 bg-[#F8F9FC]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <Badge
            variant="outline"
            className="bg-white border-purple text-purple mb-6 sm:mb-8 px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-medium"
          >
            Our Services
          </Badge>

          <h2 className="text-3xl sm:text-[40px] font-bold mb-2 tracking-tight">
            Benefits for Your Business
          </h2>
          <h2 className="text-3xl sm:text-[40px] font-bold text-purple mb-4 sm:mb-6 tracking-tight">
            Growth
          </h2>

          <p className="text-gray max-w-3xl text-base sm:text-lg">
            Strengthening customer connections, streamlining operations,
            optimizing data organization, fostering effective communication, and
            enhancing overall sales effectiveness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-6 sm:p-8 text-left transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl ${
                benefit.featured ? "shadow-lg" : ""
              }`}
            >
              <div className="mb-6">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${
                    benefit.featured ? "bg-purple" : "bg-[#F8F9FC]"
                  } flex items-center justify-center`}
                >
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={32}
                    height={32}
                    className={
                      benefit.featured ? "brightness-0 invert" : "opacity-80"
                    }
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                {benefit.title}
              </h3>
              <p className="text-[#6B7280] text-sm sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
