"use client";
import MainContent from "@/components/Accounts/MainContent";
import Sider from "@/components/Accounts/Sider";
import useAuthentication from "@/Hooks/useAuthentication";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { isAuthenticated } from "@/constants/constants";
import LoadingTemplate from "@/components/LoadingTemplate";

const Page = () => {
//   const router = useRouter();
     const userAuth = isAuthenticated();

  if (!userAuth) {
    router.push("/Auth/login");
  }

  const [loading, setLoading] = useState(true);
  const url = process.env.NEXT_PUBLIC_API_URL;
  const [profile, setProfile] = useState({});

  const apiUrl = `${url}/profile`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
            'headers': {
                'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`
            }
        });
        setProfile(response.data);
        setLoading(false)
      } catch (error) {
        toast.error("Error fetching profile");
      }
    };

    fetchData();
  }, []);

  if(loading){
    return (
        <section className="w-[100%] h-[100vh] z-10 absolute top-0 flex items-center justify-center bg-white">
            <LoadingTemplate/>
        </section>
    )
  }

  return (
    <section>
      <Toaster />
      <div className="flex gap-4 p-[1rem] justify-around bg-white">
        <Sider className={"max-[878px]:hidden"} profile={profile}/>
        <MainContent profile={profile} />
      </div>
    </section>
  );
};

export default Page;
