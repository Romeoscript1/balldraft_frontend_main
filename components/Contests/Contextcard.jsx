"use client";

import React, { useCallback, useMemo, useState } from "react";
import nbaball from "../../public/images/nbaball.svg";
import eplball from "../../public/images/eplball.svg";
import { usePathname, useRouter } from "next/navigation";
import pokemon from "pokemon";
import Image from "next/image";
import { isAuthenticated } from "@/constants/constants";

const typeStyles = {
  single: { image: nbaball.src, borderColor: "#FF6D00", bgColor: "#012C51" }, // Example values
  multiple: { image: eplball.src, borderColor: "#007BFF", bgColor: "#F0D12F" },
};

const formatTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  let hours = date.getUTCHours(); // Get the hours in UTC
  const minutes = date.getUTCMinutes(); // Get the minutes in UTC
  const ampm = hours >= 12 ? "PM" : "AM"; // Determine AM or PM

  hours = hours % 12; // Convert to 12-hour format
  hours = hours ? hours : 12; // The hour '0' should be '12'

  const strMinutes = minutes < 10 ? "0" + minutes : minutes; // Pad minutes with leading zero if needed
  const strTime = hours + ":" + strMinutes + " " + ampm;

  return strTime;
};

const generateRandomName = (dateTimeString) => {
  // Generate a random time in the format "2PM"
  const hours = Math.floor(Math.random() * 12) + 1; // Random hour between 1 and 12
  const ampm = Math.random() > 0.5 ? "AM" : "PM"; // Randomly choose AM or PM
  const time = `${hours}${ampm}`;

  const name = pokemon.random();
  return `${time} ${name}`;
};

const Contextcard = ({ type, contest }) => {
  const { borderColor } = typeStyles[type] || typeStyles["single"];
  const pathname = usePathname().includes("game");
  const router = useRouter();
  const [contestName, setcontestName] = useState(
    generateRandomName(contest?.date)
  );

  const authenticated = isAuthenticated();

  const title = contest.title.split("|");

  const gametype = type == "multiple" ? "Multiple game" : "Single game";
  const totalToWin = `₦${contest.total_to_win.toLocaleString()}`;
  const entryprice = `₦${contest.entry_amount}`;
  const contestTime = formatTime(contest.date);
  const entryStat = `${contest.current_entry} of ${contest.max_entry} Entries`;
  const leagueId = contest?.league_id;
  const contestId = contest.id;

  return (
    <div className="p-[1rem] font-poppins">
      <div
        className={`lg:flex hidden font-poppins items-start justify-between text-gray-500 p-[1rem] bg-[#F9F9F9] shadow-md rounded-[10px] border-b-[5px]`}
        style={{ borderColor }}
      >
        {!pathname && (
          <aside className="flex items-center gap-4">
            <img src={contest.home_logo} alt="" width={70} />
            <div>
              <h2 className="font-medium text-xl text-black">{title[0]}</h2>{" "}
              {/* Use the 'title' prop dynamically */}
              <p>{gametype}</p>
            </div>
          </aside>
        )}

        <aside>
          <h2 className="font-medium text-xl text-black">{title[1]}</h2>{" "}
          {/* Use the 'title' prop dynamically */}
          <p>{contestTime}</p>
        </aside>
        <aside className="font-medium text-xl text-black">
          <p>{entryStat}</p>
        </aside>

        {!pathname && (
          <aside>
            <h2 className="font-medium text-xl text-black">{totalToWin}</h2>
            <p>Guranteed In Prize</p>
          </aside>
        )}
        <aside>
          <a
            className="bg-[#012C51] px-[2rem] py-[0.6rem] rounded-full text-white"
            onClick={() =>
              router.push(
                authenticated
                  ? `/Dashboard/contest/${contestId}/${leagueId}`
                  : "/Auth/login"
              )
            }
          >
            {`Enter contest for ${entryprice}`}
          </a>
        </aside>
      </div>

      {/* LG AND BELOW */}
      <div
        className="flex font-poppins items-start max-s-1:flex-wrap justify-between lg:hidden text-gray-500 p-[1rem] bg-[#F9F9F9] shadow-md rounded-[10px] border-b-[5px]"
        style={{ borderColor }}
      >
        <aside className="flex font-poppins flex-col items-start gap-2 justify-start">
          <div>
            <h2 className="font-medium max-s-1:text-sm text-[0.7rem] sm:text-sm text-black">{`${title[0]} Beginner Double Up (${totalToWin})`}</h2>
          </div>
          <div className="flex items-center">
            <img src={contest.home_logo} alt="" className="w-14 sm:w-18" />
            <span>
              <h2 className="font-medium max-s-1:text-2xl text-lg sm:text-xl md:text-2xl text-black">
                {contest.title}
              </h2>{" "}
              {/* Use the 'title' prop dynamically */}
              <p className="text-sm sm:text-lg">{gametype}</p>
            </span>
          </div>
          <div className="max-s-1:mt-2">
            <h2 className="font-medium max-s-1:text-lg text-sm md:text-lg text-black">
              {entryStat}
            </h2>
          </div>
        </aside>
        <aside
          className="flex flex-col s-1:items-end justify-between gap-4 s-1:gap-2"
          style={{ borderColor }}
        >
          <aside className="flex items-center gap-2">
            <h2 className="font-medium max-s-1:text-lg text-sm md:text-lg text-[#012C51]">
              {totalToWin}
            </h2>
            <span>Guaranteed In Prize</span>
          </aside>
          <button
            className="bg-[#012C51] p-[1rem] md:p-[1.4rem] rounded-full text-white"
            onClick={() =>
              router.push(
                authenticated
                  ? `/Dashboard/contest/${contestId}/${leagueId}`
                  : "/Auth/login"
              )
            }
          >
            Enter contest for {entryprice}
          </button>
          <span>{contestTime}</span>
        </aside>
      </div>
    </div>
  );
};

export default Contextcard;
