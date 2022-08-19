import React from 'react'
import Product from './Product'

function FeatPro() {
  return (
    <div className='flex flex-col mt-16'>
        <div className="header text-2xl font-bold text-center">Featured Products</div>
        <div className='mt-4 mx-16 grid grid-cols-4 gap-5'>
            <Product srcImg="expro1.png" desc="Blue Dress For Woman" sp="45.00" oldsp="55.25" disc="35"/>
            <Product srcImg="expro2.png" desc="Lether Gray Tuxedo" sp="55.00" oldsp="95.00" disc="25"/>
            <Product srcImg="expro3.png" desc="Woman Full Sliv Dress" sp="68.00" oldsp="90.00" disc="34"/>
            <Product srcImg="expro4.png" desc="Light Blue Shirt" sp="69" oldsp="89.00" disc="20"/>
        </div>
    </div>
  )
}

export default FeatPro