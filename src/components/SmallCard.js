import React from 'react'

function SmallCard1() {
  return (
    <div className="mt-14 mb-14 ml-16 mr-16 flex flex-row space-x-5 justify-between">
        <div className=' smallcard1 flex flex-row bg-[#fedbde] w-1/2 items-center shadow-lg shadow-slate-300'>
            <div className="left">
                <img src="smallcard1.png" alt="" />
            </div>
            <div className="right space-y-3 ml-12">
                <p className='text-xl font-medium'>Super Sale</p>
                <p className='text-3xl font-bold'>New Collection</p>
                <p className='text-sm font-medium'>Shop Now</p>
            </div>
        </div>
        <div className=' smallcard2 flex flex-row bg-[#d7f7ff] w-1/2 items-center shadow-lg shadow-slate-300'>
            <div className="left">
                <img src="smallcard2.png" alt="" />
            </div>
            <div className="right space-y-3 ml-12">
                <p className='text-3xl font-bold'>New Season</p>
                <p className='text-xl font-medium'>Sale 40% Off</p>
                <p className='text-sm font-medium'>Shop Now</p>
            </div>
        </div>
    </div>
  )
}

export default SmallCard1