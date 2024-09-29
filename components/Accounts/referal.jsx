"use client";
import React, { useState } from "react";
import logo from "@/public/images/logo.png";
import Icon from "@/Reusable/Icons/Icons";
import toast from "react-hot-toast";
import { getAccessToken } from "@/constants/constants";
const Referal = (props) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const referralLink = `${url}/Auth/join?ref=${props.profile.username}`;

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(referralLink)
      .then(() => {
        toast.success("Rererral link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <div className="m-[1rem] flex items-center gap-4 w-full">
      <img src={logo.src} className="w-12 sm:w-40" alt="Logo" />
      <div className="border-[3px] border-[#F9F9F9] rounded-[10px] relative input bg-white bordered-input w-full flex items-center p-[0.5rem]">
        <input
          type="text"
          value={referralLink}
          className="text-black bg-white border-none w-full outline-none focus-none"
          readOnly
        />
        <div
          className="bg-[#012C51] flex items-center gap-2 p-[0.5rem] rounded-full absolute top-0 right-0 cursor-pointer text-white"
          onClick={copyToClipboard}
        >
          <Icon type="copylink" />
          <p className="max-[600px]:hidden">Copy referral link</p>
        </div>
      </div>
    </div>
  );
};

export default Referal;
