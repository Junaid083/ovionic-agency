"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#8B5CF6] rounded-3xl flex flex-col h-full lg:flex-row lg:pl-14 md:gap-20 lg:gap-0"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:py-20 px-3 pt-10 flex flex-col items-center space-y-14 lg:items-start lg:w-3/5 lg:justify-center lg:space-y-18"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-2xl text-white font-bold text-center lg:text-left lg:text-5xl md:text-3xl"
          >
            No more manual processes! <br className="hidden lg:block" />
            Enjoy a more efficient, <br className="hidden lg:block" />
            organized, and results-driven <br className="hidden lg:block" />
            recruitment experience!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full bg-white text-black hover:bg-white/90 font-bold"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full min-h-[550px] relative lg:w-2/5 lg:mt-[-5rem] md:min-h-[430px] lg:ml-12"
        >
          <Image
            src="/images/contact/model.png"
            alt="Contact representative"
            fill
            className="object-bottom object-contain"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
