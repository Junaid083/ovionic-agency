"use client";

import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Badge
              variant="outline"
              className="bg-white border-purple rounded-full text-purple mb-6 sm:mb-8 px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-medium"
            >
              Our Services
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-3xl sm:text-[40px] font-bold mb-2 tracking-tight"
          >
            Benefits for Your Business
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="text-3xl sm:text-[40px] font-bold text-purple mb-4 sm:mb-6 tracking-tight"
          >
            Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="text-gray max-w-3xl text-base sm:text-lg"
          >
            Strengthening customer connections, streamlining operations,
            optimizing data organization, fostering effective communication, and
            enhancing overall sales effectiveness.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.2 * (index + 1),
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className={`bg-white rounded-3xl p-6 sm:p-8 text-left ${
                benefit.featured ? "shadow-lg" : "shadow-md"
              }`}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.3 * (index + 1),
                  ease: "easeOut",
                }}
                className="mb-6"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${
                    benefit.featured ? "bg-purple" : "bg-[#F8F9FC]"
                  } flex items-center justify-center`}
                >
                  <Image
                    src={benefit.icon || "/placeholder.svg"}
                    alt={benefit.title}
                    width={32}
                    height={32}
                    className={
                      benefit.featured ? "brightness-0 invert" : "opacity-80"
                    }
                  />
                </motion.div>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.4 * (index + 1),
                  ease: "easeOut",
                }}
                className="text-lg sm:text-xl font-bold mb-3 sm:mb-4"
              >
                {benefit.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 * (index + 1),
                  ease: "easeOut",
                }}
                className="text-[#6B7280] text-sm sm:text-base"
              >
                {benefit.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
