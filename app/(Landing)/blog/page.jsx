"use client";
import React, { useState, useEffect } from "react";
import SportsTabs from "@/components/SportsTabs";
import Trendingsports from "@/components/Trendingsports";
import axios from "axios";
import Link from "next/link";

const Page = () => {
  //eslint-disable-next-line no-unused-vars
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

    const apiUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res.data.articles);

        setArticles(res?.data?.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(articles);
  return (
    <div className="mt-[90px] md:p-[2rem] p-[1rem] bg-white flex-wrap">
      <figure className="flex max-[915px]:flex-col flex-row justify-between h-[60cvh] mb-[2rem] ">
        <aside className="basis-[65%] max-md:h-[500px] relative">
          <Link href={articles[0]?.url ? articles[0]?.url : "#"}>
            <img
              src={articles[0]?.urlToImage}
              alt=""
              className="w-full object-cover rounded-[20px] h-full"
            />
            <figure className="absolute bottom-[5%]  p-[2rem] text-white ">
              <div className="flex items-center gap-4 mb-[1rem] font-bold ">
                <p className="px-[1.6rem] border-[1px] border-white rounded-[40px]">
                  {articles[0]?.source.name}
                </p>
                . 24 min
              </div>
              <h2 className="font-bold md:text-3xl text-sm">
                {articles[0]?.description}
              </h2>
            </figure>
          </Link>
        </aside>

        <aside className="basis-[30%]">
          <SportsTabs articles={articles} />
        </aside>
      </figure>

      <figure className="flex justify-between w-full">
        <aside className="w-full">
          <Trendingsports articles={articles} />
        </aside>
        <aside></aside>
      </figure>
    </div>
  );
};

export default Page;
