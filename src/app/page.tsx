import React from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Arrival from './Components/Arrival'
import Sell from './Components/Sell'
import Image from './Components/styleimg'
import Review from './Components/Review'

const page = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Arrival/>
      <Sell/>
      <Image/>
      <Review/>
    </div>
  )
}

export default page

