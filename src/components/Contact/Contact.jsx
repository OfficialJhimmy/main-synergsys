/* eslint-disable react/no-unescaped-entities */
import "./index.css";
import call from '../../assets/call.svg'
import time from '../../assets/time.svg'
import place from '../../assets/place.svg'


const Contact = () => {
  return (
    <section className="contactus__container">
      <div className="contactus__details">
        <p className="contactus__details--toppara">Contact us</p>
        <h2>Contact Us. It's Easy.</h2>
        <p className="contactus__details--topsubpara">
          Write to us, Our customer services are always available 24/7 to attend
          to your needs.
        </p>

        <div className="contactus__details--info">
          <div className="contactus__details--info__number">
            <img src={call} alt="O.M.Associates Icon" />
            <div className="contactus__details--moreinfo">
              <p>Call Today</p>
              <span>+234 805 209 7191 / +234 803 080 8086</span>
            </div>
          </div>
          <div className="contactus__details--info__number">
            <img src={time} alt="O.M.Associates Icon" />
            <div className="contactus__details--moreinfo">
              <p>Monday to Friday</p>
              <span>9AM - 5PM</span>
            </div>
          </div>
          <div className="contactus__details--info__number">
            <img src={place} alt="O.M.Associates Icon" />
            <div className="contactus__details--moreinfo">
              <p>Office Address</p>
              <span>11, Oremeji Street, Off Simbiat Abiola Rd,Compu-Ville, Ikeja, Lagos, Nigeria.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="contactus__form">
        <form action="">
          <div className="contactus__form--container">
            <div className="contactus__form--input">
              <p>Full Name</p>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="john david"
              />
            </div>
            <div className="contactus__form--input">
              <p>Email</p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="contactus__form--input">
              <p>Phone Number</p>
              <input
                type="tel"
                name="phone_number"
                id="phone_number"
                placeholder="+2348219908"
              />
            </div>
            <div className="contactus__form--input">
              <p>Company(optional)</p>
              <input
                type="text"
                name="company"
                id="company"
                placeholder="yourcompany ltd"
              />
            </div>
          </div>
            <div className="contactus__form--input contact--textarea">
            <p>Message</p>
              <textarea name="" id="" cols="10" rows="10" placeholder="Briefly tell us how we can help you?"></textarea>  
            </div>
          <button>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
