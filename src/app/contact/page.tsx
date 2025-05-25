"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent, type ChangeEvent } from "react";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-[#F8F9FC] pt-6 lg:px-7 lg:pt-16"
    >
      <div className="p-2 flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-8 lg:items-stretch">
        {/* Left Section */}
        <LeftSection />
        {/* Right Section */}
        <RightSection />
      </div>
    </motion.div>
  );
}

function LeftSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="lg:w-1/2 flex flex-col"
    >
      <div className="space-y-3 p-4 ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-2xl font-bold text-center lg:text-left lg:text-[64px] lg:leading-tight"
        >
          Share your details
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-gray-500 text-2xl font-normal text-center lg:text-left lg:text-2xl"
        >
          Become a Valuable Client with Ovionic
        </motion.p>
      </div>
      <div className="hidden lg:block lg:flex-grow lg:relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/contact/model.png"
            alt="Contact representative"
            fill
            className="object-contain object-left"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.7,
            ease: "easeOut",
          }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute top-[11%] right-16 w-[180px] h-[180px]"
          >
            <Image
              src="/images/contact/arrow.png"
              alt="Decorative arrow"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function RightSection() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    projectIdea: "",
    guidelines: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    firstName: "",
    lastName: "",
    projectIdea: "",
    guidelines: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user types
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      guidelines: e.target.checked,
    });
    setErrors({
      ...errors,
      guidelines: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
      valid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }

    if (!formData.projectIdea) {
      newErrors.projectIdea = "Project idea is required";
      valid = false;
    } else if (formData.projectIdea.length < 10) {
      newErrors.projectIdea = "Please provide more details about your idea";
      valid = false;
    }

    if (!formData.guidelines) {
      newErrors.guidelines = "You must agree to the guidelines";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          projectIdea: formData.projectIdea,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        projectIdea: "",
        guidelines: false,
      });

      // Reset success status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );

      // Reset error status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="lg:w-3/2"
    >
      <Card className="w-full py-8 px-8 rounded-xl border-gray-200">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-2xl font-bold"
          >
            Share your Idea
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="space-y-2"
          >
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="jonas.khanwald@mail.com"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email
                  ? "border-red-500 focus:ring-red-500/20"
                  : "border-gray-200 focus:ring-purple-500/20"
              } focus:outline-none focus:ring-2`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-2">
              <label className="text-sm text-gray-600">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Jonas"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.firstName
                    ? "border-red-500 focus:ring-red-500/20"
                    : "border-gray-200 focus:ring-purple-500/20"
                } focus:outline-none focus:ring-2`}
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Kahnwald"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.lastName
                    ? "border-red-500 focus:ring-red-500/20"
                    : "border-gray-200 focus:ring-purple-500/20"
                } focus:outline-none focus:ring-2`}
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="space-y-2"
          >
            <label className="text-sm text-gray-600">
              Idea About your project
            </label>
            <textarea
              name="projectIdea"
              placeholder="Write here"
              rows={6}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.projectIdea
                  ? "border-red-500 focus:ring-red-500/20"
                  : "border-gray-200 focus:ring-purple-500/20"
              } focus:outline-none focus:ring-2 resize-none`}
              value={formData.projectIdea}
              onChange={handleChange}
            ></textarea>
            {errors.projectIdea ? (
              <p className="text-red-500 text-sm">{errors.projectIdea}</p>
            ) : (
              <p className="text-sm text-gray-500">
                Character length can be 7000
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="flex items-start gap-2"
          >
            <div className="pt-1">
              <Checkbox
                id="guidelines"
                className={`rounded border-gray-200 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 ${
                  errors.guidelines ? "border-red-500" : ""
                }`}
                checked={formData.guidelines}
                onCheckedChange={(checked) => {
                  setFormData({
                    ...formData,
                    guidelines: checked === true,
                  });
                  setErrors({
                    ...errors,
                    guidelines: "",
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="guidelines" className="text-sm">
                Agree to{" "}
                <Link
                  href="#"
                  className="text-purple-600 hover:text-purple-700"
                >
                  Guidelines for Submission
                </Link>
              </label>
              {errors.guidelines && (
                <p className="text-red-500 text-sm mt-1">{errors.guidelines}</p>
              )}
            </div>
          </motion.div>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 text-green-700 p-3 rounded-lg flex items-center gap-2"
            >
              <CheckCircle className="h-5 w-5" />
              <span>Your idea has been submitted successfully!</span>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 text-red-700 p-3 rounded-lg flex items-center gap-2"
            >
              <AlertCircle className="h-5 w-5" />
              <span>
                {errorMessage ||
                  "Failed to submit your idea. Please try again."}
              </span>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full h-12"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </Card>
    </motion.div>
  );
}
