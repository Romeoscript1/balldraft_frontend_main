import React, { useEffect, useRef, useState } from "react";
import cashbackimg from "../../public/images/cashback.svg";
import cashbackbg from "../../public/images/cashbackbg.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import LoadingTemplate from "../LoadingTemplate";

export default function ContextSwiper() {
  const [swipperItems, setSwipperItems] = useState([]);
  const url = process.env.NEXT_PUBLIC_API_URL;
  const apiUrl = `${url}/contest/slider/`;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(apiUrl, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setSwipperItems(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="my-[2rem]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {swipperItems.map((item) => {
          return (
            <SwiperSlide>
              <div className="flex items-center swiperimg h-[400px] relative rounded-[20px] p-[1rem] w-4/5 m-auto">
                <img
                  src={item.image}
                  className="absolute right-0 opacity-[20%] rounded-[20px] h-full w-full z-1"
                  alt=""
                />
                <aside className="basis-[45%] max-sm:basis-[100%] p-[2rem] relative z-100">
                  <h2 className="text-4xl text-white w-[80%] mb-[1rem] max-[900px]:text-3xl">
                    {item.text}
                  </h2>
                  <button className="border-[1px] text-white border-white rounded-full p-[0.5rem]">
                    Deposit Now
                  </button>
                </aside>
                <aside className="basis-[45%] relative z-100 max-sm:hidden">
                  <img src={item.image} alt="" />
                </aside>
              </div>
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>
          <div className="flex items-center swiperimg h-[400px] relative rounded-[20px] p-[1rem] w-4/5 m-auto">
            <img
              src={cashbackbg.src}
              className="absolute right-0 opacity-[20%] rounded-[20px] h-full w-full z-1"
              alt=""
            />
            <aside className="basis-[45%] max-sm:basis-[100%] p-[2rem] relative z-100">
              <h2 className="text-4xl text-white w-[80%] mb-[1rem] max-[900px]:text-3xl">
                Get{" "}
                <span className="text-[#FFD700] text-5xl max-[900px]:text-4xl">
                  5%
                </span>{" "}
                Cashback On Your First Deposit Up to{" "}
                <span className="text-[#FFD700] text-5xl max-[900px]:text-4xl">
                  $30
                </span>
              </h2>
              <button className="border-[1px] text-white border-white rounded-full p-[0.5rem]">
                Deposit Now
              </button>
            </aside>
            <aside className="basis-[45%] relative z-100 max-sm:hidden">
              <img src={cashbackimg.src} alt="" />
            </aside>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div className="flex items-center swiperimg h-[400px] relative rounded-[20px] p-[1rem] w-4/5 m-auto">
            <img
              src={cashbackbg.src}
              className="absolute right-0 opacity-[20%] rounded-[20px] h-full w-full z-1"
              alt=""
            />
            <aside className="basis-[45%] max-sm:basis-[100%] p-[2rem] relative z-100">
              <h2 className="text-4xl text-white w-[80%] mb-[1rem] max-[900px]:text-3xl">
                Get{" "}
                <span className="text-[#FFD700] text-5xl max-[900px]:text-4xl">
                  5%
                </span>{" "}
                Cashback On Your First Deposit Up to{" "}
                <span className="text-[#FFD700] text-5xl max-[900px]:text-4xl">
                  $30
                </span>
              </h2>
              <button className="border-[1px] text-white border-white rounded-full p-[0.5rem]">
                Deposit Now
              </button>
            </aside>
            <aside className="basis-[45%] relative z-100 max-sm:hidden">
              <img src={cashbackimg.src} alt="" />
            </aside>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
