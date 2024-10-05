import React from "react";
import UserProfile from "./UserProfile";
import Icon from "@/Reusable/Icons/Icons";
import { FiActivity } from "react-icons/fi";
import { LuHistory } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { LuSettings } from "react-icons/lu";


const Sider = (props) => {
  return (
    <div
      className={`border-r-[1px] border-gray p-[1rem] flex flex-col justify-between ${props.className}`}
    >
      <div className="flex flex-col gap-20 justify-between">
        <UserProfile profile={props.profile} />
        <ul>
          {/* <li className="flex items-center gap-3 text-[#012C51] py-3 px-2 hover:text-white hover:bg-[#012c51] rounded-md">
            {" "}
            <Icon type="tickets" /> Tickets
          </li> */}
          <li className="flex items-center gap-3 text-[#012C51] py-3 px-2 hover:text-white hover:bg-[#012c51] rounded-md">
            <a href="/transaction/activity" className="flex gap-3">
              <FiActivity/>
              Activity Log
            </a>
          </li>
          {/* <li className="flex items-center gap-3 text-[#012C51] py-[0.5rem] hover:text-white hover:bg-[#012c51] rounded-md">
            <Icon type="game" />
            Responsible Gambling
          </li> */}
          <li className="flex items-center text-[#012C51] py-3 px-2 hover:text-white hover:bg-[#012c51] rounded-md">
            <a href="/transaction/" className="flex gap-3 items-center">
              {/* <Icon type="history" /> */}
              <LuHistory size={20}/>
              Transaction History
            </a>
          </li>
          <li className="flex items-center text-[#012C51] py-3 px-2 hover:text-white hover:bg-[#012c51] rounded-md">
            <a href="/Dashboard/settings" className="flex gap-3 items-center">
              {/* <Icon type="history" /> */}
              <LuSettings  size={20}/>
              Account settings
            </a>
          </li>
          {/* <li className="flex items-center gap-3 text-[#012C51] py-[0.5rem] hover:text-white hover:bg-[#012c51] rounded-md">
            <Icon type="tax" />
            Taxing & Forms
          </li> */}
          <li className="flex items-center gap-3 text-[#ff0000] py-3 px-2 hover:text-white hover:bg-[#012c51] rounded-md">
            <IoIosLogOut />
            {/* <Icon type="logout" /> */}
            Sign Out
          </li>
        </ul>
      </div>

      
      {/* <a
        className="flex items-center gap-4 text-[#012C51]"
        href="/Dashboard/settings"
      >
        <img
          className=" w-14 h-14 rounded-full object-cover"
          src="https://via.placeholder.com/80"
          alt="Avatar"
        />
        Account Settings
      </a> */}
    </div>
  );
};

export default Sider;
