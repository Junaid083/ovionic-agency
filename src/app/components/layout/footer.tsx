import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "FAQ", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Customer Support", href: "#" },
    { name: "Career", href: "#" },
  ],
  social: [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookies Settings", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Logo.png"
              alt="Ovionic"
              width={200}
              height={200}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm hover:text-[#8B5CF6] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#8B5CF6] transition-colors"
                aria-label={item.name}
              >
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4 border-t border-white/10 pt-8 text-sm">
          <p className="text-center md:text-left">
            © 2023 Relume. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-[#8B5CF6] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
