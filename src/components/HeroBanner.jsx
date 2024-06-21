import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="hero-container">
      <div className="hero-background-container">
        <img
          className="hero-background"
          src="/public/assets/Allura UI Windows.png"
          alt=""
        />
      </div>
      <div>
        <div className="name-container">
          <div className="intro-name">Hi, I am Hassan 🎨</div>
          <img
            className="highlight"
            src="/public/assets/Highlight.svg"
            alt=""
          />
        </div>
        <p className="user-biography">
          I am a UI/UX Designer, I like to make interfaces simple and
          aesthetically pleasing for users; The idea is not to create an
          interface for creating it, it is that users prefer you because your
          product is easy to use.
        </p>

        <button className="hero-contact-button">
          Contact Me!
          <img src="/public/assets/arrow-circle-right.svg" alt="" />
        </button>
      </div>

      <img className="arrow" src="/public/assets/Arrow_01.svg" alt="" />
    </div>
  );
};

export default HeroBanner;