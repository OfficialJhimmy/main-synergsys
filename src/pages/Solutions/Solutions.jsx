import React from "react";
import ReusableBanner from "../../components/Banner/ReusableBanner";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import OurSolutions from "../../components/Reusable/OurSolutions";

const Solutions = () => {
  return (
    <>
      <ReusableBanner
        title="Innovative Solutions for Every Challenge"
        subText="Explore Synergetics Global System's array of innovative solutions tailored to meet the challenges of modern enterprises. From strategic ICT consultancy to seamless Systems Network Integration, we empower businesses in the West African Sub-Region to thrive in the digital era."
      />

      <OurSolutions />
      <Contact />
      <Footer />
    </>
  );
};

export default Solutions;
