import React from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Arrival from './Components/Arrival'
import Sell from './Components/Sell'
import Review from './Components/Review'
import Product from './Components/products'
import Detail from './Components/Productdetail'

const page = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Arrival/>
      <Sell/>
      <Review/>
      <Product/>
      <Detail/>
    </div>
  )
}

export default page

