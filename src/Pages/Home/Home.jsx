import React from 'react'
import Header from '../../HomeComponent/Header/Header'
import Menu from '../../HomeComponent/Menu/Menu'
import Banner from '../../HomeComponent/Banner/Banner'
import Shipping from '../../HomeComponent/Shipping/Shipping'
import Sale from '../../HomeComponent/SaleItem/Sale'
import Arrival from '../../HomeComponent/Arrival/Arrival'
import Phone from '../../HomeComponent/PhoneOfyear/Phone'
import FooterTop from '../../HomeComponent/Footer/FooterTop'
import FooterBottom from "../../HomeComponent/Footer/FooterBottom"
import {ProductData, BestsellerData, SpecialofferData} from "../../../Data/Data"

const Home = () => {
  return (
    <>
      <Header />
      <Menu />
      <Banner />
      <Shipping />
      <Sale />
      <Arrival HeadingTilte="New Arrivals" Pdata={ProductData}/>
      <Arrival  HeadingTilte="Our Best Sellers" Pdata={BestsellerData}/>
      <Phone />
      <Arrival  HeadingTilte="Special Offers" Pdata={SpecialofferData}/>
      <FooterTop />
      <FooterBottom />
    </>
  )
}

export default Home
