import React from "react";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="about-me-container">
      <img className="background-image" src="assets/Vector 2.png" alt="" />
      <img
        className="background-image"
        src="assets/Vector-Cuadros.png"
        alt=""
      />
      <div className="about-me-title">About Me</div>

      <div className="ethnicity-container">
        <div className="vector-images">
          <img src="assets/Vector 10.svg" alt="" />
          <img className="vector9" src="assets/Vector 9.svg" alt="" />
          <img className="vector8" src="assets/Vector 8.svg" alt="" />
        </div>
        <div className="ethinicity-text">
          <div className="ethnicity-percentage">100%</div>
          <div className="ethnicity-title">Colombian</div>
        </div>
      </div>
      <div className="middle-container">
        <div className="traits-container">
          <div className="trait-container left-trait">
            <img src="assets/Icono.svg" alt="" />
            <div className="percentage">100%</div>
            <div className="trait">Responsibilty</div>
          </div>
          <div className="trait-container right-trait">
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
