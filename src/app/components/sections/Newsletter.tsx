"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative py-24 overflow-hidden min-h-[600px] flex items-center">
      {/* Main background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0A1334 0%, #2D1B69 100%)",
        }}
      />

      {/* Center radial gradient with color similar to your image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(68, 188, 255, 0.25) 10%, rgba(68, 176, 255, 0.15) 25%, rgba(255, 68, 236, 0.1) 50%, rgba(255, 103, 94, 0.05) 90%, transparent 100%)",
          backdropFilter: "blur(60px)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Subscribe to our newsletter
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300/90 mb-12 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Get the latest notifications about what we've updated now and in the
            last month, and you can opt-out email from notifications about us
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="E.g. Doejohn@example.com"
              className="h-14 bg-[#1E2642]/60 border-white/5 text-white placeholder:text-gray-400 rounded-xl text-base px-6 focus:border-purple-500/50 focus:ring-purple-500/30"
            />
            <Button className="h-14 rounded-xl bg-purple hover:bg-[#6D28D9] text-white text-base font-medium w-full transition-colors duration-200">
              Discover more <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Name tags - Desktop */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute left-8 bottom-8 hidden sm:block"
        >
          <div className="flex items-center gap-2">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[12px] border-r-[#00DC82] border-b-[6px] border-b-transparent" />
            <span className="bg-[#00DC82] text-black text-sm px-4 py-1.5 rounded-lg font-medium">
              Terry Bator
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute right-8 bottom-8 hidden sm:block"
        >
          <div className="flex items-center gap-2">
            <span className="bg-[#FF5733] text-white text-sm px-4 py-1.5 rounded-lg font-medium">
              Miracle Ekstrom Bothman
            </span>
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#FF5733] border-b-[6px] border-b-transparent" />
          </div>
        </motion.div>

        {/* Name tags - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute left-10 -bottom-12 sm:hidden"
        >
          <div className="flex items-center gap-2">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[12px] border-r-[#00DC82] border-b-[6px] border-b-transparent" />
            <span className="bg-[#00DC82] text-black text-sm px-3 py-1 rounded-md font-medium">
              Terry Bator
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute right-10 -top-12 sm:hidden"
        >
          <div className="flex items-center gap-2">
            <span className="bg-[#FF5733] text-white text-sm px-3 py-1 rounded-md font-medium">
              Miracle Ekstrom Bothman
            </span>
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#FF5733] border-b-[6px] border-b-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
