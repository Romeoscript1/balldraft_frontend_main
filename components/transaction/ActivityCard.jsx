import Icon from "@/Reusable/Icons/Icons";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RxDownload } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";



const ActivityCard = (props) => {
  const iconType = props.type == "deposit" ? "topup" : "withdraw";
  console.log("hello");
  console.log(iconType);
  console.log(iconType);
  return (
    <div className="w-full flex flex-row justify-between">
      <div className="flex flex-row gap-2 items-center">
        <div
          className={`${
            iconType == "topup" ? "bg-[#0163E0]" : "bg-[#FF6D00]"
          } rounded-full w-[50px] h-[50px] flex items-center justify-center max-[324px]:hidden`}
        >
          <Icon type={iconType} />
        </div>

        <div className="flex flex-col">
          <p className="text-black font-medium">{props.subject}</p>
          <p className="text-sm">8:30pm | Today</p>
        </div>
      </div>

      <Popover>
        <PopoverTrigger>
          <div className="max-[330px]:w-[30px] max-[330px]:h-[30px] w-[40px] h-[40px] bg-[#F2F2F2] rounded-full flex items-center justify-center cursor-pointer">
            <HiOutlineDotsVertical />
          </div>
        </PopoverTrigger>

        <PopoverContent className="bg-white rounded-md w-max">
          <div className="w-full flex flex-col gap-3">
            <div className="flex flex-row cursor-pointer items-center gap-2">
                <RxDownload className="fill-black" color="#000000"/>
                <p className="text-black">Archive</p>
            </div>

            <div className="flex flex-row cursor-pointer items-center gap-2">
                <RiDeleteBin6Line className="fill-[#FF0000]" color="#FF0000"/>
                <p className="text-black">Delete activity</p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ActivityCard;
