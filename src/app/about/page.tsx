"use client";

import { motion } from "framer-motion";
import { Hero } from "../components/about/Hero";
import { StorySection } from "../components/about/StorySection";
import { TeamSection } from "../components/about/TeamSection";
import Widget from "../components/layout/Widget";
import CTA from "../components/sections/CTA";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Widget>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-center max-w-4xl mx-auto"
            >
              Achieve efficient hiring and seamless candidate management
            </motion.h2>
          </div>
        </motion.section>

        <section className="py-20 ">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <StorySection
                title="Our Founding Story"
                description="Create your branded career site, publish your job openings in seconds and automatically receive applicants into your hiring pipeline. Create your branded career site, publish your job openings in seconds and automatically receive applicants into your hiring pipeline."
                imageSrc="/images/aboutUs/founding1.png"
                imageAlt="Team meeting"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <StorySection
                title="Our Founding Story"
                description="Create your branded career site, publish your job openings in seconds and automatically receive applicants into your hiring pipeline. Create your branded career site, publish your job openings in seconds and automatically receive applicants into your hiring pipeline."
                imageSrc="/images/aboutUs/founding2.png"
                imageAlt="Office collaboration"
                reverse
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <StorySection
                title="Our Founding Story"
                description="Create your branded career site, publish your job openings in seconds and automatically receive applicants into your hiring pipeline. Create your branded career site, publish your job openings in seconds and automatically receive applicants into your hiring pipeline."
                imageSrc="/images/aboutUs/founding3.png"
                imageAlt="Team brainstorming"
              />
            </motion.div>
          </div>
        </section>
        <CTA />
      </Widget>
      <TeamSection />
    </>
  );
}
