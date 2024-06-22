import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="user-container">
        <div className="profile-circle">
          <img className="profile-image" src="../assets/Morado.png" alt="" />
        </div>
        <div className="user-name">Hassan Abu Ali</div>
      </div>
      <ul className="header-list">
        <li className="active">Home</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Blog</li>
      </ul>
      <button className="contact-button">Contact Me</button>
      <div className="menu">
        <div className="first-line"></div>
        <div className="second-line"></div>
      </div>
    </div>
  );
};

export default Navbar;
