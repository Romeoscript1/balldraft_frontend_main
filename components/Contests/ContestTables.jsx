import React, { useEffect, useMemo, useState } from 'react';
import { Table, Avatar, Modal } from 'antd';
import logo from '@/public/images/logo.png';



function ContestTables({ card }) {
    const [availablePlayers, setAvailablePlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [activeButton, setActiveButton] = useState("All");
    const [searchText, setSearchText] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalPlayer, setModalPlayer] = useState(null);
console.log(card, 'fucked the bullshit')

    const players = useMemo(() => {
        const transformHomeTeam = card?.home_team[0]?.players.map(player => ({
            ...player,
            team: card?.home_team[0].team.name,
        }));
        const transformAwayTeam = card?.away_team[0]?.players.map(player => ({
            ...player,
            team: card.away_team[0].team.name,
        }));
        return [...transformHomeTeam, ...transformAwayTeam]
    }, [card.away_team, card.home_team])

    useEffect(() => {
        setAvailablePlayers(players);
    }, [players])


    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        filterPlayers(buttonName, searchText);
    };

    // Function to handle search input
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchText(value);
        filterPlayers(activeButton, value);
    };

    // Function to filter players based on position and search text
    const filterPlayers = (position, text) => {
        let filteredPlayers = players;
        if (position !== "All") {
            filteredPlayers = filteredPlayers.filter(player => player.position === position);
        }
        if (text) {
            filteredPlayers = filteredPlayers.filter(player => player.name.toLowerCase().includes(text.toLowerCase()));
        }
        console.log(filteredPlayers);
        setAvailablePlayers(filteredPlayers);
    };

    const addPlayer = (player) => {
        setSelectedPlayers([...selectedPlayers, player]);
        setAvailablePlayers(availablePlayers.filter(p => p.id !== player.id));
    };

    const removePlayer = (player) => {
        setAvailablePlayers([...availablePlayers, player]);
        setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
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


    const columns = [
        {
            title: 'NAME',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <a onClick={() => showModal(record)} style={{ cursor: 'pointer' }}>
                    {text}
                </a>
            ),
        },
        { title: 'POSITION', dataIndex: 'position', key: 'position' },
        { title: 'TEAM', dataIndex: 'team', key: 'team' },
        { title: 'AGE', dataIndex: 'age', key: 'age' },
        { title: 'NUMBER', dataIndex: 'number', key: 'number' },
        {
            render: (text, record) => (
                <button className='rounded-[20px] border-[1px] text-[#012C51] p-[0.5rem] border-[#012C51]' onClick={() => addPlayer(record)}>
                    Add
                </button>
            ),
        },
    ];

    const selectedColumns = [
        {
            title: 'NAME',
            dataIndex: 'name',
            key: 'name',
            render: (text) => (
                <span>
                    <Avatar style={{ marginRight: 8 }}>P</Avatar>
                    {text}
                </span>
            ),
        },
        { title: 'POSITION', dataIndex: 'position', key: 'position' },
        { title: 'TEAM', dataIndex: 'team', key: 'team' },
        {
            render: (text, record) => (
                <button className='rounded-[20px] border-[1px] text-[red] p-[0.5rem] border-[red]' onClick={() => removePlayer(record)}>
                    Remove
                </button>
            ),
        },
    ];

    return (
        <div className='flex flex-col lg:flex-row gap-8'>
            <div className="flex-[1.5] ">
                <div className="flex mb-[1.5rem]">
                    <button
                        className={`px-[0.7rem] text-sm py-[0.5rem]  rounded-[20px] m-1 ${activeButton === "All" ? "bg-gray-500 text-white" : "border-[2px]"}`}
                        onClick={() => handleButtonClick("All")}
                    >
                        All
                    </button>
                    <button
                        className={`px-[0.8rem] text-sm rounded-[20px] m-1 ${activeButton === "Goalkeeper" ? "bg-gray-500 text-white" : "border-[2px]"}`}
                        onClick={() => handleButtonClick("Goalkeeper")}
                    >
                        Goalkeeper
                    </button>
                    <button
                        className={`px-[0.7rem] text-sm rounded-[20px] m-1 ${activeButton === "Defender" ? "bg-gray-500 text-white" : "border-[2px]"}`}
                        onClick={() => handleButtonClick("Defender")}
                    >
                        Defender
                    </button>
                    <button
                        className={`px-[0.7rem] text-sm rounded-[20px] m-1 ${activeButton === "Midfielder" ? "bg-gray-500 text-white" : "border-[2px]"}`}
                        onClick={() => handleButtonClick("Midfielder")}
                    >
                        Midfielder
                    </button>
                    <button
                        className={`px-[0.7rem] text-sm  rounded-[20px] m-1 ${activeButton === "Attacker" ? "bg-gray-500 text-white" : "border-[2px]"}`}
                        onClick={() => handleButtonClick("Attacker")}
                    >
                        Attacker
                    </button>

                    <label className="input input-bordered flex items-center gap-2 mx-[1rem] bg-white rounded-full">
                        <input type="text" className="grow" onChange={handleSearch} placeholder="Search players" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                <Table columns={columns} dataSource={availablePlayers} className="blue-header no-border" rowKey="key" />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-8 px-5 mb-[1.3rem] text-black">
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <span className="text-[#808080] text-[0.7rem]">Total Salary</span>{" "}
                        <span className="font-semibold text-md">$1000 USD</span>
                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <span className="text-[#808080] text-[0.7rem]">Remaining</span>{" "}
                        <span className="font-semibold text-md">$1000 USD</span>
                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <span className="text-[#808080] text-[0.7rem]">FPPG</span>{" "}
                        <span className="font-semibold text-md">0.00</span>
                    </div>
                </div>
                <Table columns={selectedColumns} dataSource={selectedPlayers} className="blue-header no-border" rowKey="key" />
            </div>
            {modalPlayer && (
                <Modal
                    title="Player Information"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    style={{ top: 20 }}
                    bodyStyle={{ height: 400, overflowY: 'auto' }}
                >
                    <div className='flex justify-between gap-4'>
                        <aside className='basis-[49%]'>
                            <img src={modalPlayer.image} alt={modalPlayer.name}
                                style={{ width: '100%', marginTop: '10px' }} />
                        </aside>
                        <aside className='basis-[49%]'>
                            <p className='text-2xl font-bold'> {modalPlayer.name}</p>

                            <p className='border inline-block rounded-full my-[1rem] border-[black] px-[0.3rem] text-xl'> ${modalPlayer.salary}</p>
                            <hr />
                            <p>{modalPlayer.nextGame}</p>
                            <div className='flex justify-between my-[1rem]'>
                                <p>
                                    Standard Deviation <br />
                                    <span className='font-bold text-xl'> $1000 USD</span>
                                </p>
                                <p>
                                    FPPG <br />
                                    <span className='font-bold text-xl'> 0.00</span>
                                </p>
                            </div>
                            <div className='flex text-xl text-gray-500 mb-[1rem]'>
                                <p>HOU : 43.5</p>

                                <p>BUF : -3.5</p>
                            </div>
                            <button className='bg-[#012C51] text-white rounded-full w-full p-[0.5rem]'>
                                Draft Player
                            </button>
                        </aside>
                    </div>

                    <div className='flex'>
                        <aside className='basis-[49%]'>
                        <p>{modalPlayer.nextGame}</p>
                            <img src={logo.src} className='w-24' alt="" />
                        </aside>
                        <aside className='basis-[49%]'>
                            <div className='bg-[#F9F9F9] rounded-md mb-[1rem] mt-[1rem]'>
                                <h2 className='text-black text-lg'>Ball-Draft Platform</h2>
                                <p className='flex gap-4 my-[0.5rem] text-sm text-gray-500'><span>2 days ago</span> <li className='list-disc'>Highlight</li></p>
                                <p className='text-[12px]'>Gabe Davis reeled in five of his nine targets for 26 yards and a touchdown during the 2023 regular session.
                                    Advice: Bell provided a serviceable backup veteran tight end for the Chiefs in 2023. But, he sat clearly behind Travis Kelce and Noag Gabe in the pecking order. Bulldozer’s contract expires following the season.</p>
                            </div>
                            <div className='bg-[#F9F9F9] rounded-md'>
                                <h2 className='text-black text-lg'>Ball-Draft Platform</h2>
                                <p className='flex gap-4 my-[0.5rem] text-sm text-gray-500'><span>2 days ago</span> <li className='list-disc'>Highlight</li></p>
                                <p className='text-[12px]'>Gabe Davis reeled in five of his nine targets for 26 yards and a touchdown during the 2023 regular session.
                                    Advice: Bell provided a serviceable backup veteran tight end for the Chiefs in 2023. But, he sat clearly behind Travis Kelce and Noag Gabe in the pecking order. Bulldozer’s contract expires following the season.</p>
                            </div>
                        </aside>
                    </div>
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
