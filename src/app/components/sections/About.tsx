import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface AboutData {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

const leftImageData: AboutData = {
  title: "About Us",
  description: "Welcome to Ovionic, where passion meets innovation! We are a team of dedicated professionals committed to delivering excellence in everything we do. Founded on the principles of integrity, creativity, and customer-centricity, our mission is to provide top-notch solutions tailored to your needs.",
  buttonText: "Learn more",
  imageSrc: "/images/aboutUs/aboutus.png",
  imageAlt: "Team collaboration"
}

const rightImageData: AboutData = {
  title: "Our Mission",
  description: "At Ovionic, our mission is to empower businesses through cutting-edge technology solutions. We strive to create innovative products that solve real-world problems and drive growth for our clients. With a focus on quality, reliability, and customer satisfaction, we aim to be the leading provider of digital transformation services in the industry.",
  buttonText: "Discover More",
  imageSrc: "/images/aboutUs/person.png",
  imageAlt: "Team brainstorming"
}

interface AboutProps {
  imagePosition: 'left' | 'right';
}

export default function About({ imagePosition = 'left' }: AboutProps) {
  const data = imagePosition === 'left' ? leftImageData : rightImageData;

  const ImageSection = (
    <Card className="overflow-hidden border-none shadow-xl">
      <div className="aspect-[4/3] relative">
        <Image
          src={data.imageSrc}
          alt={data.imageAlt}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
    </Card>
  )

  const ContentSection = (
    <div className="space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold">{data.title}</h2>
      <p className="text-gray text-base sm:text-lg leading-relaxed">
        {data.description}
      </p>
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
    </div>
  )

  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {imagePosition === 'left' ? (
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
  )
}

