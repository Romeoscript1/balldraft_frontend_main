"use client"
import React from 'react'
import logo from '@/public/images/logo.png'
import about_bg from '@/public/images/about_bg.png'
import FutureCounter from './Counter'
import { useRouter } from 'next/navigation'

const AboutHero = () => {
    const router = useRouter()
    const naviateToDashbaord = () =>{
        router.push("/Dashboard")
    }
    return (
        <div className='md:h-[90vh] min-h-[100vh] bg-[#012C51E5] relative md:flex mt-[90px] p-[1rem] items-center justify-between' >
            <img src={logo.src} alt="" className='absolute opacity-10 md:h-full left-[50%] top-[50%] z-100 translate-x-[-50%] translate-y-[-50%]' />
            <aside className='basis-[50%] '>
                <h2 className='md:text-5xl text-2xl md:leading-[60px] mb-[1rem] text-white'>
                    Join The <br /> <span className='text-skyish'>Millions Of Players</span> Who Have Chosen Us As Their <span className='text-skyish'>Sports <br /> Destination </span>
                </h2>
                <div className=' bg-[#FFFFFF1A] md:flex items-center p-[1rem] rounded-[20px]'>
                    <aside className='text-white md:text-xl text-sm'>
                        <p> Balldraft is a social fantasy football platform that incorporates the world of fantasy football, virtual football manager experiences and trading cards, offering sports fans an opportunity to test their skills and prove their knowledge against each other!
                            balldraft offers a season long tournament league that will last for the entirety of the English Premier League football season.
                        </p>
                        <button onClick={naviateToDashbaord} className=' max-md:hidden bg-[#012C51] text-black bg-white px-[5.5rem] block py-[0.7rem] my-[2rem] rounded-[30px] p-3 cursor-pointer relative z-100 mr-[1rem]'>Play Now</button>
                    </aside>
                    <FutureCounter />
                    <button onClick={naviateToDashbaord} className=' md:hidden bg-[#012C51] text-black bg-white px-[5.5rem] w-full block py-[0.7rem] md:my-[2rem] rounded-[30px] p-3 cursor-pointer relative z-100 mr-[1rem]'>Play Now</button>
                  
                </div>
            </aside>
            <aside className='flex items-center flex-col justify-center mt-[1rem]'>
                <img src={about_bg.src} className='max-md:w-[250px] max-md:h-[250px] ' alt="" />
               
            </aside>
        </div>
    )
}

export default AboutHero
