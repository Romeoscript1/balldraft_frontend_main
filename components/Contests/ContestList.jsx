import React from "react";

const ContestList = () => {
  return <section>
    <div className="w-full flex flex-row justify-between p-4">
        <div className="flex-col text-black">
            <p>Begginer Contests</p>
            <div className="w-full h-[1px] mt-2 bg-blue-500"></div>
        </div>
        <div className="flex-col text-black">
            <p>Single game</p>
            <div className="w-full h-[1px] mt-2 bg-blue-500"></div>
        </div>
        <div className="flex-col text-black">
            <p>Biggest prices</p>
            <div className="w-full h-[1px] mt-2 bg-blue-500"></div>
        </div>
    </div>
  </section>;
};

export default ContestList;
