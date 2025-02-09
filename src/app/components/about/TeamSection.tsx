"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Michael F. Stanton",
    role: "Founder, CEO",
    image: "/images/team/team1.png",
  },
  {
    name: "Michael D. Jackson",
    role: "Content Writer",
    image: "/images/team/team2.png",
  },
  {
    name: "Cindy T. Paddock",
    role: "Head of Design",
    image: "/images/team/team3.png",
  },
  {
    name: "James R. Wilson",
    role: "Head of Engineering",
    image: "/images/team/team4.png",
  },
];

export function TeamSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 leading-[1.2]"
        >
          We Have Well
          <br />
          Experience Team
          <br />
          Member
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square mb-6 overflow-hidden"
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
