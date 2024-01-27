import "./index.css";
import aboutImage from "../../assets/imagetwo.jpg";
import pattern from "../../assets/pattern.png";

const AboutUs = () => {
  return (
    <section className="aboutus__container">
      <div className="aboutus__info">
        <h2>About Us</h2>
        <p className="aboutus__info--bigpara">
          We are an incorporated company in Nigeria, with the primary objective
          of providing Information and Communication Technology (ICT)
          consultancy services, Systems Network Integration as well as product
          solutions in the West African Sub-Region. The company is creating a
          niche profile in the delivery of unique technology solutions for its
          clientele.
        </p>
        <p className="aboutus__info--smallpara">
          The advantage of its Technology Partner Relationship with world
          renowned manufacturers and solution providers has proven to be the
          competitive edge for SYNERGSYS. Our Core Mission is the provision of
          Contemporary ICT solutions for the purpose of enhancing Enterprise
          Business Processes, SMB Applications, and Socio-Cultural Living
          Standards
        </p>

     
      </div>
      <div className="aboutus__imagebox">
        <img
          src={aboutImage}
          alt="About our professional team"
          className="img--us"
        />
        <img src={pattern} alt="background pattern" className="img--pattern" />
       
      </div>
    </section>
  );
};

export default AboutUs;
