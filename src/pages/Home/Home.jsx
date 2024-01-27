import React from 'react'
import HomeBanner from '../../components/Banner/HomeBanner'
import Clients from '../../components/Clients/Clients'
import Contact from '../../components/Contact/Contact'
import AboutUs from '../../components/Reusable/AboutUs'
import OurSolutions from '../../components/Reusable/OurSolutions'
import Products from '../../components/Reusable/Products'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <HomeBanner/>
      <AboutUs/>
      <Products/>
      <OurSolutions/>
      <Clients/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home