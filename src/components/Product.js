import React from 'react'

function Product({srcImg, desc, sp, oldsp, disc}) {
  return (
    <div className='flex flex-col shadow-xl shadow-gray-300 rounded-lg'>
        <div className=''><img className="w-full" src={srcImg} alt="" /></div>
        <div className="description ml-4 mt-2">
            <p className='text-black text-lg font-bold'>{desc}</p>
            <p className='space-x-2 text-btn-red font-bold w-5/6'>${sp} <span className='ml-2 line-through text-slate-700 text-sm'> ${oldsp}</span> <span className='text-green-800 text-sm'>{disc}% Off</span></p>
            <div></div>
        </div>
        <div className="flex flex-row space-x-1 h-5">
        </div>
    </div>
  )
}

export default Product