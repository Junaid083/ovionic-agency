"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#F8F9FC] flex items-center py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4">
        {/* Left Section */}
        <div className="relative">
          <div className="relative z-10">
            <h1 className="text-[40px] font-bold mb-2">Share your details</h1>
            <p className="text-gray-500 text-lg mb-8">
              Become a Valuable Client with Ovionic
            </p>
          </div>

          {/* Image Container with Absolute Positioning */}
          <div className="relative hidden lg:block">
            {/* Model Image */}
            <div className="relative w-[500px] h-[600px]">
              <Image
                src="/images/contact/model.png"
                alt="Contact representative"
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            {/* Arrow Image - Positioned absolutely relative to the container */}
            <div className="absolute top-0 right-0 w-[180px] h-[180px] transform translate-x-8 -translate-y-4">
              <Image
                src="/images/contact/arrow.png"
                alt="Decorative arrow"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <Card className="p-8 rounded-2xl">
            <form className="space-y-6">
              <h2 className="text-[32px] font-bold">Share your Idea</h2>

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
                  Agree to{" "}
                  <Link
                    href="#"
                    className="text-purple-600 hover:text-purple-700"
                  >
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
      </div>
    </div>
  );
}
