import Image from 'next/image'
import Head from 'next/head'

export default function CEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "John Doe",
    "jobTitle": "CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "Ovionic"
    },
    "description": "John Doe is the visionary leader behind Ovionic with over 20 years of experience in the tech industry."
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/ceo-image.jpg"
                alt="John Doe, CEO of Ovionic"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our CEO</h2>
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600 mb-6">
                John Doe is the visionary leader behind Ovionic. With over 20 years of experience in the tech industry, John has led our company to new heights, focusing on innovation, customer satisfaction, and sustainable growth.
              </p>
              <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-700 mb-6">
                "At Ovionic, we believe in the power of technology to transform businesses and improve lives. Our mission is to provide cutting-edge solutions that drive success for our clients and make a positive impact on the world."
              </blockquote>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  20+ years of industry experience
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Led multiple successful startups
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Recognized thought leader in AI and blockchain
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}