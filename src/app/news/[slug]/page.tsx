import React from "react";
import ArticleDetails from "./components/article-details";
import ArticleContent from "./components/article-content";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { NewsPostDocument } from "@/../prismicio-types";

type Params = {
  params: {
    slug: string;
  };
};

const NewsDynamicPage = async ({ params }: Params) => {
  const client = createClient();
  const article = await client
    .getByUID<NewsPostDocument>("news_post", params.slug)
    .catch(() => null);
  if (!article) {
    notFound();
  }
  return (
    <div className="bg-black min-h-screen pt-16 sm:pt-20 md:pt-[120px] pb-10 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-8 sm:gap-10 md:gap-[60px]">
        <ArticleDetails article={article} />
        <ArticleContent articles={article.data.sections} />
      </div>
    </div>
  );
};

export default NewsDynamicPage;
