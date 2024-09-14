"use client";
import usePostData from "@/Hooks/usePostData";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAccessToken, getRefreshToken } from "@/constants/constants";
import LoadingTemplate from "@/components/LoadingTemplate";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Page = () => {
  const { loading, postData } = usePostData();
  const url = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  useEffect(() => {
    postData(
      `${url}/auth/logout/`,
      {
        refresh_token: getRefreshToken(),
        access_token: getAccessToken(),
      },
      (data) => {
        router.push("/Auth/login/");
      },
      (error) => {
        // router.back();
        console.log(error);
        toast.error(error);
      }
    );
  }, []);

  if (loading) {
    return (
      <section className="w-[100%] h-[100vh] z-10 absolute top-0 flex items-center justify-center bg-white">
        <Toaster />
        <LoadingTemplate />
      </section>
    );
  }

  return (
    <div>
      <Toaster />
      <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="flex flex-col">
          <p className="text-xl">Fatal: An error occured..</p>
          <a
            href="/"
            className="bg-denary p-3 rounded-full text-center text-white mt-5"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
