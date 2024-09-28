"use client";
import React from "react";
import { Space, Table, Tag } from "antd";
import { formatDistanceToNow, parseISO } from "date-fns";
import Icon from "@/Reusable/Icons/Icons";
import { getFormattedDate, getFormattedTime } from "@/constants/constants";

const columns = [
  {
    title: "TYPE",
    dataIndex: "type",
    key: "type",
    render: (type) => {
      if (type.toLowerCase() === "deposit") {
        return (
          <Space>
            <div className=" bg-[#0163E0] p-[0.5rem] rounded-full">
              <Icon type="topup" />
            </div>
            <span className="max-[600px]:hidden">{type}</span>
          </Space>
        );
      } else if (type.toLowerCase() === "withdrawal") {
        return (
          <Space>
            <div className="bg-[#FF6D00] p-[0.5rem] rounded-full">
              {" "}
              <Icon type="withdraw" />
            </div>

            <span className="max-[600px]:hidden">{type}</span>
          </Space>
        );
      }
    },
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    className: "max-[600px]:hidden",
  },
  {
    title: "AMOUNT",
    dataIndex: "amount",
    key: "amount",
    render: (amount) => {
      const color = amount > 0 ? "green" : "red";
      return (
        <span style={{ color }}>{amount > 0 ? `+${amount}` : amount}</span>
      );
    },
  },
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
    className: "max-[370px]:hidden",
    render: (date) => formatDistanceToNow(parseISO(date), { addSuffix: true }),
  },
  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
    render: (status) => {
      const color = status === "success" ? "green" : "volcano";
      return <Tag className="font-poppins" color={color}>{status.toUpperCase()}</Tag>;
    },
  },

];


const columnsList = [
  {
    title: "TYPE",
    dataIndex: "type",
    key: "type",
    render: (type) => {
      if (type.toLowerCase() === "deposit") {
        return (
          <Space>
            <div className=" bg-[#0163E0] p-[0.5rem] rounded-full">
              <Icon type="topup" />
            </div>
            <span className="max-[600px]:hidden">{type}</span>
          </Space>
        );
      } else if (type.toLowerCase() === "withdrawal") {
        return (
          <Space>
            <div className="bg-[#FF6D00] p-[0.5rem] rounded-full">
              {" "}
              <Icon type="withdraw" />
            </div>

            <span className="max-[600px]:hidden">{type}</span>
          </Space>
        );
      }
    },
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    className: "max-[600px]:hidden",
  },
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
    className: "max-[370px]:hidden",
    render: (date) => {
      return <p className="font-poppins">{formatDistanceToNow(parseISO(date), { addSuffix: true })}</p>
    },
  },
  {
    title: "Tag",
    key: "action",
    dataIndex: "action",
    render: (action) => {
      return <p className="font-poppins">{action}</p>;
    },
  },
  // {
  //   title: "STATUS",
  //   key: "status",
  //   dataIndex: "status",
  //   render: (status) => {
  //     const color = status === "success" ? "green" : "volcano";
  //     return <Tag color={color}>{status.toUpperCase()}</Tag>;
  //   },
  // },
];

const data = [
  {
    key: "1",
    type: "withdrawal",
    id: "12345",
    amount: 32,
    date: "2024-05-02T09:30:00Z",
    status: "success",
  },
  {
    key: "2",
    type: "deposit",
    id: "67890",
    amount: -42,
    date: "2024-05-04T11:00:00Z",
    status: "failure",
  },
  {
    key: "3",
    type: "withdrawal",
    id: "11223",
    amount: 50,
    date: "2024-05-05T15:15:00Z",
    status: "success",
  },
];

const TransactionTable = (props) => {
  const last_transactions = props?.profile?.last_four_transactions || []
  const transactionList = last_transactions.filter((t)=> t.category.toLowerCase()=='withdrawal' || t.category.toLowerCase()=='deposit').map((transaction)=>{
    return {
        id: transaction.id,
        action: transaction.action,
        date: transaction.time,
        type: transaction.category,
        action_title: transaction.action_title,
    }
  })



  console.log(last_transactions)
  return <Table columns={columnsList} dataSource={transactionList} />;
};
export default TransactionTable;
