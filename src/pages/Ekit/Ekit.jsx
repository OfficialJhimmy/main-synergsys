import React from "react";
import "./index.css";
import ReusableBanner from "../../components/Banner/ReusableBanner";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import imageone from "../../assets/huwaei/sme/download.png";
import imagetwo from "../../assets/huwaei/sme/image2.png";
import imagethree from "../../assets/huwaei/sme/image3.png";

import imagefour from "../../assets/huwaei/mini/image-one.png";
import imagefive from "../../assets/huwaei/mini/image-two.png";
import imagesix from "../../assets/huwaei/mini/image-three.png";

import imageseven from "../../assets/huwaei/data/image-one.png";

import imageeight from "../../assets/huwaei/idea/image1.png";
import imagenine from "../../assets/huwaei/idea/image-2.png";

const Ekit = () => {
  // Function to truncate the subtitle text to the first 20 words
  const truncateSubtitle = (text) => {
    const words = text.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return text;
  };

  const sme = [
    {
      img: imageone,
      title: "AP160",
      subTitle: "AP160(11ax indoor,2+2 dual bands,smart antenna)",
    },
    {
      img: imagetwo,
      title: "AP361",
      subTitle: "AP361(11ax indoor,2+2 dual bands,smart antenna)",
    },
    {
      img: imagethree,
      title: "S-SFP-GE-LH40-SM1310",
      subTitle:
        "Optical Transceiver,eSFP,GE,Single-mode Module(1310nm,40km,LC)",
    },
    {
      img: imagethree,
      title: "S-SFP-GE-LH80-SM1550",
      subTitle:
        "Optical Transceiver,eSFP,GE,Single-mode Module(1550nm,80km,LC)",
    },
    {
      img: imagethree,
      title: "S-SFP-GE-LH40-SM1550",
      subTitle:
        "Optical Transceiver,eSFP,GE,Single-mode Module(1550nm,40km,LC)",
    },
    {
      img: imagethree,
      title: "SFP-GE-LX-SM1310",
      subTitle:
        "Optical Transceiver,eSFP,GE,Single-mode Module(1310nm,10km,LC)",
    },
  ];

  const mini = [
    {
      img: imagefour,
      title: "PoF connection tube",
      subTitle:
        "The PoF connection tube is used to connect two XC photoelectric composite QuickConnectcables for cable extension. It is made of high-quality materials and features high reliability and durability.",
    },
    {
      img: imagefive,
      title: "MIniFTTO POF cable(XC-XC)-30m",
      subTitle:
        "A FoF cable is a composite cable that integrates fibers and copper wires to provide both data transmission and remote power supply functions for terminals",
    },
    {
      img: imagefive,
      title: "MIniFTTO POF cable(XC-XC)-20m",
      subTitle:
        "A FoF cable is a composite cable that integrates fibers and copper wires to provide both data transmission and remote power supply functions for terminals",
    },
    {
      img: imagesix,
      title: "OptiXstar F200D-8P-Europe",
      subTitle:
        "The Huawei OptiXstar F200D-8P is a box-shaped ONU designed for enterprise campusand video backhaul scenarios. It provides eight GE PoE+ service ports, providing users with high-quality voice, data, and HD video service",
    },
  ];

  const data = [
    {
      img: imageseven,
      title: "OceanStor 2620 (64 GB Cache 2.5 Inch SAS)",
      subTitle:
        "Simplified, easy-to-use, and intelligent — Huawei New-Gen OceanStor 2620 Hybrid Flash Storage System is designed for SMEs. It provides convenient and efficient data infrastructure, fully exploits the value of enterprise data, and helps enterprises go digital.",
    },
    {
      img: imageseven,
      title: "OceanStor 2620 (64 GB Cache 3.5 Inch SAS)",
      subTitle:
        "Simplified, easy-to-use, and intelligent — Huawei New-Gen OceanStor 2620 Hybrid Flash Storage System is designed for SMEs. It provides convenient and efficient data infrastructure, fully exploits the value of enterprise data, and helps enterprises go digital.",
    },
    {
      img: imageseven,
      title: "OceanStor 2220 (32 GB Cache 2.5 Inch SAS)",
      subTitle:
        "Huawei New-Gen OceanStor 2220 Hybrid Flash Storage System is designed for MSMEs, featuring convenient and efficient data infrastructure. It fully exploits the value of enterprise data, and helps enterprises go digital.",
    },
  ];

  const idea = [
    {
      img: imageeight,
      title: "IdeaHub B2/B3 75/86 Maintenance Card",
      subTitle:
        "Category 4_HUAWEI IdeaHub_RFR 30BD-S_12Months_Per Hardware Maintenance card",
    },
    {
      img: imageeight,
      title: "IdeaHub S2 65 Maintenance Card",
      subTitle:
        "Category 3_HUAWEI IdeaHub_RFR 30BD-S_12Months_Per Hardware Maintenance card",
    },
    {
      img: imagenine,
      title: "CloudLink Mic 500T",
      subTitle: "HUAWEI Mic 500T, Microphone Array",
    },
    {
      img: imageeight,
      title: "IdeaHub S2 75/86 Maintenance Card",
      subTitle:
        "Category 5_HUAWEI IdeaHub_RFR 30BD-S_12Months_Per Hardware Maintenance card",
    },
  ];

  return (
    <>
      <ReusableBanner
        title="Huwaei eKit Digitizaltion Product"
        subText="Discover the power of Huawei eKit at Synergetics Global System. Whether you have questions about our comprehensive range of services, are eager to explore potential partnerships, or require expert technical support, our dedicated team is here to guide you. Connect with us today, and let's embark on a transformative journey towards cutting-edge ICT solutions together."
      />
      <section className="ekit__wrapper">
        <div className="ekit--heading">
          <h2></h2>
          <p></p>
        </div>

        <div className="ekit__products">
          <div className="ekit__cards">
            <h2>SME Network</h2>
            <div className="ekit__cards--wrapper">
              {sme.map((sm) => (
                <div className="ekit__card" key={sm.title}>
                  <img src={sm.img} alt={sm.title} />
                  <h3>{sm.title}</h3>
                  <p>{sm.subTitle}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="ekit__cards">
            <h2>MiniFTTO</h2>
            <div className="ekit__cards--wrapper">
              {mini.map((sm) => (
                <div className="ekit__card" key={sm.title}>
                  <img src={sm.img} alt={sm.title} />
                  <h3>{sm.title}</h3>
                  <p>{truncateSubtitle(sm.subTitle)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="ekit__cards">
            <h2>Data Storage</h2>
            <div className="ekit__cards--wrapper">
              {data.map((sm) => (
                <div className="ekit__card" key={sm.title}>
                  <img src={sm.img} alt={sm.title} />
                  <h3>{sm.title}</h3>
                  <p>{truncateSubtitle(sm.subTitle)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="ekit__cards">
            <h2>IdeaHub</h2>
            <div className="ekit__cards--wrapper">
              {idea.map((sm) => (
                <div className="ekit__card" key={sm.title}>
                  <img src={sm.img} alt={sm.title} />
                  <h3>{sm.title}</h3>
                  <p>{sm.subTitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default Ekit;
