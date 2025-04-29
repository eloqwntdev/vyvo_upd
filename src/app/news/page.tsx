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
  const response = await fetchNewsArticles();

  const client = Array.isArray(response) ? response : response.results;

  const tags = new Set(["Articles", "Press Releases"]);
  const articlesArray: Array<Record<string, any>> = [];
  const pressReleaseArray: Array<Record<string, any>> = [];

  client.forEach((cli_data) => {
    cli_data.tags.forEach((tag) => {
      if (tags.has(tag)) {
        if (tag === "Articles") {
          articlesArray.push(cli_data);
        } else if (tag === "Press Releases") {
          pressReleaseArray.push(cli_data);
        }
      }
    });
  });

  return (
    <>
      <Articles articles={articlesArray} />
      <PressRelease articles={pressReleaseArray} />
    </>
  );
};

export default News;
