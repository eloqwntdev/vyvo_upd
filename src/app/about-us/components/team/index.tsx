"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: boolean;
}

const foundingTeam: TeamMember[] = [
  {
    name: "Fabio Galdi",
    role: "CEO & Co-Founder",
    image: "/about-us-img/avatars/fabio.webp",
    linkedin: true,
  },
  {
    name: "Ivan Crnkovic",
    role: "CTO & Co-Founder",
    image: "/about-us-img/avatars/ivan.webp",
    linkedin: true,
  },
  {
    name: "Mariana Krym",
    role: "COO & Co-Founder",
    image: "/about-us-img/avatars/mariana.webp",
    linkedin: true,
  },
  {
    name: "Hakan Kozakli",
    role: "Chief Software Architect & Co-Founder",
    image: "/about-us-img/avatars/hakan.webp",
    linkedin: true,
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Alfonso Cioffi",
    role: "SVP of Wearable Tech",
    image: "/about-us-img/avatars/alfonso.webp",
    linkedin: true,
  },
  {
    name: "Dorijan Jelinčić",
    role: "Head of Blockchain Development",
    image: "/about-us-img/avatars/dorijan.webp",
    linkedin: true,
  },
  {
    name: "Antonio Senatore",
    role: "Advisor / CTO VeChain",
    image: "/about-us-img/avatars/antonio.webp",
    linkedin: true,
  },
  {
    name: "Alan Kelly",
    role: "Data Scientist",
    image: "/about-us-img/avatars/alan.webp",
    linkedin: true,
  },
  {
    name: "Jorge Viera",
    role: "Head Graphic Designer",
    image: "/about-us-img/avatars/jorge.webp",
    linkedin: true,
  },
  {
    name: "Lijeesh SD",
    role: "Head of Systems & Network Security",
    image: "/about-us-img/avatars/lijeesh.webp",
    linkedin: true,
  },
];

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-8 md:py-20 flex flex-col gap-8 md:gap-20 items-center justify-center bg-black px-4 md:px-6">
      <div className="flex flex-col gap-6 md:gap-8 w-full max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-white font-nb text-center font-light text-[24px] md:text-[56px] leading-[28px] md:leading-[60px] tracking-[-1px] md:tracking-[-1.7px]"
        >
          Founding Team
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-[860px] w-full grid grid-cols-2 gap-4 md:gap-5 mx-auto"
        >
          {foundingTeam.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedin={member.linkedin}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      <div className="flex flex-col gap-6 md:gap-10 w-full pt-8 sm:pt-0 max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-white font-nb text-center font-light text-[24px] md:text-[56px] leading-[28px] md:leading-[60px] tracking-[-1px] md:tracking-[-1.7px]"
        >
          Team
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mx-auto"
        >
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedin={member.linkedin}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  linkedin: boolean;
  index: number;
}

const TeamCard = ({ name, role, image, linkedin, index }: TeamCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="p-1.5 pb-[14px] md:p-5 w-full h-auto md:h-[489px] rounded-[8px] md:rounded-[24px] slider-card-bg before:!rounded-[8px] md:before:!rounded-[24px] gradient-border-mask-slider !flex flex-col gap-2 md:gap-4 relative"
    >
      <div className="relative flex flex-col items-center justify-center gap-2 md:gap-4">
        <motion.div
          variants={imageVariants}
          className="h-[124px] sm:h-[200px] md:h-[381px] w-full rounded-[8px] md:rounded-2xl overflow-hidden"
        >
          <Image
            src={image}
            width={381}
            height={381}
            alt={`${name} - ${role}`}
            className="h-full w-full object-cover rounded-xl md:rounded-2xl"
          />
        </motion.div>
        <div className="flex flex-col gap-1 md:gap-2 w-full">
          <div className="flex items-center w-full justify-between">
            <span className="text-white font-nb text-[12px] sm:text-[18px] md:text-[24px] leading-[16px] md:leading-[28px] tracking-[-0.3px] md:tracking-[-0.7px]">
              {name}
            </span>
            {linkedin && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="size-4 sm:size-5 md:size-8 rounded-[4px] md:rounded-[8px] flex items-center justify-center p-0.5 md:p-1 bg-white cursor-pointer"
              >
                <img
                  src="/icons/social/linkedin.svg"
                  className="size-4 sm:size-5 md:size-7"
                  alt="LinkedIn"
                />
              </motion.div>
            )}
          </div>
          <span className="text-[#FFFFFF99] sm:text-white font-nb font-light text-[8px] sm:text-[14px] md:text-[16px] leading-[10px] md:leading-[20px] tracking-[-0.2px] md:tracking-[-0.5px]">
            {role}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
