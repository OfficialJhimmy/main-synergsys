import React from 'react'
import ReusableBanner from '../../components/Banner/ReusableBanner'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Objectives from '../../components/Objectives/Objectives'
import AboutUs from '../../components/Reusable/AboutUs'

const About = () => {
  return (
    <>
      <ReusableBanner
        title="This is Who We are"
        subText="Embark on a journey with Synergetics Global System, where our values and dedicated team pave the way for unparalleled success in the realm of Information and Communication Technology. Discover how we redefine possibilities to elevate your business processes, enhance SMB applications, and improve socio-cultural living standards."
        />
      <AboutUs/>
      <Objectives/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default About