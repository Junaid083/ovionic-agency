import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "The real-time data visualization is a game-changer, and the level of customization is impressive.",
    author: "Leonardo Alex",
    role: "CEO of Leohor",
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
    <section className="bg-navy py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1 text-xs font-medium bg-white/5 text-white border-white/10 uppercase tracking-wider"
          >
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our customers say about us
          </h2>
          <p className="text-gray max-w-2xl text-base sm:text-lg">
            Build trust, increase conversions, and watch your business thrive.
            Try it today and let your customers voices be your best sales tool.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="bg-[#1a1a1a]/60 border-white/5 p-6 rounded-xl text-white"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-purple text-purple"
                  />
                ))}
              </div>
              <p className="text-gray mb-6 text-sm sm:text-base">
                "{item.quote}"
              </p>
              <div>
                <p className="font-semibold text-white">{item.author}</p>
                <p className="text-sm text-gray">{item.role}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="rounded-lg bg-purple hover:bg-[#7C3AED] text-white px-8"
          >
            Get started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
