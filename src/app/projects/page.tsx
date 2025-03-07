"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, User2 } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Widget from "../components/layout/Widget";
import Features from "../components/sections/Features";
import CTA from "../components/sections/CTA";
import { Badge } from "@/components/ui/badge";

export default function ProjectPage() {
  return (
    <>
      <section className="relative h-[85vh] flex items-center">
        <Image
          src="/images/services/service.png"
          alt="Background"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 container mx-auto px-4 min-h-[80vh] flex items-center justify-center text-center"
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Badge
                variant="secondary"
                className="bg-white/80 rounded-full text-purple mb-6 px-4 py-1.5 text-sm backdrop-blur-sm border-0 flex items-center gap-2 w-fit mx-auto"
              >
                <User2 className="w-4 h-4 text-purple" />
                Our Latest Projects
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-5xl sm:text-6xl md:text-5xl font-bold text-white mb-6"
            >
              Acquire talents faster and
              <br />
              smarter with HR automation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
            >
              The best choice to streamline your recruitment process & get the
              best talents faster, effortlessly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Button
                variant="ghost"
                className="bg-purple hover:bg-purple/90 text-white rounded-full px-6 h-10"
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Widget>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="inline-flex h-8 items-center rounded-full bg-purple-50 px-4 text-sm text-purple mb-6">
              OUR FEATURES
            </div>
            <h2 className="text-4xl font-bold text-navy">
              Dive in and experience the difference!
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-24"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <Features />
        <CTA />
      </Widget>
    </>
  );
}

const projects = [
  {
    id: 1,
    title: "Sportly",
    category: "Mobile App Design",
    image: "/images/services/sportly.png",
    link: "#",
  },
  {
    id: 2,
    title: "CRM Portal",
    category: "Web Application",
    image: "/images/services/CRM.png",
    link: "#",
  },
  {
    id: 3,
    title: "SAAS Products",
    category: "Web Application",
    image: "/images/services/SAAS.png",
    link: "#",
  },
  {
    id: 4,
    title: "Learning AI Product",
    category: "Web Application",
    image: "/images/services/ai.png",
    link: "#",
  },
];
