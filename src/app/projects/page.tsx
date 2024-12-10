import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Widget from "../components/layout/Widget";
import Features from "../components/sections/Features";
import CTA from "../components/sections/CTA";
import { redirect } from "next/navigation";

export default function ServicesPage() {
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 min-h-[80vh] flex items-center justify-center text-center">
          <div className="max-w-3xl">
            <div className="inline-flex h-8 items-center rounded-full bg-white/10 px-4 text-sm text-white backdrop-blur-sm mb-6">
              Our Latest Projects
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
              Acquire talents faster and
              <br />
              smarter with HR automation
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              The best choice to streamline your recruitment process & get the
              best talents faster, effortlessly.
            </p>
            <Button
                // onClick={()=>{
                //     redirect("/projects")
                // }}
              variant="ghost"
              className="bg-purple hover:bg-purple/90 text-white rounded-full px-8 h-12"
            >
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Widget>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex h-8 items-center rounded-full bg-purple-50 px-4 text-sm text-purple mb-6">
              OUR FEATURES
            </div>
            <h2 className="text-4xl font-bold text-navy">
              Dive in and experience the difference!
            </h2>
          </div>

          <div className="flex flex-col gap-24">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
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
