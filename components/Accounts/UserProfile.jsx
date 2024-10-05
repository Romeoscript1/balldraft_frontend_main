// UserProfile.js
import React from "react";
import CircularProgressBar from "./CircuarProgressBar";
import { getUserImageOrdefault } from "@/constants/constants";

const UserProfile = ({profile}) => {
  return (
    <section className="flex flex-col  gap-4 flex-shrink-0">
      <div
        className="radial-progress text-primary flex-shrink-0"
        style={{ "--value": "100", "--size": "4rem" }}
        role="progressbar"
      >
        <img
          className=" w-14 h-14 rounded-full object-cover"
          src={getUserImageOrdefault(profile.image)}
          alt="profile"
        />
      </div>
      <div>
        <h2 className="text-2xl text-black text-[1.14rem] font-medium font-poppins">
          {profile.username}
        </h2>
        <p className="font-[0.9rem] font-poppins">{profile.email}</p>
        {/* <p className="font-[0.9rem]">Your profile is 75% complete</p> */}
        {/* <a className="text-[1.1rem] text-black font-poppins" href="/Dashboard/settings/">Settings</a> */}
      </div>
    </section>
  );
};

export default UserProfile;
