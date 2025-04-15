import React from "react";
import Articles from "./components/articles";
import PressRelease from "./components/press-release";
import { createClient } from "@/prismicio";

async function fetchNewsArticles(pageSize = 6, page = 1) {
  try {
    const client = createClient();
    const response = await client.getAllByType("news_post", {
      orderings: {
        field: "document.first_publication_date",
        direction: "desc",
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching news articles:", error);
    return { results: [], total_pages: 0 };
  }
}

const News = async () => {
  const client = await fetchNewsArticles();

  console.log(client);
  return (
    <>
      <Articles articles={client} />
      {/* <PressRelease /> */}
    </>
  );
};

export default News;
