import React from 'react'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import ExProCard from './components/ExProCard'
import FeatPro from './components/FeatPro'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ReviewCard from './components/ReviewCard'
import SmallCard from './components/SmallCard'


const App = () => {
  return (
    <>
    <div className='m-24'>
      <Navbar/>
      <Card1/>
      <SmallCard/>
      <ExProCard/>
      <Card2/>
      <FeatPro/>
      <ReviewCard/>
      <Footer/>
    </div>
    </>
  )
}

export default App