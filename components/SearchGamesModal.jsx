import React from "react";
import { useState, useEffect } from "react";
import { FcEmptyFilter } from "react-icons/fc";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CiSearch } from "react-icons/ci";
import LoadingTemplate from "./LoadingTemplate";

const SearchGamesModal = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFixtures, setSearchFixtures] = useState([]);
  const [searchCount, setSearchCount] = useState(0);

  //TODO: utilizet this to inticate loading
  const [fixturesLoading, setFixturesLoading] = useState(false);

  const microUrl = process.env.NEXT_PUBLIC_MICROSERVICE_URL;


  const contructSetSearchFixtures = (data) => {
    setSearchFixtures(data?.fixtures || []);
    // setSearchCount(data?.fixtures?.length )
    console.log("constructing", data);
  };

  const preformSearch = (keyword) => {
    setFixturesLoading(true)
    fetch(`${microUrl}search-fixtures?keyword=${keyword}&limit=100`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        contructSetSearchFixtures(data);
        // setSearchCount(data?.total_fixtures || 0);
      })
      .catch((error) => {
        setSearchFixtures([])
      })
      .finally(() => {
        setFixturesLoading(false);
      });
  };

  // useEffect(() => {
  //   // setFixturesLoading(true);
  //   const searchDebouncer = setTimeout(() => {
  //     fetch(
  //       `${microUrl}search-fixtures?keyword=${searchTerm}&limit=1000000000`,
  //       {
  //         method: "GET",
  //       }
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         contructSetSearchFixtures(data);
  //         // setSearchCount(data?.total_fixtures || 0);
  //       })
  //       .catch((error) => {
  //         // setSearchFixtures([])
  //       })
  //       .finally(() => {
  //         // setFixturesLoading(false);
  //       });
  //   }, 1000);

  //   return () => {
  //     clearTimeout(searchDebouncer);
  //   };
  // }, []);

  const searchChangeHandler = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const searchSubmitHandler = (event) =>{
    event.preventDefault()

    const formData = new FormData(event.target)
    const searchTerm = formData.get('searchTerm')
    preformSearch(searchTerm)
  }

  return (
    <div className={`${props.className}`}>
      <Dialog>
        <DialogTrigger>{props.children}</DialogTrigger>
        <DialogContent className="bg-white rounded-lg flex flex-col ">
          <form className="mt-4 relative" onSubmit={searchSubmitHandler}>
            <input
              type="text"
              className="w-full px-5 py-3 rounded-full border bg-white outline-none"
              placeholder="Search for games"
              name="searchTerm"
            />

            <button type="submit" className="px-4 py-3 bg-denary text-white rounded-full absolute right-0 text-sm mt-[2px] disabled:opacity-20 disabled:cursor-not-allowed" disabled={fixturesLoading}>
              Search
            </button>
          </form>

          {/* 
          <label className="input grow input-bordered flex items-center justify-between bg-white rounded-full mt-4 pr-0">
            <input
              type="text"
              className="rounded-full "
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


          </label> */}

          <div>
            <p className="font-poppins mx-3">{searchFixtures.length} Results</p>{" "}
          </div>

          <div className="w-full max-h-[500px] overflow-y-scroll flex flex-col no-scrollbar">
            {fixturesLoading? <LoadingTemplate/>: searchFixtures.length == 0 ? (
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
                    <a
                      className="flex flex-col w-full px-4 py-6 bg-slate-50 cursor-pointer rounded-md"
                      key={`la-f-${fixture.fixture_id}`}
                      // onClick={routeToFixture.bind(null, fixture.fixture_id, fixture.league_id)}
                      href={`/Dashboard/contest/${fixture.fixture_id}/${fixture.id}`}
                    >
                      <p className="text-denary text-sm">{fixture.title}</p>
                      <p className="text-slate-700 text-[0.8rem] mt-1">
                        <span className="font-semibold text-denary ">
                          Entry:
                        </span>{" "}
                        {`₦${fixture.entry_amount}`}
                      </p>
                    </a>
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
