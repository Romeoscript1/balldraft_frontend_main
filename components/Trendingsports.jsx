import React from "react";
import NewsCard from "./NewsCard";

const Trendingsports = ({ articles }) => {
  const sortedArticles = articles?.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  return (
    <div className="w-full">
      <h2 className="font-bold text-black text-2xl md:p-[1rem]">Trending</h2>
      <div className="w-full bg-white fill-grid gap-4 ">
        {sortedArticles?.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Trendingsports;
