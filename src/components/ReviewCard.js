import React from 'react'

function ReviewCard() {
  return (
    <div className='flex flex-col space-y-5 bg-[#fac0bd] my-12 pt-8 pb-10 shadow-xl shadow-gray-300 rounded-md h-72'>
        <div className="header text-3xl font-medium text-center">Our Client Say!</div>
        <p className='m-auto text-lg text-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed quibusdam sint, voluptatum fugit accusamus, architecto dolore, temporibus eligendi sequi animi reprehenderit placeat sunt harum odit? Animi inventore adipisci neque!</p>
        <div className='flex flex-row justify-between m-auto w-2/3 items-center'>
            <img src="backward.svg" className='h-7' alt="" />
            <div className='flex flex-row space-x-3 w-fit justify-items-center'>
                <img src="myImage.jpeg" className='h-12 w-12' alt="" />
                <div className='flex flex-col justify-items-center'>
                    <p className='text-lg font-medium'>Mahendra Yadav</p>
                    <p className='text-lg text-btn-red'>Designer</p>
                </div>
            </div>
            <img src="forward.svg" className='h-7' alt="" />
        </div>
    </div>
  )
}

export default ReviewCard