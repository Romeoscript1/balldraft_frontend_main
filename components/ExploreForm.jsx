import React from 'react';
import ExploreLayout from './ExploreLayout';
import phone from '@/public/images/skill.png';
import logo from '@/public/images/logo.png'
import p1 from '@/public/images/landing/ballboy.png'


const ExploreForm = () => {
    return (
        <ExploreLayout className='formation'>
        
            <div className='md:flex items-center h-full relative' data-aos="fade-up" data-aos-delay="300" data-aos-duration="4000">
                <div className='text-left md:w-3/5 md:p-[3rem] p-[1rem]'>
                    <img src={logo.src} className='md:w-[200px] w-[70px]' alt="" />
                    <h2 className='font-bold md:text-4xl  mb-[1rem] text-white font-poppins'>ON-FORM OPTION</h2>
                    <p className='md:text-xl text-sm font-poppins leading-7 text-slate-300'>Make the most of your players’ hot streaks/points. Earn bonus points whenever your players perform outrageously and exceptionally well for several game weeks in a row.</p>
                    <a href='/Dashboard' className='w-max block my-[2rem] border-[1px] border-white py-[0.5rem] px-[2rem] rounded-[20px] font-poppins text-slate-300'>
                        Explore Feature
                    </a>
                </div>
                <div className='absolute bottom-0 right-0 slide-up-animation '>
                    <img src={phone.src} className='w-full' alt="Fantasy Draft"   />
                </div>
            </div>
        </ExploreLayout>
    );
};

export default ExploreForm;
