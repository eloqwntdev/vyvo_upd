"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { NewsPostDocument } from "@/../prismicio-types";
import { format } from "date-fns";

interface ArticleDetailsProps {
  article: NewsPostDocument;
}

const ArticleDetails = ({ article }: ArticleDetailsProps) => {
  const { title, date, image } = article.data;
  const formattedDate = date ? format(new Date(date), "MMMM d, yyyy") : "";

  // Default image placeholder in case the image is not available
  const imageUrl = image?.url || "/wearables-img/slider/card1.webp";
  const imageAlt = image?.alt || String(title || "Article featured image");
  console.log(title);
  return (
    <section className="w-full bg-black">
      <motion.div
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="w-full flex flex-col gap-5 sm:gap-6 md:gap-8"
      >
        <div className="flex flex-col items-start gap-3 sm:gap-4 md:gap-6">
          <motion.h1
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.2,
            }}
            className="text-white font-nb font-light 
            text-2xl sm:text-3xl md:text-4xl lg:text-[48px]
            leading-tight sm:leading-tight md:leading-[44px] lg:leading-[52px] 
            tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.4px]"
          >
            {title || "Untitled Article"}
          </motion.h1>
          <motion.div
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.4,
            }}
            className="flex items-center flex-wrap gap-2 sm:gap-3 md:gap-4"
          >
            <span
              className="text-white/60 font-nb font-light 
              text-xs sm:text-sm md:text-base lg:text-xl
              leading-tight md:leading-[22px] lg:leading-[24px] 
              tracking-[-0.3px] md:tracking-[-0.5px] lg:tracking-[-0.6px]"
            >
              {formattedDate}
            </span>
            <div className="size-1 rounded-full bg-gradient-to-t from-[#2A5FDD] to-[#77A9E8]"></div>
            <span
              className="text-white/60 font-nb font-light 
              text-xs sm:text-sm md:text-base lg:text-xl
              leading-tight md:leading-[22px] lg:leading-[24px] 
              tracking-[-0.3px] md:tracking-[-0.5px] lg:tracking-[-0.6px]"
            >
              By {article.first_publication_date ? "Vyvo" : "admin"}
            </span>
          </motion.div>
        </div>

        <motion.div
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 0.6,
          }}
          className="p-1 sm:p-2 md:p-3 lg:p-5 w-full 
          rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl 
          news-article-image !flex flex-col 
          gap-1 sm:gap-2 md:gap-3 lg:gap-4 relative overflow-hidden"
        >
          <div
            className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[616px] w-full 
            rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden"
          >
            <Image
              src={imageUrl}
              width={1280}
              height={616}
              alt={imageAlt}
              priority
              className="h-full w-full object-cover 
                rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ArticleDetails;
