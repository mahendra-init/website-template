import React from 'react'

function Navbar() {
  return (
    <nav>
        <div className='flex flex-col'>
            <hr />
            <div className='upperdiv ml-16 mr-16 flex flex-row pt-2 pb-2 text-sm'>
                <div className='flex-1'>
                    <ul className='flex flex-row space-x-3 items-center'>
                        <li className='flex flex-row space-x-0.5 items-center'><img className='h-8' src="country.png" alt="" /> <span>English</span><img className='h-5 mt-1' src="down.svg" alt="" /></li>
                        <li className='flex flex-row space-x-0.5 items-center'><span>INDIA</span><img className='h-5 mt-1' src="down.svg" alt="" /></li>
                        <li className='flex flex-row space-x-0.5 items-center'><img className='h-5' src="contact.svg" alt="" /> <span>123-456-7890</span></li>
                    </ul>
                </div>
                <div className=''>
                    <ul className='flex flex-row space-x-3 mt-1'>
                    <li className='flex flex-row space-x-0.5 items-center'><img className='h-5' src="compare.svg" alt="" /> <span>Compare</span></li>
                    <li className='flex flex-row space-x-0.5 items-center'><img className='h-5' src="heart.svg" alt="" /> <span>Wishlist</span></li>
                    <li className='flex flex-row space-x-0.5 items-center'><img className='h-5' src="user.svg" alt="" /> <span>Login</span></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="lowerdiv flex flex-row ml-16 mr-16 pt-2 pb-2 items-center">
                <div className='flex-1'>
                    <div className='flex flex-row space-x-2 items-center'>
                        <img src="cartIcon.svg" className='h-9' alt="ICON" />
                        <span className='text-3xl font-sans font-medium mb-1'>Shopwise</span>
                    </div>
                </div>
                <div>
                    <ul className='flex flex-row space-x-3 items-center text-sm'>
                    <li className='flex flex-row space-x-0.5 items-center'><span>HOME</span><img className='h-5 mt-1' src="down.svg" alt="" /></li>
                    <li className='flex flex-row space-x-0.5 items-center'><span>PAGES</span><img className='h-5 mt-1' src="down.svg" alt="" /></li>
                    <li className='flex flex-row space-x-0.5 items-center'><span>PRODUCTS</span><img className='h-5 mt-1' src="down.svg" alt="" /></li>
                    <li className='flex flex-row space-x-0.5 items-center'><span>BLOG</span><img className='h-5 mt-1' src="down.svg" alt="" /></li>
                    <li className='flex flex-row space-x-0.5 items-center'><span>SHOP</span><img className='h-5 mt-1' src="down.svg" alt="" /></li>
                    <li><span>CONTACT US</span></li>
                    <li><img className='h-5' src="search.svg" alt="SI" /></li>
                    <li><img className='h-5' src="cart.svg" alt="CART" /></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar