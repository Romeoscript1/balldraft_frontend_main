import React from "react";
import { FcEmptyFilter } from "react-icons/fc";

const SeachFixturesPopover = ({ searchFixtures }) => {
  if (searchFixtures.length == 0) {
    return (
      <div className="w-full h-[100px] flex items-center justify-center">
        <div className="flex flex-row gap-2 items-center">
          <FcEmptyFilter size={25} />
          <p className="text-sm">Oops, No Matching games.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full gap-2">
      {searchFixtures.map((fixture) => {
        return (
          <div
            className="w-full p-2 bg-slate-50 cursor-pointer rounded-md flex flex-col"
            key={`la-f-${fixture.fixture_id}`}
          >
            <p className="text-denary text-sm">{fixture.title}</p>
            <p className="text-slate-700 text-[0.8rem] mt-1">
              <span className="font-semibold text-denary ">Entry:</span>{" "}
              {`₦${fixture.entry_amount}`}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SeachFixturesPopover;
