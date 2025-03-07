"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, User2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center">
      <Image
        src="/images/aboutUs/cover.png"
        alt="Office environment"
        fill
        className="object-cover blur-sm"
        priority
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-black/50"
      />

      <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Badge
            variant="secondary"
            className="bg-white/80 rounded-full text-purple mb-6 px-4 py-1.5 text-sm backdrop-blur-sm border-0 flex items-center gap-2 w-fit mx-auto"
          >
            <User2 className="w-4 h-4 text-purple" />
            About Us
          </Badge>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-4xl mb-6 leading-[1.2]"
        >
          Acquire talents faster and smarter with HR automation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mb-8"
        >
          The best choice to streamline your recruitment process & get the best
          talents faster, effortlessly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="contact">
            <Button
              size="lg"
              className="bg-purple hover:bg-purple-900 text-white rounded-full px-8"
            >
              Get in touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
