import React, { useState } from "react";
import html from "../Images/html5.png";
import css3 from "../Images/css3.png";
import javascript from "../Images/javascript.png";
import bootstrap from "../Images/bootstrap.png";
import react from "../Images/react.png";
import firebase from "../Images/firebase.png";
import VSCode from "../Images/vs-code.png";
import NpmImage from "../Images/npm.png";
import GitImage from "../Images/git.png";
import CommandImage from "../Images/command.png";
import PostManIcon from "../Images/PostManIcon.png";
import flutterIcon from "../Images/flutterIcon.png";

const Skills = () => {
  const [isSkillsVisible, setSkillsVisible] = useState(true);
  const [isToolsVisible, setToolsVisible] = useState(false);

  const [activeTab, setActiveTab] = useState("skills");

  const handleButtonClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <section className="skills" id="skills">
        <div className="skills-content section-content">
          <p className="section-subtitle">My skills</p>
          <h2 className="h3 section-title">
            What My Programming Skills Included?
          </h2>
          <p className="section-text">
            I develop simple, intuitive and responsive user interface that helps
            users get things done with less effort and time with those
            technologies.
          </p>
          <div
            className={`skills-toggle ${activeTab === "tools" ? "active" : ""}`}
            data-toggle-box
          >
            <button
              className={`toggle-btnfirst ${
                activeTab === "skills" ? "active" : ""
              }`}
              data-toggle-btn
              onClick={() => handleButtonClick("skills")}
            >
              Skills
            </button>
            <button
              className={`toggle-btnfirst ${
                activeTab === "tools" ? "active" : ""
              }`}
              data-toggle-btn
              onClick={() => handleButtonClick("tools")}
            >
              Tools
            </button>
          </div>
        </div>
        <div className="skills-box" data-skills-box>
          {activeTab === "skills" && (
            <ul
              className={`skills-list ${
                activeTab === "skills" ? "active" : ""
              }`}
            >
              <li>
                <div className="skill-card">
                  <div className="tooltip">HTML5</div>
                  <div className="card-icon">
                    <img src={html} alt="HTML5 logo" />
                  </div>
                </div>
              </li>

              <li>
                <div className="skill-card">
                  <div className="tooltip">CSS3</div>
                  <div className="card-icon">
                    <img src={css3} alt="CSS3 logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">JavaScript</div>
                  <div className="card-icon">
                    <img src={javascript} alt="JavaScript logo" />
                  </div>
                </div>
              </li>

              <li>
                <div className="skill-card">
                  <div className="tooltip">Bootstrap</div>
                  <div className="card-icon">
                    <img src={bootstrap} alt="Bootstrap logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">React</div>
                  <div className="card-icon">
                    <img src={react} alt="React logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">Firebase</div>
                  <div className="card-icon">
                    <img src={firebase} alt="Firebase logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">Flutter</div>
                  <div className="card-icon">
                    <img
                      src={flutterIcon}
                      alt="Flutter logo"
                      className="img-fluid mx-auto h-50 w-50"
                    />
                  </div>
                </div>
              </li>
            </ul>
          )}
          {activeTab === "tools" && (
            <ul
              className={`tools-list ${activeTab === "tools" ? "active" : ""}`}
            >
              <li>
                <div className="skill-card">
                  <div className="tooltip">Vs Code</div>
                  <div className="card-icon">
                    <img src={VSCode} alt="Vs code logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">Npm</div>
                  <div className="card-icon">
                    <img src={NpmImage} alt="Npm logo" />
                  </div>
                </div>
              </li>

              <li>
                <div className="skill-card">
                  <div className="tooltip">Git</div>
                  <div className="card-icon">
                    <img src={GitImage} alt="Git logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">Command Line</div>
                  <div className="card-icon">
                    <img src={CommandImage} alt="Command Line logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">Post Man</div>
                  <div className="card-icon">
                    <img
                      src={PostManIcon}
                      alt="Post Man"
                      className="h-50 w-50 mx-auto img-fluid"
                    />
                  </div>
                </div>
              </li>
              {/* <li>
              <div className="skill-card">
                <div className="tooltip">Webpack</div>
                <div className="card-icon">
                  <img src="./assets/images/webpack.png" alt="Webpack logo" />
                </div>
              </div>
            </li>
           
            <li>
              <div className="skill-card">
                <div className="tooltip">Npm</div>
                <div className="card-icon">
                  <img src="./assets/images/npm.png" alt="Npm logo" />
                </div>
              </div>
            </li>
          
            <li>
              <div className="skill-card">
                <div className="tooltip">VS Code</div>
                <div className="card-icon">
                  <img src="./assets/images/vs-code.png" alt="VS Code logo" />
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">Slack</div>
                <div className="card-icon">
                  <img src="./assets/images/slack.png" alt="Slack logo" />
                </div>
              </div>
            </li> */}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};

export default Skills;
