"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  getFormattedDate,
  getUserImageOrdefault,
  isAuthenticated,
} from "@/constants/constants";
import LoadingTemplate from "@/components/LoadingTemplate";
import { getAccessToken } from "@/constants/constants";

import { GrTransaction } from "react-icons/gr";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  RiArrowDownCircleFill,
  RiArrowDownCircleLine,
  RiArrowDownLine,
  RiArrowUpCircleFill,
  RiArrowUpLine,
  RiBellLine,
  RiMailLine,
  RiSendBackward,
} from "react-icons/ri";

const Page = () => {
  const userAuth = isAuthenticated();

  const [loading, setLoading] = useState(true);
  const url = process.env.NEXT_PUBLIC_API_URL;
  const [profile, setProfile] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("all transactions");

  const [allTransactions, setAllTransactions] = useState([]);
  const [transactionList, setTransactionList] = useState([]);
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  const [transactionLoading, setTransactionLoading] = useState(true);

  const getTransactionList = (allTransactions) => {
    if (selectedCategory == "all transactions") return allTransactions;
    return allTransactions.filter(
      (transaction) => transaction.category.toLowerCase() === selectedCategory
    );
  };

  useEffect(() => {
    setTransactionLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/profile/transactions/`, {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        });

        setAllTransactions(response.data);
      } catch (error) {
        toast.error("Error fetching transactions, please try again");
        console.error(error);
      }

      setTransactionLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setTransactionList(getTransactionList(allTransactions));
  }, [allTransactions, selectedCategory]);

  useEffect(() => {
    setIsProfileLoading(true);
    const apiUrl = `${url}/profile`;

    if (typeof window !== "undefined" && !userAuth) {
      router.push("/Auth/login");
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        });
        setProfile(response.data);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching profile");
      }

      setIsProfileLoading(false);
    };

    fetchData();
  }, []);

  const categoryList = [
    ...new Set(allTransactions.map((transaction) => transaction.category)),
    "All transactions",
  ];

  const selectCateory = (category) => {
    setSelectedCategory(category.toLowerCase());
    setTransactionList(getTransactionList(allTransactions));
  };

  /**
   * Returns the side icon based on the transaction category
   * @param {string} category - The transaction category
   * @returns {JSX.Element} The side icon
   */
  const getSideIcon = (category) => {
    if (category.toLowerCase() === "deposit") {
      return (
        <div className="border-[0.5px] p-2">
          <RiArrowDownLine className="fill-[#00C31F]" size={24} />
        </div>
      );
    }

    if (category.toLowerCase() === "withdrawal") {
      return (
        <div className="border-[0.5px] p-2">
          <RiArrowUpLine className="fill-[#F8B300]" size={24} />
        </div>
      );
    }

    return (
      <div className="border-[0.5px] p-2">
        <RiBellLine className="fill-[#F8B300]" size={24} />
      </div>
    );
  };

  return (
    <section className="p-5 flex flex-row max-md:flex-col gap-10 w-full">
      <aside className="flex flex-col w-[20%] max-md:w-full">
        {isProfileLoading ? (
          <LoadingTemplate size={50}/>
        ) : (
          <div className="flex flex-row gap-3 items-center">
            <img
              src={getUserImageOrdefault(profile?.image)}
              alt=""
              className="w-[40px] h-[40px] rounded-full object-cover object-center"
            />

            <div className="flex flex-col">
              <p className="text-black font-poppins font-medium">
                {profile.username}
              </p>
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-col max-md:flex-row max-md:items-center gap-5 max-sm:flex-wrap">
          {categoryList.map((item) => {
            return (
              <div
                onClick={selectCateory.bind(null, item)}
                key={`transaction-cat-${item}`}
                className={`cursor-pointer text-black ${
                  item.toLowerCase() === selectedCategory &&
                  "bg-denary rounded-md text-white p-3 text-sm font-poppins w-max flex-shrink-0"
                }`}
              >
                <p className="font-poppins text-sm">{item}</p>
              </div>
            );
          })}

          {/* <button className="bg-denary rounded-md text-white p-3 text-sm font-poppins w-max md:mt-6 flex-shrink-0">
            All transactions
          </button> */}
        </div>
      </aside>

      <div className="w-[80%] max-md:w-full max-sm:overflow-scroll">
        <h1 className="text-denary text-[1.3rem] font-bold ">
          Current balance: {profile.account_balance} NGN
        </h1>

        {transactionLoading ? (
          <LoadingTemplate size={50}/>
        ) : (
          <Table className="mt-10 max-sm:w-[600px]">
            <TableCaption>Transaction History.</TableCaption>
            {/* <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader> */}

            <TableBody>
              {transactionList.map((item) => {
                return (
                  <TableRow key={`transaction-${item.id}`}>
                    <TableCell className="font-medium text-black flex flex-row items-center gap-2">
                      {getSideIcon(item.category)}
                      {item.category}
                    </TableCell>

                    <TableCell className="text-slate-400">
                      {item.action}
                    </TableCell>
                    <TableCell>
                      {getFormattedDate(new Date(item.time))}
                    </TableCell>
                    <TableCell>
                      {getFormattedDate(new Date(item.time), false)}
                    </TableCell>

                    {/* <TableCell className="text-right">$250.00</TableCell> */}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}

        {/* <Balance profile={profile}/> */}
      </div>
    </section>
  );
};

export default Page;
