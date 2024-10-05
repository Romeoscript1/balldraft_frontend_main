"use client";
import React, { useState } from "react";
import { Tabs } from "antd";
import Contests from "./Contests";
import "./MoreContext.css";
import { useFetchDataPlans } from "@/Hooks/useFetch";

const onChange = (key) => {
  console.log(key);
};

const MoreContext = (props) => {
  // const apiUrl = 'https://api.balldraft.com/get-fixtures?total_to_win=false&single_game=false&limit=10'
  // const { data: contests } = useFetchDataPlans(apiUrl);
  const leagues = props.leagues;
  const contests = {
    total_fixtures: 123,
    fixtures: [
      {
        id: 1148467,
        title:
          "Chattanooga Red Wolves vs Charlotte Independence | USL League One",
        date: "2024-07-16T23:30:00+00:00",
        timezone: "UTC",
        timestamp: "1721172600",
        entry_amount: 4350,
        entry_type: "multiple",
        current_entry: 0,
        max_entry: 83,
        home: "Chattanooga Red Wolves",
        home_id: "9016",
        home_logo: "https://media.api-sports.io/football/teams/9016.png",
        away: "Charlotte Independence",
        away_id: "3991",
        away_logo: "https://media.api-sports.io/football/teams/3991.png",
        venue: "CHI Memorial Stadium | East Ridge, Tennessee",
        league_name: "USL League One",
        league_logo: "https://media.api-sports.io/football/leagues/489.png",
        league_country: "USA",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 87105,
      },
      {
        id: 1151090,
        title: "Atlanta United FC vs New York City FC | Major League Soccer",
        date: "2024-07-17T23:30:00+00:00",
        timezone: "UTC",
        timestamp: "1721259000",
        entry_amount: 1298,
        entry_type: "single",
        current_entry: 0,
        max_entry: 219,
        home: "Atlanta United FC",
        home_id: "1608",
        home_logo: "https://media.api-sports.io/football/teams/1608.png",
        away: "New York City FC",
        away_id: "1604",
        away_logo: "https://media.api-sports.io/football/teams/1604.png",
        venue: "Mercedes-Benz Stadium | Atlanta, Georgia",
        league_name: "Major League Soccer",
        league_logo: "https://media.api-sports.io/football/leagues/253.png",
        league_country: "USA",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 110090,
      },
      {
        id: 1151091,
        title: "FC Cincinnati vs Chicago Fire | Major League Soccer",
        date: "2024-07-17T23:30:00+00:00",
        timezone: "UTC",
        timestamp: "1721259000",
        entry_amount: 2488,
        entry_type: "multiple",
        current_entry: 0,
        max_entry: 312,
        home: "FC Cincinnati",
        home_id: "2242",
        home_logo: "https://media.api-sports.io/football/teams/2242.png",
        away: "Chicago Fire",
        away_id: "1607",
        away_logo: "https://media.api-sports.io/football/teams/1607.png",
        venue: "TQL Stadium | Cincinnati, Ohio",
        league_name: "Major League Soccer",
        league_logo: "https://media.api-sports.io/football/leagues/253.png",
        league_country: "USA",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 331660,
      },
      {
        id: 1151092,
        title: "Columbus Crew vs Charlotte | Major League Soccer",
        date: "2024-07-17T23:30:00+00:00",
        timezone: "UTC",
        timestamp: "1721259000",
        entry_amount: 4680,
        entry_type: "multiple",
        current_entry: 0,
        max_entry: 934,
        home: "Columbus Crew",
        home_id: "1613",
        home_logo: "https://media.api-sports.io/football/teams/1613.png",
        away: "Charlotte",
        away_id: "18310",
        away_logo: "https://media.api-sports.io/football/teams/18310.png",
        venue: "Lower.com Field | Columbus, Ohio",
        league_name: "Major League Soccer",
        league_logo: "https://media.api-sports.io/football/leagues/253.png",
        league_country: "USA",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 178731,
      },
      {
        id: 1151093,
        title: "Inter Miami vs Toronto FC | Major League Soccer",
        date: "2024-07-17T23:30:00+00:00",
        timezone: "UTC",
        timestamp: "1721259000",
        entry_amount: 1327,
        entry_type: "multiple",
        current_entry: 0,
        max_entry: 773,
        home: "Inter Miami",
        home_id: "9568",
        home_logo: "https://media.api-sports.io/football/teams/9568.png",
        away: "Toronto FC",
        away_id: "1601",
        away_logo: "https://media.api-sports.io/football/teams/1601.png",
        venue: "Chase Stadium | Fort Lauderdale, Florida",
        league_name: "Major League Soccer",
        league_logo: "https://media.api-sports.io/football/leagues/253.png",
        league_country: "USA",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 577432,
      },
      {
        id: 1151094,
        title: "New York Red Bulls vs Montreal Impact | Major League Soccer",
        date: "2024-07-17T23:30:00+00:00",
        timezone: "UTC",
        timestamp: "1721259000",
        entry_amount: 3465,
        entry_type: "single",
        current_entry: 0,
        max_entry: 971,
        home: "New York Red Bulls",
        home_id: "1602",
        home_logo: "https://media.api-sports.io/football/teams/1602.png",
        away: "Montreal Impact",
        away_id: "1614",
        away_logo: "https://media.api-sports.io/football/teams/1614.png",
        venue: "Red Bull Arena | Harrison, New Jersey",
        league_name: "Major League Soccer",
        league_logo: "https://media.api-sports.io/football/leagues/253.png",
        league_country: "USA",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 950586,
      },
      {
        id: 1151095,
        title:
          "Philadelphia Union vs New England Revolution | Major League Soccer",
        date: "2024-07-17T23:30:00+00:00",
        timezone: "UTC",
        timestamp: "1721259000",
        entry_amount: 875,
        entry_type: "single",
        current_entry: 0,
        max_entry: 336,
        home: "Philadelphia Union",
        home_id: "1599",
        home_logo: "https://media.api-sports.io/football/teams/1599.png",
        away: "New England Revolution",
        away_id: "1609",
        away_logo: "https://media.api-sports.io/football/teams/1609.png",
        venue: "Subaru Park | Chester, Pennsylvania",
        league_name: "Major League Soccer",
        league_logo: "https://media.api-sports.io/football/leagues/253.png",
        league_country: "USA",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 854859,
      },
      {
        id: 1158736,
        title:
          "Independ. Rivadavia vs Gimnasia L.P. | Liga Profesional Argentina",
        date: "2024-07-18T22:00:00+00:00",
        timezone: "UTC",
        timestamp: "1721340000",
        entry_amount: 1338,
        entry_type: "multiple",
        current_entry: 0,
        max_entry: 817,
        home: "Independ. Rivadavia",
        home_id: "473",
        home_logo: "https://media.api-sports.io/football/teams/473.png",
        away: "Gimnasia L.P.",
        away_id: "434",
        away_logo: "https://media.api-sports.io/football/teams/434.png",
        venue:
          "Estadio Juan Bautista Gargantini | Mendoza, Provincia de Mendoza",
        league_name: "Liga Profesional Argentina",
        league_logo: "https://media.api-sports.io/football/leagues/128.png",
        league_country: "Argentina",
        live: true,
        upcoming: false,
        completed: false,
        total_to_win: 141099,
      },
      {
        id: 1167302,
        title: "HFX Wanderers FC vs Valour | Canadian Premier League",
        date: "2024-07-18T22:00:00+00:00",
        timezone: "UTC",
        timestamp: "1721340000",
        entry_amount: 3327,
        entry_type: "multiple",
        current_entry: 0,
        max_entry: 65,
        home: "HFX Wanderers FC",
        home_id: "2621",
        home_logo: "https://media.api-sports.io/football/teams/2621.png",
        away: "Valour",
        away_id: "3831",
        away_logo: "https://media.api-sports.io/football/teams/3831.png",
        venue: "Wanderers Grounds | Halifax, Nova Scotia",
        league_name: "Canadian Premier League",
        league_logo: "https://media.api-sports.io/football/leagues/479.png",
        league_country: "Canada",
        live: true,
        upcoming: false,
        completed: false,
        total_to_win: 762526,
      },
      {
        id: 1174381,
        title: "Carolina Core vs Chattanooga | MLS Next Pro",
        date: "2024-07-17T22:30:00+00:00",
        timezone: "UTC",
        timestamp: "1721255400",
        entry_amount: 1034,
        entry_type: "multiple",
        current_entry: 0,
        max_entry: 474,
        home: "Carolina Core",
        home_id: "23063",
        home_logo: "https://media.api-sports.io/football/teams/23063.png",
        away: "Chattanooga",
        away_id: "9073",
        away_logo: "https://media.api-sports.io/football/teams/9073.png",
        venue:
          "South Carolina United FC BB&T Soccer Complex | Irmo, South Carolina",
        league_name: "MLS Next Pro",
        league_logo: "https://media.api-sports.io/football/leagues/909.png",
        league_country: "USA",
        live: true,
        upcoming: false,
        completed: false,
        total_to_win: 888769,
      },
    ],
  };

  const [displayNumber, setDisplayNumber] = useState(10);

  const loadMoreHandler = () => {
    setDisplayNumber((prev) => {
      return (prev += 10);
    });
  };

  const fixtures =
    leagues.leagues
      ?.map((league) =>
        league.fixtures.map((fixture) => {
          return {
            ...fixture,
            league_id: league.league_id,
          };
        })
      )
      .flat() || [];

  const numberFixtures = fixtures.slice(0, displayNumber);

  const uniqueEntryTypes = [
    ...new Set(fixtures.map((fixture) => fixture.entry_type)),
  ];

  const fetchFixtureForEntryType = (entry_type) => {
    return fixtures.filter((fixture) => fixture.entry_type === entry_type);
  };

  const dataItems = uniqueEntryTypes.map((entry, index) => {
    return {
      key: index,
      label: entry,
      children: (
        <Contests type="top" contests={fetchFixtureForEntryType(entry)} />
      ),
    };
  });

  const getBiggestPrizes = () => {
    return fixtures
      .sort((a, b) => b.total_to_win - a.total_to_win)
      .slice(0, displayNumber); //sorting in ascending order
  };

  const getH2HGames = () => {
    return fixtures
      .filter((fixture) => fixture.entry_type.toLowerCase() === "h2h")
      .slice(0, displayNumber);
  };
  const items = [
    {
      key: "1",
      label: "Beginner Contests",
      children: <Contests type="recent" contests={numberFixtures} />,
    },
    {
      key: "2",
      label: "Biggest Prizes",
      children: <Contests type="top" contests={getBiggestPrizes()} />,
    },
    {
      key: "3",
      label: "Single Game",
      children: <Contests type="top" contests={getH2HGames()} />,
    },
    // {
    //     key: '4',
    //     label: 'Free Entry',
    //     children: <Contests type='top' contests={contests?.fixtures} />,
    // },
  ];

  
  return (
    <>
      <h2 className="text-2xl font-bold text-center my-[2rem] text-black">
        More Contests
      </h2>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} centered />

      <div className="w-full flex items-center justify-center">
        {numberFixtures.length <= fixtures.length && (
          <button
            className="bg-denary rounded-full px-4 py-3 my-5 cursor-pointer"
            onClick={loadMoreHandler}
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export default MoreContext;
