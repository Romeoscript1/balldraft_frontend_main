"use client";
import usePostData from "@/Hooks/usePostData";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAccessToken, getRefreshToken } from "@/constants/constants";
import LoadingTemplate from "@/components/LoadingTemplate";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { deleteAccessToken } from "@/constants/constants";
import Loader from "@/components/Loader";

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
        console.log('from logout sucess', data)
        deleteAccessToken();
        router.push("/Auth/login");
      },
      (error) => {
        console.log('from logout error', error)
        deleteAccessToken();
        router.push("/Auth/login");
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
      <Loader />
      <Toaster />

      {/* <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="flex flex-col">
          <p className="text-xl">Logging you out, please wait...</p>

        </div>
      </div> */}
    </div>
  );
};

export default Page;
