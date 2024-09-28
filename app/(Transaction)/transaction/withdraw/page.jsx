"use client";

import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Checkbox, Menu } from "antd";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TransactionSider from "@/components/transaction/TransactionSider";
import { isAuthenticated } from "@/constants/constants";
import { useEffect } from "react";
import axios from "axios";
import { getAccessToken } from "@/constants/constants";
import toast from "react-hot-toast";
import Loader from "@/components/Loader";
import usePostData from "@/Hooks/usePostData";

const Page = () => {
  const items = [
    {
      key: "sub1",
      label: "Navigation One",
      icon: <MailOutlined />,
      children: [
        {
          key: "g1",
          label: "Item 1",
          type: "group",
          children: [
            {
              key: "1",
              label: "Option 1",
            },
            {
              key: "2",
              label: "Option 2",
            },
          ],
        },
        {
          key: "g2",
          label: "Item 2",
          type: "group",
          children: [
            {
              key: "3",
              label: "Option 3",
            },
            {
              key: "4",
              label: "Option 4",
            },
          ],
        },
      ],
    },
    {
      key: "sub2",
      label: "Navigation Two",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "5",
          label: "Option 5",
        },
        {
          key: "6",
          label: "Option 6",
        },
        {
          key: "sub3",
          label: "Submenu",
          children: [
            {
              key: "7",
              label: "Option 7",
            },
            {
              key: "8",
              label: "Option 8",
            },
          ],
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "sub4",
      label: "Navigation Three",
      icon: <SettingOutlined />,
      children: [
        {
          key: "9",
          label: "Option 9",
        },
        {
          key: "10",
          label: "Option 10",
        },
        {
          key: "11",
          label: "Option 11",
        },
        {
          key: "12",
          label: "Option 12",
        },
      ],
    },
    {
      key: "grp",
      label: "Group",
      type: "group",
      children: [
        {
          key: "13",
          label: "Option 13",
        },
        {
          key: "14",
          label: "Option 14",
        },
      ],
    },
  ];

  const bankList = [
    { bank_name: "Access Bank", bank_code: "044" },
    { bank_name: "Citibank Nigeria", bank_code: "023" },
    { bank_name: "Diamond Bank", bank_code: "063" },
    { bank_name: "Ecobank Nigeria", bank_code: "050" },
    { bank_name: "Fidelity Bank", bank_code: "070" },
    { bank_name: "First Bank of Nigeria", bank_code: "011" },
    { bank_name: "First City Monument Bank", bank_code: "214" },
    { bank_name: "Guaranty Trust Bank", bank_code: "058" },
    { bank_name: "Heritage Bank", bank_code: "030" },
    { bank_name: "Keystone Bank", bank_code: "082" },
    { bank_name: "Polaris Bank", bank_code: "076" },
    { bank_name: "Providus Bank", bank_code: "101" },
    { bank_name: "Stanbic IBTC Bank", bank_code: "221" },
    { bank_name: "Standard Chartered Bank", bank_code: "068" },
    { bank_name: "Sterling Bank", bank_code: "232" },
    { bank_name: "Suntrust Bank", bank_code: "100" },
    { bank_name: "Union Bank of Nigeria", bank_code: "032" },
    { bank_name: "United Bank for Africa", bank_code: "033" },
    { bank_name: "Unity Bank", bank_code: "215" },
    { bank_name: "Wema Bank", bank_code: "035" },
    { bank_name: "Zenith Bank", bank_code: "057" },
    { bank_name: "AB Microfinance Bank", bank_code: "090134" },
    { bank_name: "Addosser Microfinance Bank", bank_code: "090135" },
    { bank_name: "BoI Microfinance Bank", bank_code: "090136" },
    { bank_name: "Fina Trust Microfinance Bank", bank_code: "090137" },
    { bank_name: "Fortis Microfinance Bank", bank_code: "090138" },
    { bank_name: "Lapo Microfinance Bank", bank_code: "090139" },
    { bank_name: "Mainstreet Microfinance Bank", bank_code: "090140" },
    { bank_name: "Microcred Microfinance Bank", bank_code: "090141" },
    { bank_name: "Mutual Trust Microfinance Bank", bank_code: "090142" },
    { bank_name: "NPF Microfinance Bank", bank_code: "090143" },
    { bank_name: "Seed Capital Microfinance Bank", bank_code: "090144" },
    { bank_name: "Sparkle Microfinance Bank", bank_code: "090145" },
    { bank_name: "VFD Microfinance Bank", bank_code: "090146" },
    { bank_name: "Opay", bank_code: "305" },
    { bank_name: "Palmpay", bank_code: "311" },
    { bank_name: "Kuda", bank_code: "50211" },
    { bank_name: "Moniepoint", bank_code: "50515" },
  ];

  const url = process.env.NEXT_PUBLIC_API_URL;
  const userAuth = isAuthenticated();

  const { isLoading, postData } = usePostData();
  const [loading, setLoading] = useState(false)
   //TODO: implement a central place for loading profile
  const profileUrl = `${url}/profile`;
  const [profile, setProfile] = useState({});
  const [bankName, setBankName] = useState(null);
  const [accountNumber, setAccountNumber] = useState(null);
  const [ngnAmmount, setNgnAmmount] = useState(null);
  const [comment, setComment] = useState(null);

  // const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && !userAuth) {
      router.push("/Auth/login");
    }
    const fetchData = async () => {
      try {
        const response = await axios.get(profileUrl, {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        toast.error("Error fetching profile");
      }
    };

    fetchData();
  }, []);

  const onFormSubmitted = () => {
    
    if (!bankName || !accountNumber || !ngnAmmount || !comment) {
      toast.error(`Please provide your complete information`);
    }

    const requestBody = {
      "ngn_amount": ngnAmmount,
      "bank_name": bankName,
      "account_number": accountNumber,
      "comment": comment,
    }

    setLoading(true)
    const apiUrl = `${url}/profile/withdrawals/create/`;
    postData(
      apiUrl,
      requestBody,
      (data) => {
        toast.success("Withdrawal request submitted successfully");
        setLoading(false)
      },
      (error) => {
        error = JSON.parse(error)
        const message = `${error?.error || ''} ${error?.details || ''}`
        toast.error(message == ''?'Withdrawal request failed':message);
        setLoading(false)
      },
    );

  };

  return (
    <div className="p-[1rem]">
      {loading && <Loader />}
      <div>
        <p className="text-black text-[0.9rem] leading-6">{`Secure your competitive edge with a quick and seamless deposit process. Our system allows you to focus uninterrupted on building your dream team. Deposit ₦50 and receive a ₦10 bonus, deposit ₦100 for an additional ₦25, or deposit ₦200 to earn a whopping ₦60 bonus. Don't miss out on these incredible offers to enhance your fantasy sports experience. Start depositing now to secure extra funds.`}</p>
      </div>

      <section className="w-full mt-7 flex flex-col sm:flex-row gap-4">
        <TransactionSider totalBalance={profile?.account_balance || 0} />

        <div className="w-full sm:w-[60%] flex flex-col items-center">
          <div className="text-center flex flex-col items-center">
            <h1 className="text-2xl font-medium text-denary">
              Withdraw Your Available Funds
            </h1>
            <p className="text-black text-[0.9rem] md:text-[0.9rem]">
              Please provide your account details, and the requested funds will be transferred to your designated bank account.
            </p>

            <div className="w-[90%] flex flex-col items-center justify-center mt-5">
              {/* <Menu
                onClick={onClick}
                style={{
                  width: '100%',
                }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                items={items}
                className="w-full"
              /> */}
              <div className="w-full text-start">
                <p className="text-black text-[0.8rem] font-medium">
                  Select bank
                </p>

                <Select onValueChange={(e) => setBankName(e)}>
                  <SelectTrigger className="w-full bg-[#F5F5F5] border border-[#808080] mt-3">
                    <SelectValue placeholder="Select Bank" />
                  </SelectTrigger>
                  <SelectContent
                    className="bg-white"
                    side="bottom"
                    avoidCollisions={false}
                    align="start"
                  >
                    {bankList.map((bank) => {
                      return (
                        <SelectItem value={bank.bank_name} key={bank.bank_name}>
                          {bank.bank_name}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full text-start mt-8">
                <p className="text-black text-[0.8rem] font-medium">
                  PAYMENT DETAILS
                </p>

                <form
                  action=""
                  className="w-full flex flex-col items-center gap-4"
                >
                  <input
                    type="text"
                    className="bg-[#F5F5F5] px-4 py-3 rounded-md w-full"
                    placeholder="Account number"
                    onInput={(e)=>{setAccountNumber(e.target.value)}}
                  />
                  <input
                    type="number"
                    className="bg-[#F5F5F5] px-4 py-3 rounded-md w-full"
                    placeholder="Ammount in Naira"
                    onInput={(e)=>{setNgnAmmount(e.target.value)}}
                  />
                  <textarea
                    name=""
                    id=""
                    rows={5}
                    className="bg-[#F5F5F5] px-4 py-3 rounded-md w-full"
                    placeholder="Comment (optional)"
                    onInput={(e)=>{setComment(e.target.value)}}
                  ></textarea>
                  {/* <div className="flex flex-row gap-2 w-full">
                    <input
                      type="text"
                      className="bg-[#F5F5F5] px-4 py-3 rounded-md w-full"
                      placeholder="CVV"
                    />
                    <input
                      type="text"
                      className="bg-[#F5F5F5] px-4 py-3 rounded-md w-full"
                      placeholder="Expiry date"
                    />
                  </div> */}
                </form>
              </div>

              <div className="flex flex-row items-start mt-5 text-start gap-2">
                <Checkbox />
                <p className="text-[#808080]">
                  By clicking “Save change” you confirm that you are the account
                  holder.
                </p>
              </div>
              <button
                className="bg-denary text-white w-full p-3 rounded-full mt-4"
                onClick={onFormSubmitted}
              >
                Save changes
              </button>
              <button className="bg-white border border-denary text-denary w-full p-3 rounded-full mt-4">
                Go back
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
