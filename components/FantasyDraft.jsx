import React from 'react';
import ExploreLayout from './ExploreLayout';
import phone from '@/public/images/phone.svg';
import logo from '@/public/images/logo.png'

const FantasyDraft = () => {
    return (
        <ExploreLayout>
            <div className='md:flex overflow-hidden items-center h-full relative p-1' data-aos="fade-up" data-aos-delay="300" data-aos-duration="4000">
                <div className='text-left md:w-3/5 md:p-[3rem] p-[1rem] z-10'>
                    <img src={logo.src} className='md:w-[200px] w-[70px]' alt="" />
                    <h2 className='font-bold md:text-4xl  md:mb-[1rem] text-white mt-4 font-poppins'>FANTASY DRAFT</h2>
                    <p className='md:text-xl text-sm mt-2 leading-7 font-poppins text-slate-300'>Kickoff on an even playing field with the Fantasy Draft feature. This enables you to compete against friends or players worldwide by picking your team from a common group of players...</p>
                    <a href='/Dashboard' className='w-max block my-[2rem] border-[1px] border-white py-[0.5rem] px-[2rem] rounded-[20px] text-slate-300 font-poppins'>
                        Explore Feature
                    </a>
                </div>
                <div className='flex flex-col md:right-[5%] slide-up-animation'>
                    <img src={phone.src} className='md:w-full w-[70%] m-auto' alt="Fantasy Draft"   />
                </div>
            </div>
        </ExploreLayout>
    );
};

export default FantasyDraft;
