"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
    description:
      "This includes sales figures, lead conversion rates, customer support response times, and more. Real-time data allows users to make informed decisions on the spot, respond to emerging trends, and spot potential issues as they arise.",
    image: "/images/feature/web.png",
    imageAlt: "Web Application Dashboard Preview",
  },
  {
    id: 2,
    title: "Mobile Application",
    description:
      "This ensures that every team member can have a tailored view that focuses on what matters most to them, whether it's sales, marketing, customer support, or management-related data.",
    image: "/images/feature/mobile.png",
    imageAlt: "Mobile Application Interface",
  },
  {
    id: 3,
    title: "Interactive and Drill-Down Capabilities",
    description:
      "A good CRM dashboard should allow users to interact with the data and drill down to get more details. Interactive elements like filters, click-through options, and the ability to view historical data help users understand the context of their current numbers.",
    image: "/images/feature/drill.png",
    imageAlt: "Interactive Dashboard Features",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-12 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <Badge
            variant="secondary"
            className="bg-[#EEF2FF] text-purple mb-8 px-6 py-2 text-sm font-bold rounded-full"
          >
            OUR FEATURES
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] font-inter">
            Dive in and experience the difference!
          </h2>
        </motion.div>

        <div className="space-y-24 text-center md:text-left">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center border-r-0 lg:border-r-4 lg:border-gray-200"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 rounded-2xl" />
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-lg relative z-10"
                />
              </motion.div>

              <motion.div
                className="space-y-6 pr-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2 + 0.2,
                  ease: "easeOut",
                }}
              >
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF2FF] text-purple font-medium">
                  {feature.id}
                </div>
                <h3 className="text-[32px] font-bold text-[#1F2937] font-inter tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[#6B7280] text-lg leading-[1.75] font-normal">
                  {feature.description}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/projects">
                    <Button className="bg-purple hover:bg-[#6D28D9] text-white rounded-full px-6 py-3 h-auto text-base font-semibold">
                      View our projects
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
