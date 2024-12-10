import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="container mx-auto px-4 py-12 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-[#8B5CF6]">
        {/* Diagonal texture overlay */}
        <div
          className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)]
    bg-[length:500px_500px]"
        />

        <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 sm:p-12 md:p-16">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              No more manual processes!
              <br />
              Enjoy a more efficient,
              <br className="hidden sm:block" />
              organized, and results-driven
              <br className="hidden sm:block" />
              recruitment experience!
            </h2>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full bg-white text-[#8B5CF6] hover:bg-white/90"
            >
              Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] ml-auto">
            <Image
              src="/images/cta2.png"
              alt="Professional with tablet"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

// export default function CTA() {
//   return (
//     <section className="container mx-auto px-4 py-12 sm:py-24">
//       <div className="relative overflow-hidden rounded-3xl bg-[#8B5CF6]">
//         {/* Diagonal pattern overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)`,
//             backgroundSize: "500px 500px",
//           }}
//         />

//         <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 sm:p-12 lg:p-16">
//           <div className="space-y-6 max-w-xl">
//             <h2 className="text-3xl sm:text-4xl font-bold text-white leading-[1.2]">
//               No more manual processes!
//               <br />
//               Enjoy a more efficient,
//               <br className="hidden sm:block" />
//               organized, and results-driven
//               <br className="hidden sm:block" />
//               recruitment experience!
//             </h2>
//             <Button
//               size="lg"
//               className="rounded-full bg-white text-[#8B5CF6] hover:bg-white/90"
//             >
//               Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </div>
//           <div className="relative h-[300px] sm:h-[400px] md:h-[500px] ml-auto w-full">
//             <Image
//               src="/images/cta2.png"
//               alt="Professional with tablet"
//               fill
//               className="object-contain object-right-bottom"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
