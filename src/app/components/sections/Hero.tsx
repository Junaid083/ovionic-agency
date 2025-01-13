import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <Image
          src="/images/bg-main.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 " />
        <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
          <div className=" text-center md:text-left max-w-xl md:max-w-2xl bg-gray-700/50 p-12 rounded-lg backdrop-blur-md ">
            <h1 className="font-manrope text-3xl  sm:text-5xl md:text-6xl  font-black text-white leading-[1.2] mb-8">
              A creative agency
              <br />
              for redemptive
              <br />
              brands
            </h1>
            <p className="font-plus-jakarta text-base  sm:text-lg text-gray-100 mb-8 max-w-md sm:max-w-xl opacity-90">
              We are Ovionic Based Design Agency. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Elementum felis, sed ullamcorper
              tempus faucibus in imperdiet. Semper justo mauris sed fusce erat
              aenean tristique.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6     sm:px-8 h-12 text-sm sm:text-base font-bold">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-8 sm:py-12 relative z-20">
        <div className="container mx-auto px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {partners.map((partner) => (
                <CarouselItem
                  key={partner.name}
                  className="basis-1/3 sm:basis-1/5"
                >
                  <div className="p-1">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={80}
                      height={30}
                      className="sm:24 md:w-40 h-auto opacity-50"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </div>
  );
}

const partners = [
  { name: "Zapier", logo: "/images/zapier.png" },
  { name: "Spotify", logo: "/images/spotify.png" },
  { name: "Zoom", logo: "/images/zoom.png" },
  { name: "Slack", logo: "/images/slack.png" },
  { name: "Amazon", logo: "/images/amazon.png" },
];
