import React from "react";
import Navbar from "../Navigation/Navbar";
import "./index.css";
import PrimaryButton from "../../components/Button/PrimaryButton";

const HomeBanner = () => {
  return (
    <>
      <div className="homehero__container">
        <Navbar />

        <div className="homehero__content">
          <h1>Your Gateway to Innovative ICT Solutions</h1>
          <p>
            Welcome to Synergetics Global System, where we redefine
            possibilities in Information and Communication Technology. Elevate
            your business processes, enhance SMB applications, and improve
            socio-cultural living standards with our cutting-edge solutions.
          </p>
          <div className="homehero__content--button">
            <PrimaryButton title="About us" url="/about" />
            <PrimaryButton title="Our Products" url="/products" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
