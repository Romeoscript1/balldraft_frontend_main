import React, { useEffect, useMemo, useState } from "react";
import { Table, Avatar, Modal } from "antd";
import logo from "@/public/images/logo.png";
import toast from "react-hot-toast";
import usePostRequest from "@/Hooks/usepostRequest";
import { data } from "autoprefixer";
import { getAccessToken } from "@/constants/constants";
import Loader from "../Loader";
import { useRouter } from "next/navigation";

function ContestTables({ card, leagueName }) {
  const [availablePlayers, setAvailablePlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [selectplayers, setselectplayers] = useState([]);
  const [photoUrls, setPhotoUrls] = useState([]);
  const [activeButton, setActiveButton] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalPlayer, setModalPlayer] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [gameName, setgameName] = useState("");
  const [totalSalary, setTotalSalary] = useState(100000);
  const [amountSpent, setAmountSpent] = useState(0);
  const [lineUpLoading, setLineupLoading] = useState(false);
  const postRequest = usePostRequest();
  const router = useRouter()
  /**Generate a random number between 1 and 10 */
  const generateRandomFppg = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  const home_team = card?.home_team_players;
  const away_team = card?.away_team_players;
  const players = useMemo(() => {
    const transformHomeTeam = home_team[0]?.players.map((player) => ({
      ...player,
      team: home_team[0].team.name,
      fppg: generateRandomFppg(),
      team_id: home_team[0].team.id,
      position: player.position,
      photo: player.photo,
    }));
    const transformAwayTeam = away_team[0]?.players.map((player) => ({
      ...player,
      team: away_team[0].team.name,
      fppg: generateRandomFppg(),
      team_id: away_team[0].team.id,
      position: player.position,
      photo: player.photo,
    }));
    return [...transformHomeTeam, ...transformAwayTeam];
  }, [away_team, home_team]);

  useEffect(() => {
    setAvailablePlayers(players);
    setselectplayers([...new Set(players.map((player) => player.position))]);
    setPhotoUrls(
      players.map((player) => {
        return {
          name: player.name,
          photo: player.photo,
        };
      })
    );
  }, [players]);

  const url = process.env.NEXT_PUBLIC_API_URL;
  const apiUrl = `${url}/contest/contest-history/`;

  // const {
  //   mutate: mutateConfirmLineup,
  //   isPending,
  //   isSuccess,
  //   isError,
  //   error,
  // } = postRequest(apiUrl);

  const handleConfirmLineUp = () => {
    if (card && selectedPlayers.length > 0) {
      console.log("LINEUP CONFIR");
      setLineupLoading(true);
      const playerList = selectedPlayers.map((player) => ({
        player_id: player.id,
        name: player.name,
        image_url: player.photo,
        team_id: player.team_id,
        fixture_id: card?.fixture_id,
        points: player.fppg,
        position: player.position,
      }));

      const body = {
        players: playerList,
        name: card?.title,
        game_id: card?.id,
        fixture_id: card.fixture_id,
        entry_amount: card.entry_amount,
        league_name: leagueName,
        pending: true,
        completed: false,
        profit: true,
        total_points: 0,
        positions: true,
        position: 0,
        max_entry: card.max_entry,
        won_amount: 0,
        pool_price: card.total_to_win,
        profile: 1,
      };

      fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            toast.success("Lineup confrimation successful");
            router.push('/Dashboard/history/')
          }
          return response.json();
        })
        .then((data) => {
          if (data.detail) {
            toast.error(data.detail);
          }
        })
        .catch((error) => {
          console.error("Error confirming lineup", error);
          toast.error("Error confirming lineup, please try again");
        })
        .finally(setLineupLoading(false));

      // mutateConfirmLineup(JSON.stringify(body),
      //   {
      //     onSuccess: ()=>{
      //     toast.success('Linup confirmation successful')
      //   },
      //   onError: ()=>{
      //     toast.error('An error occured, please try again.')
      //   }
      // })

      // setLineupLoading(false)
    } else {
      toast.error(
        "Minimum of one player is required, please select more players"
      );
    }
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    filterPlayers(buttonName, searchText);
    setIsOpen(true);
    setgameName(buttonName);
  };

  // Function to handle search input
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    filterPlayers(activeButton, value);
  };

  const filterPlayers = (position, text) => {
    let filteredPlayers = players;
    if (position !== "All") {
      filteredPlayers = filteredPlayers.filter(
        (player) => player.position === position
      );
    }
    if (text) {
      filteredPlayers = filteredPlayers.filter((player) =>
        player.name.toLowerCase().includes(text.toLowerCase())
      );
    }
    console.log(filteredPlayers);
    setAvailablePlayers(filteredPlayers);
  };

  const addPlayer = (player) => {
    const remaining = totalSalary - amountSpent;
    const toRemain = remaining - player.fppg * 10000;
    if (toRemain < 0) {
      toast.error("Cannot add more players");
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
      setAvailablePlayers(availablePlayers.filter((p) => p.id !== player.id));
      setAmountSpent((amt) => amt + player.fppg * 10000);
    }
  };

  const removePlayer = (player) => {
    setAvailablePlayers([...availablePlayers, player]);
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== player.id));
    setAmountSpent((amt) => amt - player.fppg * 10000);
  };

  const showModal = (player) => {
    setModalPlayer(player);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleResetSelection = () => {
    setAvailablePlayers((available) => [
      ...selectedPlayers,
      ...availablePlayers,
    ]);
    setSelectedPlayers([]);
    setAmountSpent(0);
  };

  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <a onClick={() => showModal(record)} style={{ cursor: "pointer" }}>
          {text}
        </a>
      ),
    },
    { title: "POSITION", dataIndex: "position", key: "position" },
    { title: "TEAM", dataIndex: "team", key: "team" },
    { title: "AGE", dataIndex: "age", key: "age" },
    { title: "FPPG", dataIndex: "fppg", key: "fppg" },
    {
      render: (text, record) => (
        <button
          className="rounded-[20px] border-[1px] text-[#012C51] p-[0.5rem] border-[#012C51]"
          onClick={() => addPlayer(record)}
        >
          Add
        </button>
      ),
    },
  ];

  const selectedColumns = [
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
      render: (text) => {
        console.log("the text", text);
        return (
          <span className="flex flex-row gap-2 flex-wrap">
            {/* <Avatar style={{ marginRight: 8 }}>P</Avatar> */}
            <img
              src={photoUrls.find((instance) => instance.name == text).photo}
              className="w-[30px] h-[30px] rounded-full "
              alt=""
            />
            {text}
          </span>
        );
      },
    },
    { title: "POSITION", dataIndex: "position", key: "position" },
    { title: "TEAM", dataIndex: "team", key: "team" },
    {
      render: (text, record) => (
        <button
          className="rounded-[20px] border-[1px] text-[red] p-[0.5rem] border-[red]"
          onClick={() => removePlayer(record)}
        >
          Remove
        </button>
      ),
    },
  ];

  // const selectplayers = ["LW", "CM", "WR", "LB", "FLEX", "DEF", "CF", "CDM"];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {lineUpLoading && <Loader />}
      <div className=" hidden sm:block flex-[1.5] order-2 sm:order-1">
        <div className="flex mb-[1.5rem] max-[760px]:justify-between">
          <button
            className={`px-[0.7rem] text-sm py-[0.5rem]  rounded-[20px] m-1 ${
              activeButton === "All" ? "bg-gray-500 text-white" : "border-[2px]"
            }`}
            onClick={() => handleButtonClick("All")}
          >
            All
          </button>
          <button
            className={`px-[0.8rem] text-sm rounded-[20px] m-1 ${
              activeButton === "Goalkeeper"
                ? "bg-gray-500 text-white"
                : "border-[2px]"
            }`}
            onClick={() => handleButtonClick("Goalkeeper")}
          >
            Goalkeeper
          </button>
          <button
            className={`px-[0.7rem] text-sm rounded-[20px] m-1 ${
              activeButton === "Defender"
                ? "bg-gray-500 text-white"
                : "border-[2px]"
            }`}
            onClick={() => handleButtonClick("Defender")}
          >
            Defender
          </button>
          <button
            className={`px-[0.7rem] text-sm rounded-[20px] m-1 ${
              activeButton === "Midfielder"
                ? "bg-gray-500 text-white"
                : "border-[2px]"
            }`}
            onClick={() => handleButtonClick("Midfielder")}
          >
            Midfielder
          </button>
          <button
            className={`px-[0.7rem] text-sm  rounded-[20px] m-1 ${
              activeButton === "Attacker"
                ? "bg-gray-500 text-white"
                : "border-[2px]"
            }`}
            onClick={() => handleButtonClick("Attacker")}
          >
            Attacker
          </button>

          <label className="input input-bordered flex items-center gap-2 mx-[1rem] bg-white rounded-full max-[760px]:hidden">
            <input
              type="text"
              className="grow"
              onChange={handleSearch}
              placeholder="Search players"
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
        </div>
        <Table
          columns={columns}
          dataSource={availablePlayers}
          className="blue-header no-border"
          rowKey="key"
        />
      </div>
      <div className="flex-1 order-1 sm:order-2">
        <div className="flex justify-center tracking-wider sm:tracking-normal items-center gap-8 px-5 mb-[1.3rem] text-black">
          <div className="flex flex-col gap-3 justify-center items-center">
            <span className="text-[#808080] text-[0.7rem]">Total Salary</span>{" "}
            <span className="font-semibold text-md">₦{totalSalary} NGN</span>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <span className="text-[#808080] text-[0.7rem]">Remaining</span>{" "}
            <span className="font-semibold text-md">
              ₦{totalSalary - amountSpent} NGN
            </span>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <span className="text-[#808080] text-[0.7rem]">FPPG</span>{" "}
            <span className="font-semibold text-md">0.00</span>
          </div>
        </div>

        <div className="block sm:hidden">
          <div
            className="flex justify-between py-2 border-b-[1.5px] border-[rgb(0,0,0,0.3)]"
            onClick={() => handleButtonClick("All")}
          >
            <span className="font-[600]">Select Players</span>
            <span>All</span>
          </div>
          <div>
            {selectplayers.map((data, index) => {
              return (
                <div
                  className="flex justify-between py-2 border-b-[1.5px] border-[rgb(0,0,0,0.3)]"
                  onClick={() => handleButtonClick(data)}
                  key={`player-${index}`}
                >
                  <p className="text-[#294d6c] text-[12px] font-[600]">
                    Select {data}
                  </p>
                  <button className="relative">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative top-[0.2rem] left-[40%]"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              );
            })}

            {isOpen && (
              <div className="fixed top-0 z-50 h-full w-full bg-[rgb(0,0,0,0.6)] flex justify-center">
                <div className="bg-white rounded-t-[30px] fixed bottom-0 w-[100%] h-[90%] overflow-auto p-2 flex justify-start flex-col gap-5 items-center">
                  {/* cancel icon */}
                  <div
                    className="absolute top-3 bg-[rgb(0,0,0,0.1)] active:bg-[rgb(0,0,0,0.2)] right-5 bg-white p-3 rounded-[50%] "
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_311_6870)">
                        <path
                          d="M22.5 7.5L7.5 22.5"
                          stroke="#808080"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.5 7.5L22.5 22.5"
                          stroke="#808080"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_311_6870">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div>
                    <p className="w-[100px] rounded h-[7px] bg-[rgb(0,0,0,0.4)]"></p>
                    <h2 className="text-[#000000] font-[600] text-[25px] text-center">
                      select {gameName}
                    </h2>
                  </div>

                  <input
                    type="search"
                    className="outline-none border-[1.5px] border-[rgb(0,0,0,0.6)] rounded-[50px] w-[95%] h-[70px] mt-5"
                  />

                  <Table
                    columns={columns}
                    dataSource={availablePlayers}
                    className=" overflow-scroll  blue-header no-border bg-white"
                    rowKey="key"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {
          <Table
            columns={selectedColumns}
            dataSource={selectedPlayers}
            className="blue-header no-border overflow-scroll no-scrollbar"
            rowKey="key"
          />
        }

        <div className="flex flex-col mt-4">
          {/* <p>Lineup completed</p> */}
          <div className="flex flex-row mt-5 flex-wrap gap-3">
            <button
              className="bg-sky-900 py-3 px-4 rounded-full text-white cursor-pointer disabled:bg-slate-400 disabled:cursor-not-allowed"
              onClick={handleConfirmLineUp}
              disabled={lineUpLoading}
            >
              Confirm lineup
            </button>
            <button
              className="bg-white border-2 border-sky-900 px-4 py-3 rounded-full text-sky-900 cursor-pointer"
              onClick={handleResetSelection}
            >
              Reset selection
            </button>
            <p className="my-3 w-full m-w-[500px]">
              Please note that the maximum number of players allowed in a lineup
              is 9. Ensure your selections comply with this limit for optimal
              gameplay experience
            </p>
          </div>
        </div>
      </div>
      {modalPlayer && (
        <Modal
          title="Player Information"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ top: 20 }}
          bodyStyle={{ height: 300, overflowY: "auto" }}
        >
          <div className="flex justify-between gap-4 ">
            <aside className="basis-[49%]">
              <img
                src={modalPlayer.photo}
                alt={modalPlayer.name}
                style={{ width: "100%", marginTop: "10px" }}
                className="w-full h-full object-cover object-center"
              />
            </aside>
            <aside className="basis-[49%]">
              <p className="text-2xl font-bold"> {modalPlayer.name}</p>

              {/* <p className="border inline-block rounded-full my-[1rem] border-[black] px-[0.3rem] text-xl">
                {" "}
                ${modalPlayer.salary}
              </p> */}
              <hr />
              <p>{modalPlayer.nextGame}</p>
              <div className="flex justify-between my-[1rem]">
                <p>
                  Standard Deviation <br />
                  <span className="font-bold text-xl"> $1000 USD</span>
                </p>
                <p>
                  FPPG <br />
                  <span className="font-bold text-xl">{modalPlayer.fppg}</span>
                </p>
              </div>
              <div className="flex text-xl text-gray-500 mb-[1rem]">
                <p>HOU : 43.5</p>

                <p>BUF : -3.5</p>
              </div>
              {!selectedPlayers.includes(modalPlayer) ? (
                <button
                  className="bg-[#012C51] text-white rounded-full w-full p-[0.5rem]"
                  onClick={addPlayer.bind(null, modalPlayer)}
                >
                  Draft Player
                </button>
              ) : (
                <button
                  className="bg-[#012C51] text-white rounded-full w-full p-[0.5rem]"
                  onClick={removePlayer.bind(null, modalPlayer)}
                >
                  Remove player
                </button>
              )}
            </aside>
          </div>

          {/* <div className="flex">
            <aside className="basis-[49%]">
              <p>{modalPlayer.nextGame}</p>
              <img src={logo.src} className="w-24" alt="" />
            </aside>
            <aside className="basis-[49%]">
              <div className="bg-[#F9F9F9] rounded-md mb-[1rem] mt-[1rem]">
                <h2 className="text-black text-lg">Ball-Draft Platform</h2>
                <p className="flex gap-4 my-[0.5rem] text-sm text-gray-500">
                  <span>2 days ago</span>{" "}
                  <li className="list-disc">Highlight </li>
                </p>
                <p className="text-[12px]">
                  Gabe Davis reeled in five of his nine targets for 26 yards and
                  a touchdown during the 2023 regular session. Advice: Bell
                  provided a serviceable backup veteran tight end for the Chiefs
                  in 2023. But, he sat clearly behind Travis Kelce and Noag Gabe
                  in the pecking order. Bulldozer’s contract expires following
                  the season.
                </p>
              </div>
              <div className="bg-[#F9F9F9] rounded-md">
                <h2 className="text-black text-lg">Ball-Draft Platform</h2>
                <p className="flex gap-4 my-[0.5rem] text-sm text-gray-500">
                  <span>2 days ago</span>{" "}
                  <li className="list-disc">Highlight</li>
                </p>
                <p className="text-[12px]">
                  Gabe Davis reeled in five of his nine targets for 26 yards and
                  a touchdown during the 2023 regular session. Advice: Bell
                  provided a serviceable backup veteran tight end for the Chiefs
                  in 2023. But, he sat clearly behind Travis Kelce and Noag Gabe
                  in the pecking order. Bulldozer’s contract expires following
                  the season.
                </p>
              </div>
            </aside>
          </div> */}
          {/* 
                    <p><strong>Position:</strong> {modalPlayer.position}</p>
                    <p><strong>Team:</strong> {modalPlayer.team}</p>
                    <p><strong>Opponent:</strong> {modalPlayer.opp}</p>

                    <p><strong>FPPG:</strong> {modalPlayer.fppg}</p>
                    <p><strong>Standard Deviation:</strong> {modalPlayer.SD}</p> */}
        </Modal>
      )}
    </div>
  );
}

export default ContestTables;
