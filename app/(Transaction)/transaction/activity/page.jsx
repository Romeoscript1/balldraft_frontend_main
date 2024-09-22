import ActivityCard from "@/components/transaction/ActivityCard";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Page = () => {
  const activityList = [
    {
      subject: "Funds Deposit Of “$50”",
      date: "2023-11-11 11:11:11",
      type: "deposit",
    },
    {
      subject: "Funds Withdrawal Of “$30”",
      date: "2023-11-12 09:45:00",
      type: "withdraw",
    },
    {
      subject: "Funds Deposit Of “$200”",
      date: "2023-11-14 10:15:00",
      type: "deposit",
    },
    {
      subject: "Funds Withdrawal Of “$150”",
      date: "2023-11-16 18:50:20",
      type: "withdraw",
    },
    {
      subject: "Funds Deposit Of “$500”",
      date: "2023-11-17 13:00:00",
      type: "deposit",
    },
    {
      subject: "Funds Withdrawal Of “$60”",
      date: "2023-11-19 12:30:00",
      type: "withdraw",
    },
    {
      subject: "Funds Deposit Of “$120”",
      date: "2023-11-20 09:05:30",
      type: "deposit",
    },
    {
      subject: "Funds Withdrawal Of “$20”",
      date: "2023-11-22 14:10:05",
      type: "withdraw",
    },
    {
      subject: "Funds Deposit Of “$300”",
      date: "2023-11-23 10:20:15",
      type: "deposit",
    },
    {
      subject: "Funds Withdrawal Of “$25”",
      date: "2023-11-24 17:00:30",
      type: "withdraw",
    },
  ];

  const activityTypeList = [
    "All",
    "Deposit",
    "Withdrawal",
    "Account settings",
    "Game play",
  ];
  return (
    <section className="w-full flex flex-col p-[1rem]">
      <p className="text-black text-[1rem]">
        The Balldraft activity log provides a comprehensive and transparent
        record of your gaming activities, including game plays, ensuring an
        accountable experience on the platform.
      </p>

      <div className="flex flex-row mt-7 gap-5">
        <Popover>
          <PopoverTrigger>
            <div className="flex flex-row items-center gap-2">
              <p className="text-black text-[1.1rem] max-[320px]:text-sm">
                Activity type
              </p>
              <IoIosArrowUp className="fill-black" size={20} />
            </div>
          </PopoverTrigger>
          <PopoverContent className="bg-white w-max">
            <RadioGroup defaultValue="option-one">
              {activityTypeList.map((activityType) => {
                return (
                  <div className="flex items-center space-x-2 flex-row" key={`type-${activityType}`}>
                    <RadioGroupItem value={activityType} id={activityType} />
                    <p className="text-black">{activityType}</p>
                  </div>
                );
              })}
            </RadioGroup>
          </PopoverContent>
        </Popover>

        <div className="flex flex-row items-center gap-2 ">
          <p className="text-black text-[1.1rem] max-[320px]:text-sm">From</p>
          <IoIosArrowUp className="fill-black" size={20} />
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="text-black text-[1.1rem] max-[320px]:text-sm">To</p>
          <IoIosArrowUp className="fill-black" size={20} />
        </div>
      </div>

      <div className="w-full flex flex-col gap-5 mt-5">
        {activityList.map((activity) => {
          return (
            <ActivityCard key={`activity-${activity.subject}`} {...activity} />
          );
        })}
      </div>
    </section>
  );
};

export default Page;
