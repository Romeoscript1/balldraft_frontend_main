'use client'
import React from "react";
import { generateRandomOdds, getFormattedDate, getFormattedTime } from "@/constants/constants";

const GameCard = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  time,
  detailUrl,
}) => {
  // const { overUnder, pointSpread } = generateRandomOdds();
  console.log(time)
  return (
    <a
      className="rounded-xl shadow-md inline-block mb-10 py-2 px-5  min-w-[200px] bg-white"
      href={detailUrl}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm text-black">{homeTeam}</span>
        {/* <div className="flex gap-2 items-center">
          <span className="text-sm">{overUnder}</span>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L13 1H1Z"
              fill="#808080"
              stroke="#808080"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div> */}
      </div>

      <p className="my-2 text-sm">vs</p>

      <div className="flex items-center justify-between mb-3 gap-3">
        <span className="text-sm text-black">{awayTeam}</span>
        {/* <div className="flex gap-2 items-center">
          <span className="text-sm">{pointSpread}</span>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L13 1H1Z"
              fill="#808080"
              stroke="#808080"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div> */}
      </div>
      <p className="text-[0.8rem] text-slate-800 whitespace-nowrap">{`${getFormattedDate(new Date(time))} ${getFormattedTime(new Date(time))}`}</p>
    </a>
  );
};

export default GameCard;
