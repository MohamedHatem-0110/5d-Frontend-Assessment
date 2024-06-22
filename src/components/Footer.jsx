import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <img
        className="effect dots-footer-1"
        src="assets/dots footer1.svg"
        alt=""
      />
      <img
        className="effect dots-footer-2"
        src="assets/dots footer2.svg"
        alt=""
      />
      <div className="icons">
        <img src="assets/instagram.svg" alt="" />
        <img src="assets/facebook.svg" alt="" />
        <img src="assets/linkedin.svg" alt="" />
        <img src="assets/twitter.svg" alt="" />
      </div>
      <div className="copyright-text">Hassan Abu Ali &copy; 2022</div>
    </div>
  );
};

export default Footer;
