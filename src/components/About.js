import React from "react";
import aboutBanner from "../Images/about-banner.png";
import Homebr3 from "../Images/1234.png";
import ResumeFile from "../components/ResumePdf/NIRMALRAJSResume.pdf";

const About = () => {
  const downloadResume = () => {
    fetch(ResumeFile)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a Blob from the response
        const url = window.URL.createObjectURL(new Blob([blob]));

        // Create a link element
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "NIRMALRAJSResume.pdf");

        // Append the link to the body and trigger the click event
        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error fetching PDF:", error));
  };

  return (
    <article class="container">
      <section className="about d-flex row col-lg-12" id="about">
        <figure className="about-banner col-lg-6  ">
          <img
            src={Homebr3}
            alt="A man in a alice blue shirt with a thinking expression"
            className="w-100 img-fluid about-image "
          />
        </figure>
        <div className="about-content section-content col-lg-6 ">
          <p className="section-subtitle">About me</p>
          <h2 className="h3 section-title">
            Need a Creative Product? I can Help You!
          </h2>
          <p className="section-text">
            Hi! I’m Nirmal raj, and I’m a developer who has passion for building
            clean Mobile applications and web applications with intuitive
            functionalities. I enjoy the process of turning ideas into reality
            using creative solutions. I’m always curious about learning new
            skills, tools, and concepts. In addition to working on various solo
            full stack projects, I have worked with creative teams, which
            involves daily stand-ups and communications, source control, and
            project management.
          </p>
          <div className="btn-group1 mx-auto">
            <a className="btnfirst btnfirst-secondary" href="#contact">
              Hire me
            </a>
            <button
              className="btnfirst btn1-primary"
              onClick={() => downloadResume()}
            >
              Download CV
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
