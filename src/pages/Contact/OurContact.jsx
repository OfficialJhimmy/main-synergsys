import React from "react";
import ReusableBanner from "../../components/Banner/ReusableBanner";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const OurContact = () => {
  return (
    <>
      <ReusableBanner
        title="Get in Touch with Us"
        subText="Connect with Synergetics Global System today. Whether you have inquiries about our services, want to discuss potential partnerships, or need technical support, our team is ready to assist you. Reach out and let's embark on a journey towards innovative ICT solutions together."
      />
      <Contact />
      <Footer />
    </>
  );
};

export default OurContact;
