import React from 'react'

function Card1() {
  return (
    <div className='flex flex-row bg-[#fee5d3] h-60 pt-36 pb-36 items-center shadow-lg shadow-slate-300'>
        <div className="left flex flex-1 flex-col justify-items-start space-y-4 pl-10 pr-10">
            <p className='text-sm'>50% off in all products</p>
            <p className='text-4xl font-bold text'>Man Fashion</p>
            <button className='bg-btn-red text-white text-xs w-fit pl-5 pr-5 pt-2 pb-2'>SHOP NOW</button>
        </div>
        <div className="right mr-10">
            <img src="card1.png" className='h-72' alt="" />
        </div>
    </div>
  )
}

export default Card1