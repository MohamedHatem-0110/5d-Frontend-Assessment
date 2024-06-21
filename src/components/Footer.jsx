import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <img src="assets/instagram.svg" alt="" />
        <img src="assets/facebook.svg" alt="" />
        <img src="assets/linkedin.svg" alt="" />
        <img src="assets/twitter.svg" alt="" />
      </div>
      <div className="copyright-text">&copy; All Rights Reserved</div>
    </div>
  );
};

export default Footer;
