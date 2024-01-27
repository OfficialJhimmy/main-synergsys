import React from "react";
import ReusableBanner from "../../components/Banner/ReusableBanner";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Products from "../../components/Reusable/Products";

const OurProducts = () => {
  return (
    <>
      <ReusableBanner
        title="Discover Cutting-Edge Technology Products"
        subText="Dive into Synergetics Global System's product catalog featuring a range of cutting-edge solutions. From IP data-com products for seamless communication to smart home solutions, reliable digital storage, advanced digital CCTV, and interactive multimedia tools – our products redefine technological standards."
      />
      <Products />
      <Contact />
      <Footer />
    </>
  );
};

export default OurProducts;
