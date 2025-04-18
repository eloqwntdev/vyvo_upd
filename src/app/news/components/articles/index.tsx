"use client";
import HeroNews from "./hero";
import SortDropdown from "@/components/common/controllers/dropdowns/sort-dropdown";
import SlashButton from "@/components/common/controllers/button/slash-button";
import { createClient } from "@/prismicio";
import { ArticleCard } from "./ArticleCard";

const Articles = async ({ articles }: { articles: any }) => {
  console.log(articles);

  return (
    <section className="bg-black flex flex-col items-center justify-center gap-12 md:gap-[60px] lg:gap-[80px] pt-[60px] md:pt-[90px] lg:pt-[120px] relative z-[10]">
      <HeroNews />
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-6 md:gap-[40px] lg:gap-[40px] px-[16px] md:px-[24px] lg:px-[0px]">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white font-nb font-light text-[20px] md:text-[40px] lg:text-[48px] leading-[24px] md:leading-[44px] lg:leading-[52px] tracking-[-1.4px]">
            Articles
          </h2>
          <SortDropdown />
        </div>
        <div className="flex flex-col gap-[30px] md:gap-[40px] lg:gap-[40px] items-center justify-center pb-[40px] md:pb-[60px] lg:pb-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px] lg:gap-[20px]">
            {articles.length > 0 ? (
              articles.map((article: any) => (
                <ArticleCard key={article.id} article={article} />
              ))
            ) : (
              <>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
              </>
            )}
          </div>
          {/* {articlesResponse.total_pages > 1 && (
            <SlashButton
              showIcon={false}
              label="Show More"
              className="gap-[16px] !bg-[#77A9E829] py-[10px] test mx-auto !rounded-[16px] w-full grid place-content-center !max-w-[140px]"
              labelClassName="!tracking-[-0.2px]"
              containerStyles="!w-auto"
            />
          )} */}
        </div>
      </div>
    </section>
  );
};

export default Articles;
