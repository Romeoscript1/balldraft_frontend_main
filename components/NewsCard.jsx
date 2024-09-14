import React from "react";
import Link from "next/link";

const NewsCard = ({ article }) => {
  const truncateTitle = (title) => {
    return title.length > 20 ? title.slice(0, 25) + "..." : title;
  };

  const truncateDescription = (description) => {
    return description.length > 80
      ? description.slice(0, 80) + "..."
      : description;
  };

  return (
    <div className="md:w-[250px] md:m-[1rem] my-[1rem] m-[0.2rem] w-full">
      <img
        src={article?.urlToImage}
        alt={article.title}
        className="md:h-[180px] h-[150px] rounded-[10px] object-cover w-full"
      />
      <p className="text-gray-500 md:text-sm text-[13px] my-[0.4rem]">
        {truncateTitle(article?.title)} . <span>24 min</span>
      </p>
      <Link href={article?.url ? article?.url : "#"}>
        <p className="text-black max-md:text-sm">
          {truncateDescription(article?.description)}
        </p>
      </Link>
    </div>
  );
};

export default NewsCard;
