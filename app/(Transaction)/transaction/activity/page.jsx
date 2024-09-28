"use client";

import ActivityCard from "@/components/transaction/ActivityCard";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import LoadingTemplate from "@/components/LoadingTemplate";
import { getAccessToken } from "@/constants/constants";

const Page = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const apiUrl = `${url}/profile/notifications/`;
  const [activityList, setActivityList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const accessToken = getAccessToken()
  const [displayList, setDisplayList] = useState([])

  const getNotificationType = (notification) =>{
    if(notification.toLowerCase().includes('withdrawal')){
      return 'withdrawal'
    }
    if(notification.toLowerCase().includes('deposit')){
      return 'deposit'
    }

    return 'other'
  }


  const constructActivityList = (notifications) => {
    const activityList = notifications?.map((notification)=>{
      return {
        subject: notification.action,
        date: notification.time,
        type: getNotificationType(notification.action),
        id: notification.id
      }
    })

    setActivityList(activityList)    
    setDisplayList(activityList)
  }


  useEffect(() => {
    const fetchData = () => {
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          constructActivityList(data)
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData()
  }, []);



  const handleDeleteNotification = (id)=>{
      setDisplayList((notification)=> {
        return notification.filter((notification)=> notification.id != id)
      })
  }

  const activityTypeList = ['All', ...new Set(activityList.map((card) => card.type))];

  
//  const displayActivity = filter.toLowerCase() == 'all'? activityList: activityList.filter((card)=> card.type.toLowerCase() === filter.toLowerCase())


  const onSelectChangedHandler = (value)=>{
    console.log(value)
    setDisplayList(value.toLowerCase() == 'all'? activityList: activityList.filter((card)=> card.type.toLowerCase() === value.toLowerCase()))
  }

  if (loading) {
    return <LoadingTemplate />;
  }

  if (!loading && activityList.length <= 0) {
    return (
      <section className="w-full h-[80vh] flex flex-col p-[1rem] items-center justify-center">
        <p className="text-black text-[1rem] text-center font-poppins">
          No activity found
        </p>
      </section>
    )
  }

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
            <RadioGroup defaultValue="All" onValueChange={onSelectChangedHandler}>
              {activityTypeList.map((activityType) => {
                return (
                  <div
                    className="flex items-center space-x-2 flex-row"
                    key={`type-${activityType}`}
                  >
                    <RadioGroupItem value={activityType} id={activityType}/>
                    <p className="text-black">{activityType}</p>
                  </div>
                );
              })}
            </RadioGroup>
          </PopoverContent>
        </Popover>
{/* 
        <div className="flex flex-row items-center gap-2 ">
          <p className="text-black text-[1.1rem] max-[320px]:text-sm">From</p>
          <IoIosArrowUp className="fill-black" size={20} />
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="text-black text-[1.1rem] max-[320px]:text-sm">To</p>
          <IoIosArrowUp className="fill-black" size={20} />
        </div> */}
      </div>

      <div className="w-full flex flex-col gap-5 mt-5">
        {displayList.map((activity) => {
          return (
            <ActivityCard key={`activity-${activity.subject}${activity.id}`} {...activity} onDelete={handleDeleteNotification}/>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
