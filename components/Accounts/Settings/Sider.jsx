import React, { useState } from "react";
import Icon from "@/Reusable/Icons/Icons";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { RiMailSettingsLine } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";

import { TbUserCancel } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Sider = ({ setActiveComponent, activeComponent }) => {
  
  const [activeName, setActiveName] = useState('Profile')
  const handleClick = (component, componentName='') => {
    setActiveComponent(component);
    setActiveName(componentName)
    localStorage.setItem("activeComponent", component);
  };

  const getBars = () => {
    return (
      <div className="flex flex-col gap-20 justify-between">
        <ul className="text-sm flex flex-col gap-6">
          <li
            className={`cursor-pointer p-2 flex items-center gap-3 text-[#012C51] py-[0.5rem] hover:text-white hover:bg-[#012c51] rounded-md ${
              activeComponent === "ProfileForm" ? "bg-[#012c51] text-white" : ""
            }`}
            onClick={() => handleClick("ProfileForm", 'Profile')}
          >
            <HiOutlineUserCircle size={25} />
            Profile
          </li>
          <li
            className={`cursor-pointer p-2 flex items-center gap-3 text-[#012C51] py-[0.5rem] hover:text-white hover:bg-[#012c51] rounded-md ${
              activeComponent === "ChangeEmail" ? "bg-[#012c51] text-white" : ""
            }`}
            onClick={() => handleClick("ChangeEmail", 'Change email')}
          >
            <RiMailSettingsLine size={25} />
            Change Email
          </li>
          <li
            className={`cursor-pointer p-2 flex items-center gap-3 text-[#012C51] py-[0.5rem] hover:text-white hover:bg-[#012c51] rounded-md ${
              activeComponent === "ChangePassword"
                ? "bg-[#012c51] text-white"
                : ""
            }`}
            onClick={() => handleClick("ChangePassword", 'Change Password')}
          >
            <RiLockPasswordLine size={25} />
            Change Password
          </li>
          {/* <li
      className={`cursor-pointer flex items-center gap-3 text-[#012C51] py-[0.5rem] hover:text-white hover:bg-[#012c51] rounded-md ${
        activeComponent === "TwoFactorAuth"
          ? "bg-[#012c51] text-white"
          : ""
      }`}
      onClick={() => handleClick("TwoFactorAuth")}
    >
      <Icon type="twofactor" /> 2-Factor Authentication
    </li> */}
          <li
            className={`cursor-pointer flex items-center gap-3 text-[#FF0000] py-[0.5rem] hover:text-white hover:bg-[#012c51] rounded-md ${
              activeComponent === "DeactivateAccount"
                ? "bg-[#012c51] text-white"
                : ""
            }`}
            onClick={() => handleClick("DeactivateAccount", 'Deactivate account')}
          >
            <TbUserCancel size={25} />
            Deactivate Account
          </li>
        </ul>
      </div>
    );
  };
  return (
    <>
      <div className="w-full s8:hidden relative font-poppins">
        <Popover className="w-full s8:hidden relative font-poppins">
          <PopoverTrigger className="w-full bg-white border rounded-md p-3 border-[#616161]">
            <div className="w-full flex flex-row justify-between items-center">
              <p>{activeName}</p>

              <IoIosArrowDown />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[100vw] max-w-none bg-white">
            {getBars()}
          </PopoverContent>
        </Popover>
      </div>
      <div className="border-r-[1px] w-[20%] border-gray p-[1rem] max-[890px]:hidden">
        {getBars()}
      </div>
    </>
  );
};

export default Sider;
