"use client";
import React, { useEffect } from "react";
import heroimg from "@/public/images/heroImg.svg";
import jean from "@/public/images/jean.svg";
import herofootball from "@/public/images/herofootball.webp";
import { useSpring, animated } from "react-spring";
import arrows from "@/public/images/arrows.svg";
import { useRouter } from "next/navigation";

const ArrowAnimation = ({ delay }) => {
  const style = useSpring({
    from: { transform: "translateX(0px)", opacity: 1 },
    to: async (next, cancel) => {
      while (1) {
        await next({ transform: "translateX(10px)", opacity: 0.5 });
        await next({ transform: "translateX(0px)", opacity: 1 });
      }
    },
    config: { duration: 1000 },
    delay,
  });

  return (
    <animated.div style={style}>
      <img src={arrows.src} alt="arrowimage" />
    </animated.div>
  );
};

const Hero = () => {
  const router = useRouter();

  return (
    <div className="max-md:py-[5rem] md:h-[90vh] bg-background-linear relative mt-[80px] md:flex items-center md:pl-[1rem] max-md:flex-col-reverse">
      {/* <img src={jean.src} className='absolute h-full top-0 w-full object-cover left-0' alt="" /> */}

      <div className="basis-[50%] text-white p-[1rem]">
        <h2 className="md:text-3xl font-poppins"> The Ultimate </h2>
        <h1 className="md:text-5xl text-2xl mb-[1.5rem] font-bold font-poppins">
          <span className="text-skyish">Fantasy Sport</span> Experience
        </h1>
        <p className="md:text-[1rem] text-[0.8rem] leading-6 font-poppins">
          Experience the ultimate blend of thrill and fortune at BallDraft!{" "}
        </p>
        <p className="md:text-[1rem] text-sm leading-6 font-poppins">
          Our commitment to innovation and fairness ensures an unmatched
          entertainment journey. Join us now to turn every moment into a winning
          one!
        </p>

        <div className="flex items-center ">
          <button
            className="bg-[#012C51] text-black bg-white px-[2rem] sm:px-[3.5rem]  block py-[0.7rem] my-[2rem] rounded-[30px] p-3 cursor-pointer relative z-100 mr-[1rem] max-sm:text-sm font-poppins"
            onClick={() => router.push("/Auth/login")}
          >
            Get Started
          </button>
          <ArrowAnimation delay={0} />
        </div>
      </div>

      <div className="basis-[50%] h-full max-md:hidden">
        <img
          src={herofootball.src}
          alt=""
          className="relative w-full h-full z-[100px] object-center object-cover"
        />
      </div>
      {/* <div className="absolute bottom-0 right-[2%]">
        <img
          src={herofootball.src}
          alt=""
          className="relative w-full z-[100px]"
        />
      </div> */}
    </div>
  );
};

export default Hero;
