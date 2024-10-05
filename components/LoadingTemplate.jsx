import React from "react";
import loader from "@/public/images/loader.gif";

const LoadingTemplate = ({size=100, ...props}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-9">
      <img src={loader.src} alt="" className={`w-[${size}px] h-[${size}px] ${props.imgClass}`} />
    </div>
  );
};

export default LoadingTemplate;
