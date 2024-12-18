import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function CTA() {
	return (
		<section className="mb-8">
			<div className="bg-[#8B5CF6] rounded-3xl flex flex-col h-full lg:flex-row lg:pl-14">
				<div className="px-3 pt-10 flex flex-col items-center space-y-14 lg:items-start lg:w-1/2 lg:justify-center">
					<p className="text-2xl text-white font-bold text-center lg:text-left">
						No more manual processes! <br className="hidden lg:block" />
						Enjoy a more efficient, <br className="hidden lg:block" />
						organized, and results-driven <br className="hidden lg:block" />
						recruitment experience!
					</p>
					<Button
						variant="secondary"
						size="lg"
						className="rounded-full bg-white text-[#8B5CF6] hover:bg-white/90"
					>
						Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</div>
				<div className="w-full h-[550px] relative lg:w-1/2 lg:mt-[-5rem] lg:h-[430px] lg:ml-12">
					<Image
						src="/images/contact/model.png"
						alt="Contact representative"
						fill
						className="object-cover object-bottom lg:object-center"
						priority
					/>
				</div>
			</div>
		</section>
	)
}
