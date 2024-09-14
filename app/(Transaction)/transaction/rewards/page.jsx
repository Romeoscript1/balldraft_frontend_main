/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import gift from "@/public/images/giftbox.png";
import Icon from "@/Reusable/Icons/Icons";
import toast from "react-hot-toast";
import facebook from "@/public/images/socials/facebook.png";
import telegram from "@/public/images/socials/telegram.png";
import whatsapp from "@/public/images/socials/whatsapp.png";
import linkedIn from "@/public/images/socials/linkedin.png";
import twitter from "@/public/images/socials/twitter.png";
import beardAvater from '@/public/images/beardAvater.png'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Page = () => {
  const howToList = [
    {
      subject: "Register",
      message:
        "The new user is required to use your referral link to register.",
    },
    {
      subject: "Verify Account",
      message:
        "You and the new user each have to ensure that you’ve verified your ID’s with Balldraft.",
    },
    {
      subject: "Play Through $5 Or Moreter",
      message:
        "Within 30 days of registering on Balldraft, the new is expected to play through $5 or more",
    },
    {
      subject: "Get Rewarded",
      message: "You both get a $15 bonus to play on Balldraft",
    },
  ];

  const referalList = [
    {
      name: "Gabe davis",
      date: "5 days ago",
      status: "complete",
    },
    {
      name: "Gabe davis",
      date: "5 days ago",
      status: "complete",
    },
    {
      name: "Gabe davis",
      date: "5 days ago",
      status: "complete",
    },
  ];

  const referralTableColumns = ["NAME", "DATE", "STATUS"];

  const socials = [facebook, whatsapp, twitter, linkedIn, telegram];

  const referralLink = "https://referral-balldraft-com/bonus?...";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(referralLink)
      .then(() => {
        toast.success("Rererral link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <section className="pb-10">
      <div className="w-full min-h-[80vh] s4:h-[80vh] bg-refer-bg bg-bottom bg-no-repeat flex flex-row justify-between max-s4:flex-col-reverse">
        <div className="w-full s4:w-[50%] h-full flex items-center justify-center">
          <img src={gift.src} alt="" className="w-[500px] max-s4:w-[400px]" />
        </div>

        <div className="h-full flex justify-center flex-col p-5 text-start w-full s4:w-[50%]">
          <h1 className="text-4xl s5:text-6xl font-medium text-black min-[689px]:leading-[80px] leading-[50px]">
            <span className="font-medium">Refer A Friend</span> And{" "}
            <span className="text-mblue100 font-bold">Earn</span>{" "}
            <span className="font-semibold">A Bonus Of</span>{" "}
            <span className="text-mblue100 font-bold">$15</span>
          </h1>
          <p className="text-start text-black">
            For every friend you refer who registers for Balldraft, you’ll
            receive a $15 bonus
          </p>
        </div>
      </div>

      <div className="w-full flex flex-row gap-7 max-s6:flex-col min-h-[100vh] px-6 py-7">
        <div className="w-full s6:w-[50%]">
          <p className="text-black">How To Earn Referral Bonus On Balldraft</p>

          <div className="w-full flex flex-col gap-5 mt-5">
            {howToList.map((item, index) => {
              return (
                <div className="bg-[#F2F2F2] overflow-hidden flex flex-col rounded-lg p-8 relative" key={`howto-${item.subject}`}>
                  <p className="font-medium text-black">{item.subject}</p>
                  <p className="text-slate-900 text-sm">{item.message}</p>

                  <h1 className="absolute right-0 font-[900px] text-[90px] top-0  text-start p-0 mb-5 items-center justify-center opacity-15">
                    {index + 1}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full s6:w-[50%]">
          <div className="border-[3px] border-[#F9F9F9] rounded-[10px] relative input bg-white bordered-input w-full flex items-center p-[0.5rem]">
            <input
              type="text"
              value={referralLink}
              className="text-black bg-white border-none w-full outline-none focus-none"
              readOnly
            />
            <div
              className="bg-[#012C51] flex items-center gap-2 p-[0.5rem] rounded-full absolute top-0 right-0 cursor-pointer text-white"
              onClick={copyToClipboard}
            >
              <Icon type="copylink" />
              <p className="max-[600px]:hidden">Copy referral link</p>
            </div>
          </div>

          <div className="flex flex-row flex-wrap mt-7 items-center gap-4">
            <p className="text-black font-medium text-xl">Share link via:</p>
            {socials.map((social, index) => {
              return (
                <a href="" key={`social-links-${index}`}>
                  <img src={social.src}></img>
                </a>
              );
            })}
          </div>

          <div className="w-full h-[0.9px] bg-black my-16"></div>

          <div className="w-full">
            <div className="w-full flex flex-row justify-between">
              <p className="text-black text-xl">Referral stats</p>
            </div>

            <div className="w-full">
              <Table className="mt-5 overflow-x-scroll max-[480px]:w-[450px]">
                <TableCaption>A list of your recent referrals.</TableCaption>
                <TableHeader>
                  <TableRow>
                    {/* <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead> */}

                    {referralTableColumns.map((column) => {
                      return (
                        <TableHead className="bg-denary text-white" key={`agcolumn-${column}`}>
                          {column}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {referalList.map((referral) => {
                    return (
                      <TableRow key={`ref-${referral.name}`}>
                        <TableCell className="text-black">
                          <div className="flex flex-row items-center">
                            <img src={beardAvater.src} alt="" />
                            {referral.name}
                          </div>
                        </TableCell>
                        <TableCell className="text-black">
                          {referral.date}
                        </TableCell>

                        <TableCell className="text-black">
                          <div className={`${referral.status=='complete'? 'bg-mgreen100': 'bg-red-300'} w-max p-3 rounded-full border-[0.4px] border-black`}>{referral.status}</div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  <TableRow>
                    {/* <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell> */}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
