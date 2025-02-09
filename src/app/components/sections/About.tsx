"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface AboutData {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

const leftImageData: AboutData = {
  title: "About Us",
  description:
    "Welcome to Ovionic, where passion meets innovation! We are a team of dedicated professionals committed to delivering excellence in everything we do. Founded on the principles of integrity, creativity, and customer-centricity, our mission is to provide top-notch solutions tailored to your needs.",
  buttonText: "Learn more",
  imageSrc: "/images/aboutUs/aboutus.png",
  imageAlt: "Team collaboration",
};

const rightImageData: AboutData = {
  title: "Our Mission",
  description:
    "At Ovionic, our mission is to empower businesses through cutting-edge technology solutions. We strive to create innovative products that solve real-world problems and drive growth for our clients. With a focus on quality, reliability, and customer satisfaction, we aim to be the leading provider of digital transformation services in the industry.",
  buttonText: "Discover More",
  imageSrc: "/images/aboutUs/person.png",
  imageAlt: "Team brainstorming",
};

interface AboutProps {
  imagePosition: "left" | "right";
}

export default function About({ imagePosition = "left" }: AboutProps) {
  const data = imagePosition === "left" ? leftImageData : rightImageData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const ImageSection = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: imagePosition === "left" ? -50 : 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : imagePosition === "left" ? -50 : 50,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Card className="overflow-hidden border-none shadow-xl">
        <motion.div
          className="aspect-[4/3] relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={data.imageSrc || "/placeholder.svg"}
            alt={data.imageAlt}
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>
      </Card>
    </motion.div>
  );

  const ContentSection = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: imagePosition === "left" ? 50 : -50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : imagePosition === "left" ? 50 : -50,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold"
      >
        {data.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="text-gray text-base sm:text-lg leading-relaxed"
      >
        {data.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/about">
          <Button
            size="lg"
            className="bg-purple hover:bg-purple-900 text-white rounded-full px-6 sm:px-8"
          >
            {data.buttonText}
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );

  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {imagePosition === "left" ? (
            <>
              {ImageSection}
              {ContentSection}
            </>
          ) : (
            <>
              {ContentSection}
              {ImageSection}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
