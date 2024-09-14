"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import LoadingTemplate from "@/components/LoadingTemplate";
import toast from "react-hot-toast";
import { getAccessToken } from "@/constants/constants";

const Page = () => {
  const dummyContestHistory = [
    {
      name: "Weekly Jackpot",
      entryAmount: "50000",
      status: "Pending",
      leagueName: "Elite League",
      amountWon: "100000",
      profit: 50,
    },
    {
      name: "Daily Double",
      entryAmount: "20000",
      status: "Failed",
      leagueName: "Amateur League",
      amountWon: "0",
      profit: 0,
    },
    {
      name: "Weekend Blitz",
      entryAmount: "100000",
      status: "Completed",
      leagueName: "Pro League",
      amountWon: "0",
      profit: 0,
    },
    {
      name: "Midweek Madness",
      entryAmount: "30000",
      status: "Pending",
      leagueName: "Intermediate League",
      amountWon: "40000",
      profit: 10,
    },
    {
      name: "Daily Grind",
      entryAmount: "10000",
      status: "Failed",
      leagueName: "Beginner League",
      amountWon: "0",
      profit: 0,
    },
    {
      name: "Weekend Warrior",
      entryAmount: "80000",
      status: "Completed",
      leagueName: "Elite League",
      amountWon: "150000",
      profit: 70,
    },
    {
      name: "Midweek Marathon",
      entryAmount: "40000",
      status: "Pending",
      leagueName: "Intermediate League",
      amountWon: "0",
      profit: 0,
    },
    {
      name: "Daily Duel",
      entryAmount: "25000",
      status: "Failed",
      leagueName: "Amateur League",
      amountWon: "0",
      profit: 0,
    },
    {
      name: "Weekend Showdown",
      entryAmount: "120000",
      status: "Completed",
      leagueName: "Pro League",
      amountWon: "200000",
      profit: 80,
    },
    {
      name: "Midweek Melee",
      entryAmount: "35000",
      status: "Pending",
      leagueName: "Intermediate League",
      amountWon: "0",
      profit: 0,
    },
    {
      name: "Daily Derby",
      entryAmount: "15000",
      status: "Failed",
      leagueName: "Beginner League",
      amountWon: "0",
      profit: 0,
    },
    {
      name: "Weekend Rumble",
      entryAmount: "90000",
      status: "Completed",
      leagueName: "Elite League",
      amountWon: "180000",
      profit: 100,
    },
    {
      name: "Midweek Mayhem",
      entryAmount: "45000",
      status: "Pending",
      leagueName: "Intermediate League",
      amountWon: "0",
      profit: 0,
    },
    {
      name: "Daily Dash",
      entryAmount: "20000",
      status: "Failed",
      leagueName: "Amateur League",
      amountWon: "0",
      profit: 0,
    },
    {
      name: "Weekend Whirlwind",
      entryAmount: "100000",
      status: "Completed",
      leagueName: "Pro League",
      amountWon: "250000",
      profit: 150,
    },
    {
      name: "Midweek Madness",
      entryAmount: "30000",
      status: "Pending",
      leagueName: "Intermediate League",
      amountWon: "0",
      profit: 0,
    },
    {
      name: "Daily Duel",
      entryAmount: "25000",
      status: "Failed",
      leagueName: "Amateur League",
      amountWon: "0",
      profit: 0,
    },
    {
      name: "Weekend Showdown",
      entryAmount: "120000",
      status: "Completed",
      leagueName: "Pro League",
      amountWon: "200000",
      profit: 80,
    },
    {
      name: "Midweek Melee",
      entryAmount: "35000",
      status: "Pending",
      leagueName: "Intermediate League",
      amountWon: "0",
      profit: 0,
    },
    {
      name: "Daily Derby",
      entryAmount: "15000",
      status: "Failed",
      leagueName: "Beginner League",
      amountWon: "0",
      profit: 0,
    },
  ];

  const columnNames = [
    "Name",
    "Time Entered",
    "Entry amount",
    "League name",
    "Amount won",
    "Profit",
  ];

  const [contestHistory, setContestHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = process.env.NEXT_PUBLIC_API_URL;
  const apiUrl = `${url}/contest/contest-history/list/`;

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    // Options to customize the date and time format
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    // Format the date with Intl.DateTimeFormat for better control
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  const constructContestHistory = (data) => {
    return data.map((history) => ({
      name: history.name,
      entryAmount: history.entry_amount,
      leagueName: history.league_name,
      amountWon: history.won_amount,
      profit: `${history.won_amount - history.entry_amount}`,
      entryTime: `${formatTimestamp(history.entered_by)}`,
    }));
  };

  useEffect(() => {
    // setContestHistory(dummyContestHistory);
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("An error occured");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const history = constructContestHistory(data);
        setContestHistory(history);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <LoadingTemplate />
      </div>
    );
  }

  return (
    <section className="p-7">
      <div className="">
        <h1 className="font-medium text-black text-3xl md:text-4xl xl:text-6xl">
          Contest history
        </h1>
      </div>

      {contestHistory.length == 0 ? (
        <div className="w-full h-[40vh] flex items-center justify-center">
          <p>You have not entered any contests</p>
        </div>
      ) : (
        <div className="w-full mt-9">
          <Table>
            <TableCaption>A list of all contest you have entered</TableCaption>
            <TableHeader>
              <TableRow>
                {columnNames.map((name) => {
                  return (
                    <TableHead className="bg-denary text-white" key={`gaga-${name}`}>
                      {name}
                    </TableHead>
                  );
                })}
              </TableRow>
            </TableHeader>

            <TableBody>
              {contestHistory.map((history) => {
                return (
                  <TableRow key={`row-${history.name}`}>
                    <TableCell className="text-black">{history.name}</TableCell>
                    <TableCell className="text-black">{history.entryTime}</TableCell>

                    <TableCell className="text-black">{history.entryAmount}</TableCell>

                    <TableCell className="text-black">{history.leagueName}</TableCell>

                    <TableCell className="text-black">{history.amountWon}</TableCell>
                    <TableCell className="text-black">{history.profit}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </section>
  );
};

export default Page;
