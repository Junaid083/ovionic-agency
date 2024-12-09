import Footer from './components/layout/footer'
import Header from './components/layout/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ovionic Agency | A Creative Agency for Redemptive Brands',
  description: 'Ovionic is a leading creative agency specializing in innovative solutions for redemptive brands. Discover how we can transform your business.',
  keywords: 'creative agency, branding, digital marketing, web design, Ovionic',
  openGraph: {
    title: 'Ovionic Agency | A Creative Agency for Redemptive Brands',
    description: 'Ovionic is a leading creative agency specializing in innovative solutions for redemptive brands. Discover how we can transform your business.',
    images: [
      {
        url: 'https://ovionic.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ovionic Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ovionic Agency | A Creative Agency for Redemptive Brands',
    description: 'Ovionic is a leading creative agency specializing in innovative solutions for redemptive brands. Discover how we can transform your business.',
    images: ['https://ovionic.com/twitter-image.jpg'],
    creator: '@ovionicagency',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}