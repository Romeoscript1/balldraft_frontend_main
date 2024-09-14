"use client";

import React, { useState } from "react";
import { Checkbox, Menu } from "antd";
import TransactionSider from "@/components/transaction/TransactionSider";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Loader from "@/components/Loader";
import { getAccessToken } from "@/constants/constants";
import usePostData from "@/Hooks/usePostData";

const Page = () => {
  const router = useRouter();
  const [ngnAmmount, setNgnAmount] = useState("");

  const { loading, postData } = usePostData();

  const onInputChange = (e) => {
    setNgnAmount(e.target.value);
  };

  const url = process.env.NEXT_PUBLIC_API_URL;

  const openPopupWindow = (url) => {
    if (typeof window != "undefined") {
      const windowFeatures = "popup,width=600,height=600";
      window.open(url, "_blank", windowFeatures);
    }
  };

  const handleFormSubmision = (e) => {
    e.preventDefault();
    if (ngnAmmount == "") {
      toast.error("Please enter a value");
      return;
    }
    const apiUrl = `${url}/profile/payments/create/`;
    postData(
      apiUrl,
      { ngn_amount: ngnAmmount },
      (data) => {
        openPopupWindow(data.payment_url);
      },
      (error) => {
        toast.error(error);
      }
    );
  };

  return (
    <div className="p-[1rem]">
      {loading && <Loader />}
      <div>
        <p className="text-black text-[0.9rem] leading-6">{`Secure your competitive edge with a quick and seamless deposit process. Our system allows you to focus uninterrupted on building your dream team. Deposit $50 and receive a $10 bonus, deposit $100 for an additional $25, or deposit $200 to earn a whopping $60 bonus. Don't miss out on these incredible offers to enhance your fantasy sports experience. Start depositing now to secure extra funds.`}</p>
      </div>

      <section className="w-full mt-7 flex flex-col-reverse sm:flex-row gap-4">
        <TransactionSider totalBalance={10.0} />

        <div className="w-full sm:w-[60%] flex flex-col items-center">
          <div className="text-center flex flex-col items-center">
            <h1 className="text-2xl font-medium text-denary">
              Claim Your Free Entry!
            </h1>
            <p className="text-black text-[0.9rem] md:text-[0.9rem]">
              After entering your payment account information, you will be asked
              to verify by logging in with your bank credentials, so you will be
              required to log in every time you deposit.
            </p>

            <div className="w-[90%] flex flex-col items-center justify-center mt-5">
              <div className="w-full text-start mt-8">
                <p className="text-black text-[0.8rem] font-medium">Amount</p>

                <form
                  action=""
                  className="w-full flex flex-col items-center gap-4"
                  onSubmit={handleFormSubmision}
                >
                  <input
                    type="number"
                    className="bg-[#F5F5F5] px-4 py-3 rounded-md w-full"
                    placeholder="NGN amount"
                    onChange={onInputChange}
                  />

                  <button
                    className="bg-denary text-white w-full p-3 rounded-full mt-4"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>

              <button
                className="bg-white border border-denary text-denary w-full p-3 rounded-full mt-4"
                onClick={router.back.bind(null)}
              >
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
