import React from 'react'
import vector  from '@/public/images/vector10.png'

const KnownCard = ({title, desc, img, bg, color}) => {
  return (
    <div className={`p-4 text-[${color}] bg-white rounded-md hover:bg-[#012C51] cursor-pointer hover:text-white  bg-[${bg}] `}>
    <img src={img} alt="" />
      <h2 className=' font-bold text-xl my-[1rem]'>{title}</h2>
      <p className=' '>{desc}</p>

      <button className='bg-[#012C51]  text-black border-black border-[1px]  bg-white px-[5.5rem] block py-[0.7rem] my-[2rem] rounded-[30px] p-3 cursor-pointer w-full relative z-100 mr-[1rem]'>Play Now</button>
                       
    </div>
  )
}

export default KnownCard
