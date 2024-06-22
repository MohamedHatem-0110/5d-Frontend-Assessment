import React from "react";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="about-me-container">
      <img
        className="background-image desktop-background"
        src="assets/Vector 2.png"
        alt=""
      />
      <img
        className="background-image"
        src="assets/Vector-Cuadros.png"
        alt=""
      />
      <div className="about-me-title">About Me</div>

      <div className="ethnicity-container">
        <img className="mask-group" src="assets/Mask group.png" alt="" />

        <div className="ethnicity-text">
          <div className="ethnicity-percentage">100%</div>
          <div className="ethnicity-title">Colombian</div>
        </div>
      </div>
      <div className="middle-container">
        <div className="traits-container">
          <div className="trait-container">
            <img src="assets/Icono.svg" alt="" />
            <div className="percentage">100%</div>
            <div className="trait">Responsibilty</div>
          </div>
          <div className="trait-container">
            <img src="assets/Icono2.svg" alt="" />
            <div className="percentage">100%</div>
            <div className="trait">Punctuality</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
