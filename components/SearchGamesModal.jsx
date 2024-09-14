import React from "react";
import { useState, useEffect } from "react";
import { FcEmptyFilter } from "react-icons/fc";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SearchGamesModal = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFixtures, setSearchFixtures] = useState([]);
  const fixtures = props.fixtures;

  useEffect(() => {
    const searchDebouncer = setTimeout(() => {
      const searchMatch = fixtures.filter((fixture) =>
        fixture.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchFixtures(searchMatch);
    }, 200);

    return () => {
      clearTimeout(searchDebouncer);
    };
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>{props.children}</DialogTrigger>
        <DialogContent className="bg-white rounded-lg">
          <label className="input input-bordered flex items-center gap-2 bg-white rounded-full mt-4">
            <input
              type="text"
              className="grow rounded-full"
              placeholder="Search for games"
              onChange={searchChangeHandler}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>

          <div className="w-full max-h-[500px] overflow-y-scroll">
            {searchFixtures.length == 0 ? (
              <div className="w-full h-[100px] flex items-center justify-center">
                <div className="flex flex-row gap-2 items-center">
                  <FcEmptyFilter size={25} />
                  <p className="text-sm">Oops, No Matching games.</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-full gap-2">
                {searchFixtures.map((fixture) => {
                  return (
                    <div
                      className="w-full px-4 py-6 bg-slate-50 cursor-pointer rounded-md flex flex-col"
                      key={`la-f-${fixture.fixture_id}`}
                    >
                      <p className="text-denary text-sm">{fixture.title}</p>
                      <p className="text-slate-700 text-[0.8rem] mt-1">
                        <span className="font-semibold text-denary ">
                          Entry:
                        </span>{" "}
                        {`₦${fixture.entry_amount}`}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchGamesModal;
