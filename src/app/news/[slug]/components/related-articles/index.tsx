"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { NewsPostDocument } from "@/../prismicio-types";

interface RelatedArticlesProps {
  articles: NewsPostDocument[];
}

const ArticleCard = ({ article }: { article: NewsPostDocument }) => {
  // Handle possible undefined firstSection safely
  const firstSection = article.data.sections?.[0];

  const excerpt = (() => {
    try {
      if (
        !firstSection?.descriptions ||
        firstSection.descriptions.length === 0
      ) {
        return "Read our latest news";
      }

      // Find first paragraph or use default
      const paragraphs = firstSection.descriptions.filter(
        (block) => block.type === "paragraph"
      );

      if (paragraphs.length > 0 && "text" in paragraphs[0]) {
        return paragraphs[0].text.slice(0, 120) + "...";
      }

      return "Read our latest news";
    } catch (error) {
      console.error("Error extracting excerpt:", error);
      return "Read our latest news";
    }
  })();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-4 md:gap-5 max-w-[300px] lg:max-w-[330px] relative"
    >
      <div className="w-full h-[160px] lg:h-[180px] overflow-hidden rounded-lg">
        {article.data.image?.url ? (
          <img
            loading="lazy"
            src={article.data.image.url}
            alt={article.data.image.alt || article.data.title || ""}
            width={330}
            height={180}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">No image</p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Link
          href={`/news/${article.uid}`}
          className="text-white hover:text-[#3973E5] transition-colors duration-300 font-nb font-light text-xl md:text-2xl leading-tight tracking-[-0.6px] md:tracking-[-0.8px]"
        >
          {article.data.title || "Untitled Article"}
        </Link>
        <p className="font-nb text-sm md:text-[15px] font-light leading-snug tracking-[-0.3px] md:tracking-[-0.4px] text-white/80">
          {excerpt}
        </p>
      </div>
      <div className="absolute w-full h-full z-10 invisible">
        <Link
          href={`/news/${article.uid}`}
          className="absolute w-full h-full"
        />
      </div>
    </motion.div>
  );
};

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-10 md:py-14 lg:py-20 bg-black relative">
      <div className="lg:container px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white font-nb font-light text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-10 tracking-[-0.8px] md:tracking-[-1.2px]"
        >
          Related articles
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.slice(0, 3).map((article, index) => (
            <ArticleCard key={`related-article-${index}`} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
