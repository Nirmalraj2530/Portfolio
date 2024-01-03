import React from "react";
import Project1 from "../Images/project-1.png";
import Project2 from "../Images/project2.png";
import Project3 from "../Images/project-3.png";
import Project4 from "../Images/project-4.png";
import Project5 from "../Images/project-5.png";

const Projects = () => {
  return (
    <div className="container">
      <div className="row">
        {/* <h3 className='text-center'>Browse My Recent</h3>
            <h1 className='text-center'>Projects</h1> */}
        <section class="project" id="portfolio">
          <ul class="project-list">
            <li>
              <div class="project-content section-content">
                <p class="section-subtitle">My Works</p>

                <h2 class="h3 section-title">
                  See My Works Which Will Amaze You!
                </h2>

                <p class="section-text">
                  We develop the best quality website and mobile Application that serves for the
                  long-term. Well-documented, clean, easy and elegant interface
                  helps any non-technical clients.
                </p>
              </div>
            </li>

            <li>
              <a href="#" class="project-card">
                <figure class="card-banner">
                  <img
                    src={Project1}
                    class="w-100 img-fluid"
                    alt="A macintosh on a yellow background."
                  />
                </figure>

                <div class="card-content">
                  <h3 class="h4 card-title">HRM Mobile Application</h3>

                  <time class="publish-date" datetime="2023-04">
                    April 2022
                  </time>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="project-card">
                <figure class="card-banner">
                  <img
                    src={Project2}
                    class="w-100"
                    alt="On a Blue background, a Wacom and a mouse."
                  />
                </figure>

                <div class="card-content">
                  <h3 class="h4 card-title">Expo lead APP 02</h3>

                  <time class="publish-date" datetime="2023-06">
                    April 2022
                  </time>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="project-card">
                <figure class="card-banner">
                  <img
                    src={Project3}
                    class="w-100"
                    alt="A Cassette tape on a mellow apricot background."
                  />
                </figure>

                <div class="card-content">
                  <h3 class="h4 card-title">Drona APP 03</h3>

                  <time class="publish-date" datetime="2023-08">
                    April 2022
                  </time>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="project-card">
                <figure class="card-banner">
                  <img
                    src={Project4}
                    class="w-100"
                    alt="Blue digital watch on a dark liver background."
                  />
                </figure>

                <div class="card-content">
                  <h3 class="h4 card-title">Urban wallah 04</h3>

                  <time class="publish-date" datetime="2023-012">
                    April 2022
                  </time>
                </div>
              </a>
            </li>

            <li>
              <button class="load-more">Load more work</button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Projects;
