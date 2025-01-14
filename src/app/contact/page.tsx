'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactPage() {
	return (
		<div className="bg-[#F8F9FC] pt-6 lg:px-7 lg:pt-16">
			<div className="p-2 flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-8 lg:items-stretch">
				{/* Left Section */}
				<LeftSection />
				{/* Right Section */}
				<RightSection />
			</div>
		</div>
	)
}

function LeftSection() {
	return (
		<div className="lg:w-1/2 flex flex-col">
			<div className="space-y-3 p-4 ">
				<h1 className="text-2xl font-bold text-center lg:text-left lg:text-[64px] lg:leading-tight">
					Share your details
				</h1>
				<p className="text-gray-500 text-2xl font-normal text-center lg:text-left lg:text-2xl">
					Become a Valuable Client with Ovionic
				</p>
			</div>
			<div className="hidden lg:block lg:flex-grow lg:relative">
				<div className="w-full h-full relative">
					<Image
						src="/images/contact/model.png"
						alt="Contact representative"
						fill
						className="object-contain object-left"
						priority
					/>
				</div>
				<div>
					<div className="absolute top-[11%] right-16 w-[180px] h-[180px]">
						<Image
							src="/images/contact/arrow.png"
							alt="Decorative arrow"
							fill
							className="object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

function RightSection() {
	return (
		<div className="lg:w-3/2">
			<Card className="w-full py-8 px-8 rounded-xl border-gray-200">
				<form className="space-y-6">
					<h2 className="text-2xl font-bold">Share your Idea</h2>

					<div className="space-y-2">
						<label className="text-sm text-gray-600">Email</label>
						<input
							type="email"
							placeholder="jonas.khanwald@mail.com"
							className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
						/>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<label className="text-sm text-gray-600">First Name</label>
							<input
								type="text"
								placeholder="Jonas"
								className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
							/>
						</div>
						<div className="space-y-2">
							<label className="text-sm text-gray-600">Last Name</label>
							<input
								type="text"
								placeholder="Kahnwald"
								className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<label className="text-sm text-gray-600">
							Idea About your project
						</label>
						<textarea
							placeholder="Write here"
							rows={6}
							className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 resize-none"
						></textarea>
						<p className="text-sm text-gray-500">
							Character length can be 7000
						</p>
					</div>

					<div className="flex items-center gap-2">
						<Checkbox
							id="guidelines"
							className="rounded border-gray-200 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
						/>
						<label htmlFor="guidelines" className="text-sm">
							Agree to{' '}
							<Link href="#" className="text-purple-600 hover:text-purple-700">
								Guidelines for Submission
							</Link>
						</label>
					</div>

					<Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full h-12">
						Submit
						<ArrowRight className="ml-2 h-5 w-5" />
					</Button>
				</form>
			</Card>
		</div>
	)
}