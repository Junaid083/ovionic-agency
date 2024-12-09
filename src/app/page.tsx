import Image from "next/image";
import Hero from "./components/sections/Hero";
import Partners from "./components/sections/Partners";
import About from "./components/sections/About";
import Benefits from "./components/sections/Benefits";
import Features from "./components/sections/Features";
import CEO from "./components/sections/CEO";
import CTA from "./components/sections/CTA";
import Testimonials from "./components/sections/Testimonials";
import Newsletter from "./components/sections/Newsletter";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <About imagePosition="left" /> <Benefits />
        <About imagePosition="right" />
        <Features />
        {/* <CEO /> */}
        <CTA />
      </div>
      <Testimonials />
      <Newsletter />
    </>
  );
}
