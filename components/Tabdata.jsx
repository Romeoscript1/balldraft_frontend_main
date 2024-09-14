import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import players from "@/public/images/players .png"; // Ensure this path is correct

const Tabdata = ({ type }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    const apiUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((res) => {
        const fetchedArticles = res?.data?.articles;
        console.log(fetchedArticles);

        // Conditionally set articles based on the type prop
        if (type === "recent") {
          // Get the last 3 articles for recent
          setArticles(fetchedArticles.slice(-3));
        } else if (type === "top") {
          // Get the first 3 articles for top
          setArticles(fetchedArticles.slice(0, 3));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [type]);

  const truncateTitle = (title) => {
    return title.length > 20 ? title.slice(0, 25) + "..." : title;
  };

  const truncateDescription = (description) => {
    return description.length > 50
      ? description.slice(0, 50) + "..."
      : description;
  };

  return (
    <div>
      {articles.slice(0, 3).map((article, index) => (
        <Link key={index} href={article?.url ? article?.url : "#"}>
          <figure className="h-[150px] bg-[#FFFFFF] rounded-[20px] shadow-md p-[0.6rem] hover:text-white hover:bg-[#012C51] cursor-pointer flex gap-4 items-center my-[1rem]">
            <img
              src={article.urlToImage || players}
              alt=""
              className="w-[120px] h-[110px] rounded-[20px] object-cover"
            />
            <aside>
              <p className="text-gray-500 text-[0.7rem]">
                {truncateTitle(article.title)} . <span>24 min</span>
              </p>
              <p className="text-sm">
                {truncateDescription(article.description)}
              </p>
            </aside>
          </figure>
        </Link>
      ))}
    </div>
  );
};

export default Tabdata;
