"use client";
import { useEffect } from "react";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
// import Promotions from "@/components/Promotions";
import Aos from "aos";
import "aos/dist/aos.css";
import Getstarted from "@/components/Getstarted";
import Partners from "@/components/Partners";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
{/* 
      <Head>
        <title>Balldraft - The Most Trusted Fantasy Sports Platform</title>
        <meta name="description" content="This is a custom description for the Page component" />
      </Head> */}
      <div className="bg-white">
        <Hero />
        {/* <Promotions /> */}
        <Explore />
        <Getstarted />
        <Partners />
      </div>
    </>
  );
}
