import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import bgimage from "../public/images/joinbg.svg";
import ellips from "../public/images/Ellipse 12.svg";
import ellipse from "../public/images/Ellipse 11.svg";
import authbg from "../public/images/authbg.svg";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen md:flex">
      <aside className="relative basis-4/5 max-md:min-h-[100vh]">
        <div className="relative flex items-center justify-center    bg-gradient-linear ">
          <Image
            src={bgimage}
            alt="logo"
            className=" absolute max-md:top-0 w-full  "
          />
          <div className="absolute items-center justify-center flex top-5 max-md:w-2/4 w-1/4">
            <Image
              src={logo}
              alt="logo"
              layout="responsive"
              width={400}
              height={500}
            />
          </div>
        </div>
        <div className="md:w-3/5 w-4/5 mt-[160px] m-auto relative z-[30]">
          {children}
        </div>

        <img src={ellips.src} alt="" className="absolute right-0 top-[10%]" />
        <img src={ellipse.src} alt="" className="absolute left-0 bottom-0" />
      </aside>

      <aside className="basis-2/5 w-full relative max-md:hidden">
        <Image
          src={authbg}
          alt="logo"
          className="w-full h-full object-cover absolute "
        />
      </aside>
    </div>
  );
};

export default AuthLayout;
