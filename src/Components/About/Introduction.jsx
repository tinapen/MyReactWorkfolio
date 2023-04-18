import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/portfolio-pic.jpg";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Maria Cristina Peñaflor </span> and
                I am from{" "}
                <span className="different">
                  {" "}
                  San Miguel, Bulacan (Philippines)
                </span>
                . I'm a graduating Information Technology student from{" "}
                <span className="different">
                  Baliwag Polytechnic College (BTECH)
                </span>
                . Then currently an intern at{" "}
                <span className="different">Teravison Corp.</span> as a{" "}
                <span className="different">Web Developer intern.</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
