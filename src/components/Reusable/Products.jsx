import React from "react";
import communication from "../../assets/communication 1.png";
import smarthome from "../../assets/smarthome 1.png";
import storage from "../../assets/storage 1.png";
import digital from "../../assets/cctv 1.png";
import multimedia from "../../assets/multimedia 1.png";
import ekit from '../../assets/download 1.png'
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section className="product__wrapper">
      <div className="product__wrapper--headings">
        <h2>Our Products</h2>
        <p>
          Explore our diverse range of cutting-edge products designed to
          revolutionize your digital experience. From advanced IP data-com
          products for seamless communication to larger-than-life smart home
          solutions, reliable digital storage, cutting-edge digital CCTV for
          surveillance, and interactive visualizers for multimedia experiences -
          our offerings redefine the standards of technology.
        </p>
      </div>
      <div className="product__cards">
      <div className="product__card">
        <Link to="/huwaei-ekit">
        <img src={ekit} alt="Our Products" />
          <span className="span-colour">Huwaei eKit</span>
          <p>eKit Products</p>
        </Link>
          
        </div>
        <div className="product__card">
          <img src={communication} alt="Our Products" />
          <span className="span-colour-green">IP data-com Products</span>
          <p>Data Communication</p>
        </div>
        <div className="product__card">
          <img src={smarthome} alt="Our Products" />
          <span className="span-colour">Larger than Life</span>
          <p>Smart Home</p>
        </div>
        <div className="product__card">
          <img src={storage} alt="Our Products" />
          <span className="span-colour-green">Reliable and Reputable</span>
          <p>Digital Storage</p>
        </div>
        <div className="product__card">
          <img src={digital} alt="Our Products" />
          <span className="span-colour">Surveillance</span>
          <p>Digital CCTV</p>
        </div>
        <div className="product__card">
          <img src={multimedia} alt="Our Products" />
          <span className="span-colour-green">Interactive Visualizers</span>
          <p>Interactive Multimedia</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
