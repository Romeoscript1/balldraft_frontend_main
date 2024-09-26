import React from 'react'
import StartCard from './StartCard'
import login_img from '../public/images/login_img.png'
import phone from '@/public/images/skill.png';
import { useSpring, animated } from 'react-spring';
import arrows from '@/public/images/arrows.svg';

const ArrowAnimation = ({ delay }) => {
    const style = useSpring({
        from: { transform: 'translateX(0px)', opacity: 1 },
        to: async (next, cancel) => {
            while (1) {
                await next({ transform: 'translateX(10px)', opacity: 0.5 });
                await next({ transform: 'translateX(0px)', opacity: 1 });
            }
        },
        config: { duration: 1000 },
        delay,
    });

    return <animated.div style={style}><img src={arrows.src} alt='arrowimage' /></animated.div>;
};



const Getstarted = () => {
    const getContents = [
        {
            title: 'Sign Up',
            contents: 'Sign up on Balldraft, the ultimate fantasy football game in Malaysia! Available only in Mallaysia to individuals that are 18 years and above.',
            number: '1',
            img: login_img
        },
        {
            title: 'Draft Team',
            contents: 'You are given 35 football players in your starter pack. Use these players to draft your season long team and join weekly leagues to win prizes.',
            number: '2',
            img: login_img
        },
        // {
        //     title: 'Player Packs ',
        //     contents: 'You can get more players and build your fantasy team by opening player packs. Purchase packs to packs to stand a chance of getting better players',
        //     number: '3',
        //     img: login_img
        // },
        // {
        //     title: 'Select Player',
        //     contents: "Players are grouped into 4 tiers:Squad Player: A football player who belongs to a Squad of a team but is not a regular starter.",
        //     number: '4',
        //     img: login_img
        // },
        {
            title: 'Manage Players',
            contents: 'Manage your fantasy football team for the season long tournament and weekly league tournaments. Sort your player cards by searching and favouriting your top players in the player deck.',
            number: '5',
            img: login_img
        },
        // {
        //     title: 'Transfer Market',
        //     contents: 'You are directed to a Transfer Market page where you get to buy and sell players to improve your teamon the Balldraft platform. All transfers are made using the ball ',
        //     number: '6',
        //     img: login_img
        // },
        {
            title: 'User Profile',
            contents: 'Show off your fantasy achievements & records alongside your best player cards and trophies. Keep your user information upto date in your user profile to ensure smooth & fast delivery of prizes.',
            number: '7',
            img: login_img
        },
        // {
        //     title: 'Weekly Tournaments',
        //     contents: 'Join weekly leagues to win weekly cash & prizes. During weekly leagues, you will be competing against 30 other players where you will stand a 1 in 30 chance of winning. Best of all, you can ente r dshsfjh',
        //     number: '8',
        //     img: login_img
        // },
        {
            title: 'Rewards',
            contents: 'Balldraft offers both weekly and season long prixes with rewards up to RM 1,000 in cash prize and a total of RM 5,300 in season long period.',
            number: '9',
            img: login_img
        },
        {
            title: 'In Game Shop',
            contents: 'In-game shop is where you purchase FXCoins and Promo bundles to improve your team.',
            number: '10',
            img: login_img
        },
    ]
    return (
        <div className='get_gradient'>
            <div className='text-center p-8 text-white'>
                <h1 className='md:text-4xl text-xl font-medium font-poppins'>How To Get Started 🦆 </h1>
                <p className='md:text-lg my-[0.6rem] font-poppins' >Here are few steps highlighted to get started on how to play the games</p>
            </div>
            <div className='grid md:grid-cols-2 gap-8 p-8'>
                {getContents.map((content, index) => {
                    return <StartCard key={index} title={content.title} contents={content.contents} number={index+1} img={content.img.src} />
                })}
            </div>

            <div className='md:flex justify-around max-md:p-[1rem] items-center'>
                <aside>
                    <img src={phone.src} className='md:w-[500px] w-[300px] ' alt="" />
                </aside>
                <aside>
                    <h1 className='text-skyish md:text-3xl text-2xl max-md:m-auto font-poppins'>Kickstart your journey now!</h1>
                    <div className='flex items-center '>
                        <button className='bg-[#012C51] text-black bg-white px-[5.5rem] block py-[0.7rem] my-[2rem] rounded-[30px] p-3 cursor-pointer relative z-100 mr-[1rem]'>Play Now</button>
                        <ArrowAnimation delay={0} />
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default Getstarted
