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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center max-w-4xl mx-auto">
              Achieve efficient hiring and seamless candidate management
            </h2>
          </div>
        </section>

        <section className="py-20 ">
          <div className="container mx-auto px-4">
            <StorySection
              title="Our Founding Story"
              description="Create your branded career site, publish your job openings in seconds and automatically receive applicants into your hiring pipeline. Create your branded career site, publish your job openings in seconds and automatically receive applicants into your hiring pipeline."
              imageSrc="/images/aboutUs/founding1.png"
              imageAlt="Team meeting"
            />
            <StorySection
              title="Our Founding Story"
              description="Create your branded career site, publish your job openings in seconds and automatically receive applicants into your hiring pipeline. Create your branded career site, publish your job openings in seconds and automatically receive applicants into your hiring pipeline."
              imageSrc="/images/aboutUs/founding2.png"
              imageAlt="Office collaboration"
              reverse
            />
            <StorySection
              title="Our Founding Story"
              description="Create your branded career site, publish your job openings in seconds and automatically receive applicants into your hiring pipeline. Create your branded career site, publish your job openings in seconds and automatically receive applicants into your hiring pipeline."
              imageSrc="/images/aboutUs/founding3.png"
              imageAlt="Team brainstorming"
            />
          </div>
        </section>
        <CTA />
      </Widget>
      <TeamSection />
    </>
  );
}
