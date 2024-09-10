import React from 'react'
import KnownCard from './KnownCard'
import vector from '@/public/images/vector10.png'
import vector1 from '@/public/images/vector11.png'
import vector2 from '@/public/images/vector12.png'

const Known = () => {
    const knownInfo = [
        {
            img: vector,
            title: 'Fairnes & Transparency',
            bg: '#FFFFFF',
            color: 'white',
            desc: 'Balldraft is built on a transparent poilcy system that is easily accessible to players and it is audited by a third party to ensure fairness.'
        },
        {
            img: vector1,
            title: 'Security & User Safety',
            bg: '#012C51',
            color: 'white',
            desc: 'We adopt the latest encryption technology to protect players information, and it is licensed and regulated by authority.'
        },
        {
            img: vector2,
            title: 'Varieties Of Games',
            bg: '#FFFFFF',
            color: 'white',
            desc: 'We offer a wide range of games, including popular games like Soccer, Basket ball and UFC games with a variety of bonuses and promotions.'
        },
    ]
    return (
        <div className='bg-[#F2F2F2] p-[1.5rem]'>
            <div className='p-[1rem] text-center'>
                <h2 className='text-black md:text-3xl text-xl'>What We Are Known For</h2>
                <p className='text-gray-500'>Embark on a thrilling journey through our cutting-edge gameng features</p>
            </div>
            <div className=' grid md:grid-cols-3 gap-[2%]'>
                {knownInfo.map((info, index) => {
                    return <KnownCard key={index} img={info.img.src} title={info.title} desc={info.desc} bg={info.bg} color={info.color} />
                })}
            </div>
        </div>
    )
}

export default Known
