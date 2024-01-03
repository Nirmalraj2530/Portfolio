// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCableCar } from '@fortawesome/free-solid-svg-icons';

// function HeartIcon() {
//   const iconStyle = {
//     color: 'red', // Set the color to red
//     fontSize: '2em', // Set the font size to 2em
//     textShadow: '2px 2px 4px #000000', // Add a text shadow
//   };

//   return (
//     <div>
//       <FontAwesomeIcon icon={faCableCar} style={iconStyle} />
//     </div>
//   );
// }

// export default HeartIcon;

// Home.js
import React from "react";
import Homebr from "../Images/hero-banner.png";
import Homebr2 from "../Images/hero-banner-md.png";
import Homebr3 from "../Images/1234.png";
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaComment,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className=" container">
      <section className="homestyle row  col-lg-12 Home  " id="home">
        <figure className="col-lg-6 col-md-12 col-sm-12   ">
          <picture>
            {/* <source srcSet={Homebr} media="(min-width: 768px)" />
            <source srcSet={Homebr2} media="(min-width: 500px)" /> */}
            <img
              src={Homebr3}
              alt="A man in a blue shirt with a happy expression"
              className="img-fluid mx-auto HomeImage "
            />
          </picture>
        </figure>
        <div className="  col-lg-6 col-md-12 col-sm-12 gap-5 homestyle1  ">
          <h2 className=" h2 hero-title ">
            We Design & Build Creative Product
          </h2>
          <a href="#contact" className="btnfirst btn1-primary">
            Get in touch
          </a>
          <ul className="contac-social-list mt-5 d-flex justify-content-center align-items-center gap-5">
            <li>
              <a href="#" className="contact-social-link">
                <div className="tooltip">LinkedIn</div>
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#" className="contact-social-link">
                <div className="tooltip">GitHub</div>

                <FaGithub />
              </a>
            </li>
            <li>
              <a href="#" className="contact-social-link">
                <div className="tooltip">Facebook</div>

                <FaFacebook />
              </a>
            </li>
          </ul>
          {/* <ul className=" d-flex justify-content-around mt-5 flex-wrap">
          <li>
            <a href="#" className="hero-social-link ">
              <IoLogoFacebook />
              
              <div className="tooltip">Facebook</div>
            </a>
          </li>

          <li>
            <a href="#" className="hero-social-link">
              <IoLogoTwitter />
              <div className="tooltip">Twitter</div>
            </a>
          </li>

          <li>
            <a href="#" className="hero-social-link">
              <IoLogoLinkedin />
              <div className="tooltip">LinkedIn</div>
            </a>
          </li>
        </ul> */}

          {/* 
        <a href="#stats" className="scroll-down">
          Scroll
        </a> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
