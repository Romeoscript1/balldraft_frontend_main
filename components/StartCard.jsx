import React from 'react'


const StartCard = ({title, contents, number , img}) => {
    return (
        <div className='border-[1px] border-white rounded-[20px] bg-[#FFFFFF0D] flex md:p-[1rem] px-[0.3rem] gap-[2%] items-center relative'>
            <img src={img} alt="" className='rounded-[20px] md:h-[150px] h-[80px]  object-cover' />
            <div className='text-white mb-[0.7rem]'>
                <h2 className='md:text-2xl font-bold'>{title}</h2>
                <p className='pr-[1.5rem] md:text-sm text-[10px] w-[95%]'>{contents}</p>
                <p className='poppins-bold text-9xl absolute right-[-2%] top-[20%] text-[#FFFFFF3D]'>{number}</p>
            </div>
        </div>
    )
}

export default StartCard

