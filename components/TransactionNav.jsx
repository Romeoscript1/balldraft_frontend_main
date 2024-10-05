"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import logo from "@/public/images/logo.png";
import { useRouter, usePathname } from "next/navigation";
import { getFormattedDate, getFormattedTime } from "@/constants/constants";

const TransactionNav = () => {
  const router = useRouter();
  const pathName = usePathname();

  const [displayTitle, setDisplayTitle] = useState("");
  const navigateBack = () => {
    router.back();
  };

  useEffect(() => {
    if (pathName.includes("activity")) {
      setDisplayTitle("Notification");
    } else if (pathName.includes("rewards")) {
      setDisplayTitle("Rewards");
    } else if (pathName.includes("withdraw")) {
      setDisplayTitle("Withdraw");
    } 
    else if (pathName.includes('deposit')){
      setDisplayTitle("Deposit")
    }
    else {
      setDisplayTitle("Transaction");
    }
  }, []);
  return (
    <div className="flex flex-row justify-between items-center px-[1rem]">
      <div className="flex flex-row py-[1rem] items-center gap-2">
        <IoMdArrowBack
          size={30}
          className="fill-black cursor-pointer"
          onClick={navigateBack}
        />
        <p className="font-medium text-[0.9rem] sm:text-xl text-black">{displayTitle}</p>
      </div>

      <a href="/">
        <img src={logo.src} className="lg:w-[150px] w-[80px]" alt="" />
      </a>

      <div>
        <a href="/Dashboard" className="px-4 py-3 text-sm font-poppins rounded-full bg-denary text-white">Play now</a>
      </div>
    </div>
  );
};

export default TransactionNav;
