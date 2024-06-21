"use client";
import Icon from "@/Reusable/Icons/Icons";
import React, { useEffect, useState } from "react";
import MobileModal from "./MobileModal";
import AddressModal from "./AddressModal";
import { useFetchDataPlans } from "@/Hooks/useFetch";
import axios from "axios";

const ProfileForm = () => {
  const apiUrl = "https://api.balldraft.com/api/v1/profile/"; // Replace with your actual API URL
  const { data, isLoading, error } = useFetchDataPlans(apiUrl);
  const [formData, setFormData] = useState({
    username: "",
    address: "",
    mobile_number: "",
    bank: "",
    account_number: "",
    account_name: "",
  });
  const [originalData, setOriginalData] = useState({});
  const [changes, setChanges] = useState({});

  useEffect(() => {
    if (data) {
      setFormData({
        username: data.username || "",
        address: data.address || "",
        mobile_number: data.mobile_number || "",
        bank: data.bank || "",
        account_number: data.account_number || "",
        account_name: data.account_name || "",
      });
      setOriginalData({
        username: data.username || "",
        address: data.address || "",
        mobile_number: data.mobile_number || "",
        bank: data.bank || "",
        account_number: data.account_number || "",
        account_name: data.account_name || "",
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (originalData[name] !== value) {
      setChanges({ ...changes, [name]: true });
    } else {
      const newChanges = { ...changes };
      delete newChanges[name];
      setChanges(newChanges);
    }
  };

  const handleUpdate = async (field) => {
    try {
      await axios.patch(
        apiUrl,
        { [field]: formData[field] },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
          },
        }
      );
      alert("Profile updated successfully");
      setOriginalData({ ...originalData, [field]: formData[field] });
      const newChanges = { ...changes };
      delete newChanges[field];
      setChanges(newChanges);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-6 rounded-lg w-[70%]">
      <div className="flex flex-col items-center gap-4 text-[#012C51] my-[2rem]">
        <img
          className=" w-20 h-20 rounded-full object-cover"
          src="https://via.placeholder.com/80"
          alt="Avatar"
        />
        Edit Profile
      </div>

      <div className="space-y-4 text-black">
        <div className="flex flex-col items-start">
          <label className="w- font-medium">Full Name:</label>
          <div className="flex items-center w-full border rounded-lg">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="flex-grow p-2 bg-transparent focus:outline-none"
            />
            <button
              className={`p-2 text-white bg-[#012C51] rounded-full flex gap-2 ${
                changes.username ? "bg-blue-600" : "bg-gray-600"
              }`}
              onClick={() => handleUpdate("username")}
              disabled={!changes.username}
            >
              <Icon type="edit" /> {changes.username ? "Save" : "Edit"}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <label className="w-32 font-medium">Email Address:</label>
          <div className="flex items-center w-full border rounded-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="flex-grow p-2 bg-transparent focus:outline-none"
            />
            <button
              className={`p-2 text-white bg-[#012C51] rounded-full flex gap-2 ${
                changes.email ? "bg-blue-600" : "bg-gray-600"
              }`}
              onClick={() => handleUpdate("email")}
              disabled={!changes.email}
            >
              <Icon type="edit" /> {changes.email ? "Save" : "Change"}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <label className="w-32 font-medium">Date of Birth:</label>
          <div className="flex items-center w-full border rounded-lg">
            <input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              className="flex-grow p-2 bg-transparent focus:outline-none"
            />
            <button
              className={`p-2 text-white bg-[#012C51] rounded-full flex gap-2 ${
                changes.date_of_birth ? "bg-blue-600" : "bg-gray-600"
              }`}
              onClick={() => handleUpdate("date_of_birth")}
              disabled={!changes.date_of_birth}
            >
              <Icon type="edit" /> {changes.date_of_birth ? "Save" : "Edit"}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <label className=" font-medium">Address Or Residence</label>
          {formData.address ? (
            <div className="flex items-center w-full border rounded-lg">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="flex-grow p-2 bg-transparent focus:outline-none"
              />
              <button
                className={`p-2 text-white bg-[#012C51] rounded-full flex gap-2 ${
                  changes.address ? "bg-blue-600" : "bg-gray-600"
                }`}
                onClick={() => handleUpdate("address")}
                disabled={!changes.address}
              >
                <Icon type="edit" /> {changes.address ? "Save" : "Edit"}
              </button>
            </div>
          ) : (
            <AddressModal
              address={formData.address}
              onUpdate={(value) =>
                handleChange({ target: { name: "address", value } })
              }
              onSave={() => handleUpdate("address")}
            />
          )}
        </div>
        <div className="flex flex-col items-start">
          <label className="w-32 font-medium">Mobile Number</label>
          <MobileModal
            mobile_number={formData.mobile_number}
            onUpdate={(value) =>
              handleChange({ target: { name: "mobile_number", value } })
            }
            onSave={() => handleUpdate("mobile_number")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
