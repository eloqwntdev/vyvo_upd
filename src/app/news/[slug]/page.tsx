import React from "react";
import ArticleDetails from "./components/article-details";
import ArticleContent from "./components/article-content";

const NewsDynamicPage = () => {
  return (
    <div className="bg-black pt-[120px] flex flex-col gap-[60px]">
      <ArticleDetails />
      <ArticleContent />
    </div>
  );
};

export default NewsDynamicPage;
