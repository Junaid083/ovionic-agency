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
import Widget from "./components/layout/Widget";
export default function Home() {
  return (
    <>
      <Hero />
      <Widget>
        <About imagePosition="left" /> <Benefits />
        <About imagePosition="right" />
        <Features />
        <CTA />
      </Widget>
    </>
  );
}
