"use client";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import GameTypes from "@/components/GameTypes";
import Contextcard from "@/components/Contests/Contextcard";
import SportsBook from "@/components/SportsBook";
import { useFetchDataPlans } from "@/Hooks/useFetch";


export default function Home() {
  const url = process.env.NEXT_PUBLIC_MICROSERVICE_URL;
  const apiUrl = `${url}get-fixtures?total_to_win=false&single_game=false&limit=10`
  const { data: contests } = useFetchDataPlans(apiUrl);
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
  }, []);
  const [availableContest, setAvailableContest] = useState([])
  const [filters, setFilters] = useState({
    'Game Category': '',
    'Entry Type': '',
    'Contest Level': ''
  })


  // useEffect(() => {
  //   let filteredContests = contests.fixtures.filter((contest) => {
  //     let isGameCategory = filters['Game Category'] === '' || filters['Game Category'] === 'All' || contest.entry_type === filters['Game Category']
  //     let isEntryType = filters['Entry Type'] === '' || filters['Entry Type'] === 'All' || contest.entry_type === filters['Entry Type']
  //     let isContestLevel = filters['Contest Level'] === '' || filters['Contest Level'] === 'All' || contest.entry_type === filters['Contest Level']
  //     return isGameCategory && isEntryType && isContestLevel
  //   })
  //   setAvailableContest(filteredContests)
  // }, [filters])

  
  return (
    <div>
      {/* <SportsBook /> */}

      <div className="bg-white border-t-[2px] flex justify-between">
        <GameTypes
          categories={["Game Category", "Entry Type", "Contest Level"]}
          labels={[
            ["Full Roaster", "Single Game"],
            ["All", "Single Entry", "Multiple Entry"],
            ["All Players", "Beginners", "Experienced"],
          ]}
          initialValues={50}
          filters={filters}
          onChange={(e) => {
            setFilters({ ...filters, [e.target.name]: e.target.value})
          }}
        />

        <div className=" w-full p-5 ">
          {
            contests?.fixtures?.map((contest) => (
              <Contextcard contest={contest} type={contest.entry_type} key={contest.id} />
            ))
          }
        </div>
      </div>
    </div>
  );
}