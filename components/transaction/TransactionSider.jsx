import React from "react";

const TransactionSider = ({totalBalance}) => {
  return (
    <div className="w-full sm:w-[40%]">
      <div className="w-full rounded-xl bg-[#F5F5F5] p-4">
        <p className="text-black">Total balance</p>
        <p className="text-black text-2xl font-semibold mt-2">₦ {totalBalance} NGN</p>
      </div>

      <div className="w-full bg-gradient-to-t from-[#012C52F2] to-[#1093FBF2] mt-5 rounded-xl px-4 py-7">
        <h1 className="font-bold text-2xl md:text-3xl text-white">{`Kick Off Your Winning Season!`}</h1>
        <p className="text-white mt-4 text-[0.9rem] leading-[1.5rem]">{`Whether you're a seasoned player or new to fantasy sports, our platform offers intuitive tools to draft your dream team and manage lineups effortlessly. Explore a variety of leagues and contests, from daily challenges to season-long competitions tailored to your preferences and skill level. Stay ahead of the game with comprehensive insights and analytics, ensuring you make strategic decisions for your team.`}</p>
        <button className="w-full border border-white text-white bg-transparent mt-4 rounded-full p-4">
          Get started
        </button>
      </div>
    </div>
  );
};

export default TransactionSider;
