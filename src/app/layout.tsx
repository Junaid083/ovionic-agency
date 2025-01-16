import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Newsletter from "./components/sections/Newsletter";
import Testimonials from "./components/sections/Testimonials";
import "./globals.css";
import { Manrope, Playfair_Display, Roboto, Inter } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Ovionic Agency | A Creative Agency for Redemptive Brands",
  description:
    "Ovionic is a leading creative agency specializing in innovative solutions for redemptive brands. Discover how we can transform your business.",
  keywords: "creative agency, branding, digital marketing, web design, Ovionic",
  openGraph: {
    title: "Ovionic Agency | A Creative Agency for Redemptive Brands",
    description:
      "Ovionic is a leading creative agency specializing in innovative solutions for redemptive brands. Discover how we can transform your business.",
    images: [
      {
        url: "https://ovionic.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ovionic Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ovionic Agency | A Creative Agency for Redemptive Brands",
    description:
      "Ovionic is a leading creative agency specializing in innovative solutions for redemptive brands. Discover how we can transform your business.",
    images: ["https://ovionic.com/twitter-image.jpg"],
    creator: "@ovionicagency",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} ${roboto.variable} ${inter.variable}`}
    >
      <body className="font-manrope">
        <Header />
        <main className="pt-20">{children}</main>
        <Testimonials />
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
