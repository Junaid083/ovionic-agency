import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { User, Monitor, Smartphone, ShoppingBag, Layout } from "lucide-react";
import Widget from "../components/layout/Widget";
import CTA from "../components/sections/CTA";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-[#0C1220]">
        <Image
          src="/images/aboutUs/cover.png"
          alt="Office environment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center text-center md:text-left">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
              Acquire talents faster & smarter with HR automation
            </h1>
            <p className="text-lg text-gray mb-8 max-w-xl">
              The best choice to streamline your recruitment process & get the
              best talents faster, effortlessly.
            </p>
            <Link href="/projects">
              <Button className="bg-purple hover:bg-purple/90 text-white rounded-full px-8 h-12">
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <Widget>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex h-8 items-center rounded-full bg-purple-50 px-4 text-sm text-purple mb-6">
              OUR FEATURES
            </div>
            <h2 className="text-4xl font-bold mb-4">
              We Engineer
              <br />
              Software Solutions
            </h2>
            <p className="text-gray max-w-3xl mx-auto">
              Strengthening customer connections, streamlining operations,
              optimizing data organization, fostering effective communication,
              and enhancing overall sales effectiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={service.title}
                className={`relative group overflow-hidden rounded-3xl ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative w-full h-56 sm:h-72 md:h-72 lg:h-96">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill" // Use layout fill to make the image fill the container
                    objectFit="cover" // Ensure image covers the container without stretching
                    className="transition-transform duration-300 group-hover:scale-105 rounded-3xl" // Apply hover effect and rounded corners
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-3xl">
                  <div className="absolute bottom-0 p-6 sm:p-8">
                    <div className="text-white/80 mb-2 text-sm sm:text-base">
                      Featured
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <Button className="bg-purple hover:bg-purple/90 text-white rounded-full text-sm sm:text-base">
                      Get in touch
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        {serviceCategories.map((category, index) => (
          <section
            key={index}
            className={`py-24 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-flex h-8 items-center rounded-full border border-purple px-4 text-sm text-purple mb-6">
                  Our Services
                </div>
                <h2 className="text-[40px] font-bold mb-4">{category.title}</h2>
                <p className="text-gray max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Card
                    key={serviceIndex}
                    className="bg-white rounded-[32px] p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between" // Use flexbox layout
                  >
                    <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-8 border">
                      {service.icon}
                    </div>
                    <h3 className="text-[28px] font-bold mb-4 text-left">
                      {service.title}
                    </h3>{" "}
                    {/* Align title to the left */}
                    <p className="text-gray text-lg mb-8 flex-grow text-left">
                      {service.description}
                    </p>{" "}
                    {/* Align description to the left */}
                    <Button className="bg-purple hover:bg-purple/90 text-white rounded-full w-full h-14 text-lg">
                      Get in touch
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}
        <CTA />
      </Widget>
    </>
  );
}

const featuredServices = [
  {
    title: "Mobile & Web UI/UX Design",
    image: "/images/software/ux.png",
  },
  {
    title: "AI Integration",
    image: "/images/software/ai.png",
  },
  {
    title: "SEO Optimization",
    image: "/images/software/seo.png",
  },
  {
    title: "Software Development",
    image: "/images/software/dev.png",
  },
  {
    title: "Shopify",
    image: "/images/software/shopify.png",
  },
];

const serviceCategories = [
  {
    title: "AI Services",
    description:
      "Strengthening customer connections, streamlining operations, optimizing data organization, fostering effective communication, and enhancing overall sales effectiveness.",
    services: [
      {
        icon: <User className="w-8 h-8 text-purple" />,
        title: "AI Learning",
        description:
          "Gain instant insights into your sales performance, track key metrics, and monitor sales activities as they happen.",
      },
      {
        icon: <User className="w-8 h-8 text-purple" />,
        title: "AI Learning",
        description:
          "Gain instant insights into your sales performance, track key metrics, and monitor sales activities as they happen.",
      },
      {
        icon: <User className="w-8 h-8 text-purple" />,
        title: "AI Learning",
        description:
          "Gain instant insights into your sales performance, track key metrics, and monitor sales activities as they happen.",
      },
    ],
  },
  {
    title: "Software Development",
    description:
      "Strengthening customer connections, streamlining operations, optimizing data organization, fostering effective communication, and enhancing overall sales effectiveness.",
    services: [
      {
        icon: <User className="w-8 h-8 text-purple" />,
        title: "SAAS Products Development",
        description:
          "Gain instant insights into your sales performance, track key metrics, and monitor sales activities as they happen.",
      },
      {
        icon: <Monitor className="w-8 h-8 text-purple" />,
        title: "Web Application Development",
        description:
          "Gain instant insights into your sales performance, track key metrics, and monitor sales activities as they happen.",
      },
      {
        icon: <Smartphone className="w-8 h-8 text-purple" />,
        title: "Mobile Application Development",
        description:
          "Gain instant insights into your sales performance, track key metrics, and monitor sales activities as they happen.",
      },
      {
        icon: <Layout className="w-8 h-8 text-purple" />,
        title: "Wordpress Customization & Development",
        description:
          "Gain instant insights into your sales performance, track key metrics, and monitor sales activities as they happen.",
      },
      {
        icon: <ShoppingBag className="w-8 h-8 text-purple" />,
        title: "Shopify Store Customization",
        description:
          "Gain instant insights into your sales performance, track key metrics, and monitor sales activities as they happen.",
      },
    ],
  },
  {
    title: "UIUX Design",
    description:
      "Strengthening customer connections, streamlining operations, optimizing data organization, fostering effective communication, and enhancing overall sales effectiveness.",
    services: [
      {
        icon: <User className="w-8 h-8 text-purple" />,
        title: "SAAS Products",
        description:
          "Gain instant insights into your sales performance, track key metrics, and monitor sales activities as they happen.",
      },
      {
        icon: <Monitor className="w-8 h-8 text-purple" />,
        title: "Web Application",
        description:
          "Gain instant insights into your sales performance, track key metrics, and monitor sales activities as they happen.",
      },
      {
        icon: <Smartphone className="w-8 h-8 text-purple" />,
        title: "Mobile Application",
        description:
          "Gain instant insights into your sales performance, track key metrics, and monitor sales activities as they happen.",
      },
    ],
  },
];
