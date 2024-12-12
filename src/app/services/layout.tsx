import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Ovionic Agency',
  description: 'Explore our comprehensive range of services including mobile app design, web applications, and AI solutions.',
  openGraph: {
    title: 'Our Services | Ovionic Agency',
    description: 'Explore our comprehensive range of services including mobile app design, web applications, and AI solutions.',
    images: [
      {
        url: 'https://ovionic.com/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Ovionic Agency Services',
      },
    ],
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

