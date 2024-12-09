import Image from 'next/image'
import { Card } from '@/components/ui/card'

export default function Partners() {
  const partners = [
    { name: 'Zapier', logo: '/images/zapier.png' },
    { name: 'Spotify', logo: '/images/spotify.png' },
    { name: 'Zoom', logo: '/images/zoom.png' },
    { name: 'Slack', logo: '/images/slack.png' },
    { name: 'Amazon', logo: '/images/amazon.png' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center">
          {partners.map((partner) => (
            <Card key={partner.name} className="bg-transparent border-none shadow-none">
              <div className="w-full aspect-[3/1] relative">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain opacity-50 hover:opacity-75 transition-opacity duration-300"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

