import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Ovionic Agency',
  description: 'Get in touch with Ovionic Agency to discuss your project ideas and requirements.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

