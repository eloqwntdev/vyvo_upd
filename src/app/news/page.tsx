import React from "react";
import Articles from "./components/articles";
import PressRelease from "./components/press-release";
import { createClient } from "@/prismicio";

type NewsPost = {
  tags: string[];
  [key: string]: any;
};

type PrismicResponse = NewsPost[] | { results: NewsPost[] };

async function fetchNewsArticles(
  pageSize = 6,
  page = 1
): Promise<PrismicResponse> {
  const client = createClient();
  try {
    const response = await client.getAllByType("news_post", {
      orderings: {
        field: "document.first_publication_date",
        direction: "desc",
      },
    });
    return response;
  } catch (error) {
    // Rethrow error to be handled in the component
    throw error;
  }
}

const News = async () => {
  let response: PrismicResponse | undefined;
  let errorMessage = null;

  try {
    response = await fetchNewsArticles();
  } catch (error: any) {
    errorMessage = error?.message || String(error);
  }

  if (errorMessage) {
    return (
      <div style={{ color: "red", padding: "2rem" }}>
        <h2>Error fetching news articles</h2>
        <pre>{errorMessage}</pre>
        <p>
          This error may indicate a problem with Prismic configuration,
          environment variables, or network access on Vercel.
        </p>
      </div>
    );
  }

  if (!response) {
    // Should not happen, but for type safety
    return null;
  }

  const client: NewsPost[] = Array.isArray(response)
    ? response
    : (response as { results: NewsPost[] }).results;

  const tags = new Set(["Articles", "Press Releases"]);
  const articlesArray: NewsPost[] = [];
  const pressReleaseArray: NewsPost[] = [];

  client.forEach((cli_data: NewsPost) => {
    cli_data.tags.forEach((tag: string) => {
      if (tags.has(tag)) {
        if (tag === "Articles") {
          articlesArray.push(cli_data);
        }
        if (tag === "Press Releases") {
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
