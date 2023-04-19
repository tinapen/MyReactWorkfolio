import React from "react";
import "./Projects.css";

import Cologic from "../../assets/Cologic.png";
import TravelBlog from "../../assets/TravelBlog.png";
import Restaurant from "../../assets/Restaurant.png";
import PizzaResto from "../../assets/PizzaResto.png";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title">
          SAMPLE <span className="different">PROJECTS</span>
        </h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={Cologic} alt="Cologic Design Agency" />
                </div>
              </div>
              <div className="project_information">
                <h2>Cologic</h2>
                <p>Cologic is a design agency and branding company.</p>
                <div></div>
                <div>
                  <a
                    href="https://tinapen.github.io/Cologic/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See the demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/tinapen/Cologic"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={TravelBlog} alt="Travel blog" />
                </div>
              </div>
              <div className="project_information">
                <h2>Travel Blog</h2>
                <p>See the wonderful destination around the world.</p>
                <div></div>
                <div>
                  <a
                    href="https://tinapen.github.io/CreateReactWebsite/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See the demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/tinapen/CreateReactWebsite"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={PizzaResto} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Pizza Restaurant</h2>
                <p>Sample pizza restaurant ordering website.</p>
                <div></div>
                <div>
                  <a
                    href="https://tinapen.github.io/PizzaRestaurant/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See the demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/tinapen/PizzaRestaurant"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={Restaurant} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Food Ordering App</h2>
                <p>Sample Food Ordering App.</p>
                <div></div>
                <div>
                  <a
                    href="https://tinapen.github.io/ReactJSResponsiveRestaurantDesign/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See the demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/tinapen/ReactJSResponsiveRestaurantDesign"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
