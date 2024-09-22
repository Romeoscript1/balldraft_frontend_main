import React from "react";
import Icon from "@/Reusable/Icons/Icons";

const Sider = ({ setActiveComponent, activeComponent }) => {
  const handleClick = (component) => {
    setActiveComponent(component);
    localStorage.setItem("activeComponent", component);
  };

  return (
    <div className="border-r-[1px] w-[20%] border-gray p-[1rem] max-[890px]:hidden">
      <div className="flex flex-col gap-20 justify-between">
        <ul className="text-sm">
          <li
            className={`cursor-pointer flex items-center gap-3 text-[#012C51] py-[0.5rem] hover:text-white hover:bg-[#012c51] rounded-md ${
              activeComponent === "ProfileForm" ? "bg-[#012c51] text-white" : ""
            }`}
            onClick={() => handleClick("ProfileForm")}
          >
            <Icon type="profile" /> Profile
          </li>
          <li
            className={`cursor-pointer flex items-center gap-3 text-[#012C51] py-[0.5rem] hover:text-white hover:bg-[#012c51] rounded-md ${
              activeComponent === "ChangeEmail" ? "bg-[#012c51] text-white" : ""
            }`}
            onClick={() => handleClick("ChangeEmail")}
          >
            <Icon type="emailChange" /> Change Email
          </li>
          <li
            className={`cursor-pointer flex items-center gap-3 text-[#012C51] py-[0.5rem] hover:text-white hover:bg-[#012c51] rounded-md ${
              activeComponent === "ChangePassword"
                ? "bg-[#012c51] text-white"
                : ""
            }`}
            onClick={() => handleClick("ChangePassword")}
          >
            <Icon type="passwordChange" /> Change Password
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
            onClick={() => handleClick("DeactivateAccount")}
          >
            <Icon type="deactivate" /> Deactivate Account
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sider;
