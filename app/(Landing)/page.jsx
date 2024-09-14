"use client"
import { useEffect } from "react";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";
import Aos from "aos";
import "aos/dist/aos.css";
import Getstarted from "@/components/Getstarted";
import Partners from "@/components/Partners";

export default function Home() {
  useEffect(() => { 
    Aos.init({
      duration: 800,
          once: false,
    });
  }, [])
  return (
    <div className="bg-white">
      <Hero />
      <Promotions />
      <Explore />
      <Getstarted />
      <Partners />
    </div>
  );
}
