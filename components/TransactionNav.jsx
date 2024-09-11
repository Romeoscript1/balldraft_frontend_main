import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import logo from "@/public/images/logo.png";


const TransactionNav = () => {
  return (
    <div className='flex flex-row justify-between items-center px-[1rem]'>
        <div className='flex flex-row py-[1rem] items-center gap-2'>
            <IoMdArrowBack size={30} className='fill-black'/>
            <p className='font-medium text-xl text-black'>Deposit</p>
        </div>

        <img src={logo.src} className="lg:w-[150px] w-[80px]" alt="" />

        <div></div>

    </div>
  )
}

export default TransactionNav