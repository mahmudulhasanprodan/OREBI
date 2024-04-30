import React from 'react'
import Header from '../../HomeComponent/Header/Header'
import Menu from '../../HomeComponent/Menu/Menu'
import Footer from '../../HomeComponent/FinalFooter/Footer'
import { Outlet } from 'react-router-dom'

const RouteLayout = () => {
  return (
    <>
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
}

export default RouteLayout
