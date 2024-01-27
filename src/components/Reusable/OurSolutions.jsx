import React from "react";
import "./index.css";
import cctv from '../../assets/cctv.jpg'
import networkstorage from '../../assets/networkstorage.jpg'
import videoconferencing from '../../assets/videoconferencing.jpg'
import poe from '../../assets/poe.jpg'
import intrusion from '../../assets/intrusion.jpg'
const OurSolutions = () => {
  return (
    <section className="solutions__wrapper">
      <div className="product__wrapper--headings">
        <h2>Our Solutions</h2>
        <p></p>
      </div>
      <div className="solutions__cards">
        <div className="solutions__card">
          <img src={cctv} alt="Our Solutions" />
          <div className="solutions__card--text">
            <h3>VIDEO SURVEILLANCE</h3>
            <p>
              Our brand and our passion as a company has become most synonymous
              with Video Surveillance Systems. We have over the years built
              capacity in proffering video surveillance solutions using the best
              in class and cost efficient equipment.
              <br />
              Our alliance partnership with big brand names: ACTi, HIKVISION,
              DAHUA, MILESTONE has secured our position as one of the Top 3
              providers of IP Based and HD CCTV solution equipment. As the
              Security Industry consolidates platforms for Video Analytics,
              Smart Cities and Big Data, we will be on-point to delivery the
              best in class services.
            </p>
          </div>
        </div>
        <div className="solutions__card flex-reverse">
          <img src={intrusion} alt="Our Solutions" />
          <div className="solutions__card--text">
            <h3>INTRUSION DETECTION & ACCESS CONTROL</h3>
            <p>
              The need for perimeter security – both indoor and outdoor – grows
              every day. And our portfolio of Intrusion and Access Control
              solutions has enabled our clients to establish complete control of
              their environment.
              <br />
              With features like tamper-proof credential systems, MIFARE and
              contactless card readers, and multiple-input access modes for
              secure identity confirmation, our equipment has become solution
              providers ‘first choice’.
              <br />
              Communications protocols including TCP/IP network interface and
              Wi-Fi standalone terminals, as well as RSA and AES encryptions has
              ensured that End User clients’ accounts
            </p>
          </div>
        </div>
        <div className="solutions__card">
          <img src={networkstorage} alt="Our Solutions" />
          <div className="solutions__card--text">
            <h3>NETWORK STORAGE</h3>
            <p>
              Network Storage Solutions has become increasingly relevant with
              the continued expansion in the need to warehouse data in form of
              video, voice and text. Our Storage Solutions are positioned for
              different demands ranging from Video Surveillance, Rich Media,
              Document Archiving, Cloud based Storage and DR infrastructures.
              <br />
              Our long standing partnership with SYNOLOGY and recently QNAP has
              ensured that we can deliver storage solutions at the attractive
              cost of ownership.
            </p>
          </div>
        </div>
        <div className="solutions__card flex-reverse">
          <img src={videoconferencing} alt="Our Solutions" />
          <div className="solutions__card--text">
            <h3>VIDEO CONFERENCING</h3>
            <p>
              Our video conferencing solutions can be summed up in one simple
              phrase… more for your money! Our solutions embrace H.323 and SIP
              protocols so users can rest assured that our VC systems are
              compatible with all major VC brands. We also offer new product
              line of Conference Cameras that provides cloud- and software based
              VC users more professional tools to grab business opportunities
              anytime and anywhere.
              <br />
              We are turning the dream of high-quality, budget-friendly video
              conferencing into reality for all-sized businesses and many more.
            </p>
          </div>
        </div>
        <div className="solutions__card">
          <img src={poe} alt="Our Solutions" />
          <div className="solutions__card--text">
            <h3>POWER OVER ETHERNET(POE)</h3>
            <p>
              A vast array of POE Solution Offerings has formed the core of the
              transport layer for all communication Packets from Video, Voice,
              Data and Low Voltage Power. From basic to advanced and all the way
              to ultra POE demands SYNERGETICS has the entire array of equipment
              to deliver. 802.3af| 802.3at | 15.4W | 30W POE Converter | POE
              Splitters | POE Injectors | POE Extenders POE Mid-Span | POE
              Switches | Long Reach POE | POE over Coaxial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
