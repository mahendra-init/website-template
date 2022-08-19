import React from 'react'

function Card1() {
  return (
    <div className='flex flex-row bg-[#d9eaf0] h-60 py-36 mt-24 items-center shadow-lg shadow-slate-300'>
        <div className="left mx-16 px-16 w-2/5">
            <img src="card2.jpeg" className='h-72 w-full m-auto' alt="" />
        </div>
        <div className="right flex flex-1 flex-col justify-start space-y-4">
            <p className='text-btn-red'>New season trends!</p>
            <p className='text-4xl font-bold text'>Best Summer Collection</p>
            <p className='text-md'>Sales Get up to 50% Off</p>
            <button className='bg-btn-red text-white text-xs w-fit pl-5 pr-5 pt-2 pb-2'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default Card1