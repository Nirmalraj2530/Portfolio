import React from 'react';
import aboutBanner from '../Images/about-banner.png';
import Homebr3 from "../Images/1234.png";



const About = () => {
  return (
    <article class="container">
    <section className="about d-flex row col-lg-12" id="about">
      <figure className="about-banner col-lg-6  ">
        <img src={Homebr3} alt="A man in a alice blue shirt with a thinking expression" className="w-100 img-fluid about-image " />
      </figure>
      <div className="about-content section-content col-lg-6 ">
        <p className="section-subtitle">About me</p>
        <h2 className="h3 section-title">Need a Creative Product? I can Help You!</h2>
        <p className="section-text">
          Hi! I’m Nirmal raj, and I’m a developer who has passion for building clean web applications with intuitive
          functionalities. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious
          about learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I
          have worked with creative teams, which involves daily stand-ups and communications, source control, and project
          management.
        </p>
        <div className="btn-group1 mx-auto">
          <button className="btnfirst btnfirst-secondary">Hire me</button>
          <button className="btnfirst btn1-primary">Download cv</button>
        </div>
      </div>
    </section>
    </article>
  );
};

export default About;
