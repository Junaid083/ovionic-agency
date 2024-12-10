import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  category: string
  image: string
  link: string
}

export default function ProjectCard({ title, category, image, link }: ProjectCardProps) {
  return (
    <div>
      <div className="relative aspect-[2/1] w-full rounded-3xl overflow-hidden mb-8">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-[40px] font-bold text-navy leading-tight">{title}</h3>
          <p className="text-2xl text-gray">{category}</p>
        </div>
        <Button
          asChild
          variant="ghost"
          className="bg-purple hover:bg-purple/90 text-white rounded-full px-8 h-12"
        >
          <Link href={link} className="flex items-center gap-2">
            View Case Study
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

