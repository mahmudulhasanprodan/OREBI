import React from 'react'
import Banner from '../../HomeComponent/Banner/Banner'
import Shipping from '../../HomeComponent/Shipping/Shipping'
import Sale from '../../HomeComponent/SaleItem/Sale'
import Arrival from '../../HomeComponent/Arrival/Arrival'
import Phone from '../../HomeComponent/PhoneOfyear/Phone'
import {ProductData, BestsellerData, SpecialofferData} from "../../../Data/Data"

const Home = () => {
  return (
    <>
      <Banner />
      <Shipping />
      <Sale />
      <Arrival HeadingTilte="New Arrivals" Pdata={ProductData}/>
      <Arrival  HeadingTilte="Our Best Sellers" Pdata={BestsellerData}/>
      <Phone />
      <Arrival  HeadingTilte="Special Offers" Pdata={SpecialofferData}/>
    </>
  )
}

export default Home
