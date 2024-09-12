"use client";

import React from "react";
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

  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <div className="p-[1rem]">
      <div>
        <p className="text-black text-[0.9rem] leading-6">{`Secure your competitive edge with a quick and seamless deposit process. Our system allows you to focus uninterrupted on building your dream team. Deposit $50 and receive a $10 bonus, deposit $100 for an additional $25, or deposit $200 to earn a whopping $60 bonus. Don't miss out on these incredible offers to enhance your fantasy sports experience. Start depositing now to secure extra funds.`}</p>
      </div>

      <section className="w-full mt-7 flex flex-col sm:flex-row gap-4">

        <TransactionSider totalBalance={10.00}/>

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
                  PAYMENT TYPE
                </p>

                <Select>
                  <SelectTrigger className="w-full bg-[#F5F5F5] border border-[#808080] mt-3">
                    <SelectValue placeholder="Select payment type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full text-start mt-8">
                <p className="text-black text-[0.8rem] font-medium">
                  PAYMENT DETAILS
                </p>

                <form action="" className="w-full flex flex-col items-center gap-4">
                    <input type="text" className="bg-[#F5F5F5] px-4 py-3 rounded-md w-full" placeholder="Card holder name" />
                    <input type="text" className="bg-[#F5F5F5] px-4 py-3 rounded-md w-full" placeholder="Card number" />
                    <div className="flex flex-row gap-2 w-full">
                    <input type="text" className="bg-[#F5F5F5] px-4 py-3 rounded-md w-full" placeholder="CVV" />
                    <input type="text" className="bg-[#F5F5F5] px-4 py-3 rounded-md w-full" placeholder="Expiry date" />

                    </div>
                </form>
              </div>

              <div className="flex flex-row items-start mt-5 text-start gap-2">
                <Checkbox/>
                <p className="text-[#808080]">By clicking “Save change” you confirm that you are the account holder and authorize the Email Address update.</p>
              </div>
              <button className="bg-denary text-white w-full p-3 rounded-full mt-4">Save changes</button>
              <button className="bg-white border border-denary text-denary w-full p-3 rounded-full mt-4">Go back</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
