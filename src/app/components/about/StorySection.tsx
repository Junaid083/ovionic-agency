import Image from "next/image";

interface StorySectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export function StorySection({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: StorySectionProps) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32`}
    >
      <div className={`space-y-6 ${reverse ? "md:order-2" : ""}`}>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {title}
        </h3>
        <p className="text-gray text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      </div>
      <div className={`${reverse ? "md:order-1" : ""}`}>
        <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
