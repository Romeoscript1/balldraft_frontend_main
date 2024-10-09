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
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

const Page = () => {
  const columnNames = [
    "Name",
    "Time Entered",
    "Entry amount",
    "League name",
    "Amount won",
    "Lineup",
    "Status",
  ];

  const [contestHistory, setContestHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playerList, setPlayerList] = useState([]);
  const [playerDialogOpen, setPlayerDialogOpen] = useState(false);

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
      status: history.completed ? "Completed" : "Pending",
      players: history.players,
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

  const showPlayersDialog = (players) => {
    setPlayerList(players);
    setPlayerDialogOpen(true);
  };

  const closePlayerDialog = () => {
    setPlayerDialogOpen(false);
  };

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <LoadingTemplate />
      </div>
    );
  }

  return (
    <section className="p-7">
      <Dialog open={playerDialogOpen} onOpenChange={setPlayerDialogOpen}>

        <DialogContent
          className="bg-white pt-10"
          onInteractOutside={closePlayerDialog}
          
        >
          {playerList.map((player) => {
            return (
              <div
                className="w-full flex flex-row items-center gap-3 justify-between"
                key={player.player_id}
              >
                <div className="flex flex-row gap-3 items-center">
                  <img
                    src={player.image_url}
                    alt=""
                    className="w-[30px] w-[30px] rounded-full"
                  />

                  <div>
                    <p className="font-medium text-denary font-poppins">
                      {player.name}
                    </p>
                    <p className="text-sm">{player.position}</p>
                  </div>
                </div>

                <p className="text-black font-poppins">
                  {player.points} points
                </p>
              </div>
            );
          })}
        </DialogContent>
      </Dialog>
      <div className="">
        <h1 className="font-medium text-denary font-poppins text-3xl md:text-4xl xl:text-6xl">
          Fantasy drafts
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
                    <TableHead
                      className="bg-denary text-white py-4 font-poppins"
                      key={`gaga-${name}`}
                    >
                      {name}
                    </TableHead>
                  );
                })}
              </TableRow>
            </TableHeader>

            <TableBody>
              {contestHistory.map((history) => {
                return (
                  <TableRow
                    key={`row-${history.name}`}
                    className="font-poppins"
                  >
                    <TableCell className="text-black py-5">
                      {history.name}
                    </TableCell>
                    <TableCell className="text-black py-5">
                      {history.entryTime}
                    </TableCell>

                    <TableCell className="text-black py-5">
                      {history.entryAmount}
                    </TableCell>

                    <TableCell className="text-black py-5">
                      {history.leagueName}
                    </TableCell>

                    <TableCell className="text-black py-5">
                      {history.amountWon}
                    </TableCell>

                    <TableCell className="text-black py-5">
                      <p
                        className="text-denary underline cursor-pointer"
                        onClick={showPlayersDialog.bind(null, history.players)}
                      >
                        View Lineup
                      </p>
                    </TableCell>
                    <TableCell className={`text-black py-5`}>
                      <p
                        className={`font-medium rounded-full flex-shrink-0 ${
                          history.status == "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-slate-100"
                        } py-2 px-2  text-center`}
                      >
                        {history.status}
                      </p>
                    </TableCell>
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
