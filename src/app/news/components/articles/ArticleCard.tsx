"use client";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { NewsPostDocument } from "../../../../../prismicio-types";

interface ArticleCardProps {
  article?: NewsPostDocument;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  // Fallback data for when no article is provided (e.g., loading state)
  const defaultTitle =
    "The Future is Now: How Vyvo is Pioneering the SocialFi Revolution";
  const defaultDate = "May 30, 2025";
  const defaultExcerpt =
    'In an era where digital innovation is relentlessly advancing, the integration of social networking with financial empowerment — generally termed "SocialFi"';
  const defaultImage = "/wearables-img/slider/card1.webp";

  // Extract data from Prismic document if available
  const title = article?.data.title || defaultTitle;
  const date = article?.data.date
    ? format(new Date(article.data.date), "MMMM d, yyyy")
    : defaultDate;

  // Get first paragraph of the first section as excerpt
  let excerpt = defaultExcerpt;
  try {
    if (article?.data.sections && article.data.sections.length > 0) {
      const firstSection = article.data.sections[0];
      if (
        firstSection &&
        firstSection.descriptions &&
        firstSection.descriptions.length > 0
      ) {
        // Try to find a paragraph block in the rich text
        const firstParagraph = firstSection.descriptions.find(
          (block) => block.type === "paragraph"
        );
        if (
          firstParagraph &&
          "text" in firstParagraph &&
          typeof firstParagraph.text === "string"
        ) {
          excerpt = firstParagraph.text.substring(0, 120) + "...";
        }
      }
    }
  } catch (error) {
    console.error("Error extracting excerpt:", error);
  }

  // Get image URL or use default
  const imageUrl = article?.data.image?.url || defaultImage;
  const imageAlt = article?.data.image?.alt || String(title);

  // Get slug for the article detail page
  const slug = article?.uid || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      className="p-[6px] md:p-[20px] w-full rounded-[12px] md:rounded-[24px] slider-card-bg before:!rounded-[12px] md:before:!rounded-[24px] gradient-border-mask-slider !flex flex-col gap-[8px] md:gap-[16px] relative"
    >
      <div className="relative flex flex-col items-center justify-center gap-[8px] md:gap-[16px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 0.2,
          }}
          className="h-[148px] md:h-[180px] lg:h-[210px] w-full rounded-[8px] md:rounded-[24px] overflow-hidden"
        >
          <Image
            src={imageUrl}
            width={762}
            height={420}
            alt={imageAlt}
            className="h-full w-full object-cover rounded-[12px] md:rounded-[16px]"
          />
        </motion.div>
        <div className="flex flex-col gap-[4px] md:gap-[8px] w-full">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.4,
            }}
            className="pl-[14px] border-l-2 border-[#77A9E8]"
          >
            <span className="text-white font-nb text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] tracking-[-0.6px]">
              {title}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.5,
            }}
            className="pl-[14px] mt-[8px]"
          >
            <span className="text-[#FFFFFFCC] font-nb font-light text-[12px] md:text-[13px] lg:text-[14px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.4px]">
              {date}
            </span>
            <p className="text-white break-words font-nb font-light text-[12px] md:text-[15px] lg:text-[16px] leading-[18px] md:leading-[19px] lg:leading-[20px] tracking-[-0.5px] mt-[6px] pb-[12px]">
              {excerpt}
            </p>
            <Link
              href={`/news/${slug}`}
              className="text-white font-nb text-[12px] md:text-[15px] lg:text-[16px] leading-[18px] md:leading-[19px] lg:leading-[20px] tracking-[-0.5px] underline"
            >
              Read more
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
