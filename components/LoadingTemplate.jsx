import React from "react";
import loader from "@/public/images/loader.gif";

const LoadingTemplate = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-9">
      <img src={loader.src} alt="" className="w-[100px] h-[100px]" />
    </div>
  );
};

export default LoadingTemplate;
