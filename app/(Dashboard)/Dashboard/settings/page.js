"use client";
import React, { useState, useEffect } from "react";
import MainContent from "@/components/Accounts/MainContent";
import ChangeEmail from "@/components/Accounts/Settings/ChangeEmail";
import ChangePassword from "@/components/Accounts/Settings/ChangePassword";
import ProfileForm from "@/components/Accounts/Settings/ProfileForm";
import Sider from "@/components/Accounts/Settings/Sider";
import Deactivate from "@/components/Accounts/Settings/Deactivate";

const Page = () => {
  const [activeComponent, setActiveComponent] = useState("ProfileForm");

  useEffect(() => {
    const savedComponent = localStorage.getItem("activeComponent");
    if (savedComponent) {
      setActiveComponent(savedComponent);
    }
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case "ProfileForm":
        return <ProfileForm />;
      case "ChangeEmail":
        return <ChangeEmail />;
      case "ChangePassword":
        return <ChangePassword />;
      case "TwoFactorAuth":
        return <div>2-Factor Authentication Component</div>;
      case "DeactivateAccount":
        return <Deactivate />;
      default:
        return <ProfileForm />;
    }
  };

  return (
    <section className="bg-white">
      <div className="flex gap-4 p-[1rem] min-[890px]:min-h-screen justify-between max-[890px]:flex-col ">
        <Sider
          setActiveComponent={setActiveComponent}
          activeComponent={activeComponent}
        />

        <div className="w-4/5 max-[890px]:w-full">{renderComponent()}</div>
      </div>
    </section>
  );
};

export default Page;
