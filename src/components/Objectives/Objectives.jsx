import React from "react";
import './index.css'
import { FcAbout } from "react-icons/fc";
import { GiLightBulb } from "react-icons/gi";
import { FaInfinity } from "react-icons/fa6";

const Objectives = () => {
  return (
    <section className="objectives__wrapper">
      
        <h2 className="objectives__text">Objectives</h2>
     
      <div className="objectives__cards">
        <div className="objective__card">
          <FcAbout size={35}/>
          <h3>Who we are</h3>
          <p>
            Synergsys has over the years gained momentum. The goal is to
            literarily rocket-launch the entity from a static organization into
            a ‘complete mobile force’, delivering contemporary ICT solutions in
            a dynamic and emerging African Economy.
          </p>
        </div>
        <div className="objective__card">
          <GiLightBulb size={35}/>
          <h3>Our Solutions</h3>
          <p>
            The expansion of its market share in Data-Communication
            products/solution segment, Storage Solutions segment and IP
            Surveillance Solution segment in a fast growing emerging market, and
            the enhancement of its services to Systems Integrators/Resellers and
            the ultimate end-users of its products and solutions.
          </p>
        </div>
        <div className="objective__card">
        <FaInfinity size={35}/> 

          <h3>How we work</h3>
          <p>
            The conceptualization and successful implementation of Project-Based
            Solutions that would propel the company and its brand partners in
            the enterprise delivery segment of the Nigeria market, is a core
            objective of the organization
          </p>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
