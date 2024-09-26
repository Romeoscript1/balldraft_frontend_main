import React from 'react'
import ExploreLayout from './ExploreLayout'
import groupof4 from '@/public/images/groupof4.svg'
import logo from '@/public/images/logo.png'


const FantasyDraft = () => {
    return (
        <ExploreLayout>
            <div className='flex max-md:flex-col-reverse items-center h-full '>
                <div className='md:absolute bottom-0 md:left-[5%] max-md:h-[50%]'>
                    <img src={groupof4.src} className='w-full h-full object-cover  m-auto ' alt="Fantasy Draft" />
                </div>
                <div className=' md:w-[50%] md:right-0 md:absolute text-left max-md:p-[1rem] max-md:h-[50%]'  data-aos='fade-up'>
                    <img src={logo.src} alt="" className='md:w-[200px]  w-[70px]' />
                    <h2 className='font-bold  text-white mb-[1rem] md:text-4xl font-poppins'>FANTASY FORMATION</h2>
                    <p className='md:text-xl text-sm font-poppins'>Create your ultimate formation using a mix of players from all available teams. The perfect game for strategy enthusiasts, test your tactical skills by setting your formation in the line with real-world games...</p>
                    <a href='/Dashboard' className='w-max block my-[2rem] border-[1px] border-white py-[0.5rem] px-[2rem] rounded-[20px]'>
                        Explore Feature
                    </a>
                </div>

            </div>
        </ExploreLayout>
    )
}

export default FantasyDraft
