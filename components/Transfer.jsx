import React from 'react'
import ExploreLayout from './ExploreLayout'
import groupof4 from '@/public/images/trans.png'
import logo from '@/public/images/logo.png'


const Transfer = () => {
    return (
        <ExploreLayout>
            <div className='flex  max-md:flex-col-reverse items-center h-full '>
                <div className='absolute bottom-0 left-[5%]'>
                    <img src={groupof4.src} className='w-full' alt="Fantasy Draft" />
                </div>
                <div className=' md:w-[50%] max-md:top-0 right-0 absolute text-left max-md:p-[1rem]' data-aos='fade-up'>
                    <img src={logo.src} alt="" className='md:w-[200px] w-[70px]' />
                    <h2 className='font-bold  text-white mb-[1rem] md:text-4xl font-poppins'>TRANSFER MARKET</h2>
                    <p className='md:text-xl text-sm font-poppins text-slate-300 leading-7'>Discover the heartbeat of sports dynamics at our Transfer Market Hub. Immerse yourself in the exhilarating world of player transitions, strategic team moves and groundbreaking deals.</p>
                    <a href='/Dashboard' className='w-max block my-[2rem] border-[1px] border-white py-[0.5rem] px-[2rem] rounded-[20px] font-poppins text-slate-300'>
                        Explore Feature
                    </a>
                </div>

            </div>
        </ExploreLayout>
    )
}

export default Transfer
