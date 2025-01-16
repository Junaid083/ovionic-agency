import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The real-time data visualization is a game-changer, and the level of customization is impressive.",
    author: "Leonardo Alex",
    role: "CEO of Lexthor",
    rating: 5,
  },
  {
    quote:
      "This is one of the best dashboards I've tried so far. powerful and easy to use. you guys should try it. don't miss it!",
    author: "Eren Yaeger",
    role: "CEO of Rumbling Corp",
    rating: 5,
  },
  {
    quote:
      "The basic package is a great value, and the advanced analytics in the Pro package have been incredibly helpful for our business.",
    author: "Stive Luthor",
    role: "CEO of Sticorp",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-navy py-24 overflow-hidden relative">
      {/* Gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0F1A] to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0F1A] to-transparent z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left side - Testimonials with staggered layout for large screens */}
          <div className="relative h-[400px] hidden lg:block">
            {/* Column 1 - 4 cards */}
            <Card className="absolute -top-20 left-0 w-[350px] h-[50px] bg-[#212633]/20 border-0 rounded-2xl" />
            <Card className="absolute -top-[15px] left-0 w-[350px] bg-[#212633] border-0 p-8 rounded-2xl z-20 transition-all duration-300 hover:-translate-y-1">
              <p className="text-white text-[15px] leading-relaxed mb-6">
                "{testimonials[0].quote}"
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-white text-base mb-1">
                    {testimonials[0].author}
                  </p>
                  <p className="text-[13px] text-[#9CA3AF]">
                    {testimonials[0].role}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#F8AE69] fill-[#F8AE69]" />
                  <span className="text-white font-medium">5.0</span>
                </div>
              </div>
            </Card>

            <Card className="absolute top-[210px] left-0 w-[350px] bg-[#212633] border-0 p-8 rounded-2xl z-20 transition-all duration-300 hover:-translate-y-1">
              <p className="text-white text-[15px] leading-relaxed mb-6">
                "{testimonials[2].quote}"
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-white text-base mb-1">
                    {testimonials[2].author}
                  </p>
                  <p className="text-[13px] text-[#9CA3AF]">
                    {testimonials[2].role}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#F8AE69] fill-[#F8AE69]" />
                  <span className="text-white font-medium">5.0</span>
                </div>
              </div>
            </Card>

            <Card className="absolute -bottom-20 left-0 w-[350px] h-[30px] bg-[#212633]/20 border-0 rounded-2xl" />

            {/* Column 2 - 3 cards */}
            <Card className="absolute -top-10 right-0 w-[350px] h-[200px] bg-[#212633]/20 border-0 rounded-2xl" />
            <Card className="absolute top-[180px] right-0 w-[350px] bg-[#212633] border-0 p-8 rounded-2xl z-10 transition-all duration-300 hover:-translate-y-1">
              <p className="text-white text-[15px] leading-relaxed mb-6">
                "{testimonials[1].quote}"
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-white text-base mb-1">
                    {testimonials[1].author}
                  </p>
                  <p className="text-[13px] text-[#9CA3AF]">
                    {testimonials[1].role}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#F8AE69] fill-[#F8AE69]" />
                  <span className="text-white font-medium">5.0</span>
                </div>
              </div>
            </Card>

            <Card className="absolute -bottom-[200px] right-0 w-[350px] h-[200px] bg-[#212633]/20 border-0 rounded-2xl" />
          </div>

          {/* Mobile testimonials */}
          <div className="flex flex-col gap-4 lg:hidden">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="w-full bg-[#212633] border-0 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-white text-[15px] leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-white text-base mb-1">
                      {testimonial.author}
                    </p>
                    <p className="text-[13px] text-[#9CA3AF]">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#F8AE69] fill-[#F8AE69]" />
                    <span className="text-white font-medium">5.0</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right side - Content */}
          <div className="lg:pl-8">
            <Badge className="bg-white/10 text-white border-0 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider mb-6">
              Testimonials
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1]">
              Our customers say about us
            </h2>
            <p className="text-[#9CA3AF] text-base lg:text-lg mb-8 leading-relaxed max-w-xl">
              Build trust, increase conversions, and watch your business thrive.
              Try it today and let your customers' voices be your best sales
              tool.
            </p>
            <Button className="bg-purple-600 hover:bg-[#6D28D9] text-white rounded-full px-6 py-3 h-auto text-base font-semibold">
              Get started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
