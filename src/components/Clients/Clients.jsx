import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import acti from '../../assets/acti.png'
import hik from '../../assets/hik-logo.png'
import milestone from '../../assets/milestone.png'
import planet from '../../assets/planet.jpeg'
import synology from '../../assets/synology.png'
import tplink from '../../assets/tplink.png'

import "./Clients.css";

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="clients__container">
      <div className="clients__heading">
        <h2>
          Our Partners.
        </h2>
      </div>

      <Slider {...settings}>
        <div>
          <img src={acti} alt="Client Logo" />
        </div>
        <div>
          <img src={hik} alt="Client Logo" />
        </div>
        <div>
          <img src={milestone} alt="Client Logo" />
        </div>
        <div>
          <img src={planet} alt="Client Logo" />
        </div>
        <div>
          <img src={synology} alt="Client Logo" />
        </div>
        <div>
          <img src={tplink} alt="Client Logo" />
        </div>
       
      </Slider>
    </div>
  );
};

export default Clients;
