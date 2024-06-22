import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const works = [
    {
      name: "Eventos Premium",
      description: "Elegante - Serio - Estatus",
    },
    {
      name: "Mi Portal U",
      description: "Amigable - Dashboard - Simple",
    },
    {
      name: "A&C App",
      description: "Elegante - Serio - Estatus",
    },
  ];
  return (
    <div className="margin-container">
      <div className="portfolio">
        <div className="portfolio-title-text title-text">Portfolio</div>
        <img
          className="portfolio-underline"
          src="assets/Underline_06.svg"
          alt=""
        />
      </div>

      <div className="margin"></div>

      <div className="gray-line"></div>

      <div className="work-container">
        {works.map((work, i) => (
          <div className="work">
            <div className="upper-container">
              <img src={"assets/work " + (i + 1) + ".png"} alt="" />
            </div>

            <div className="work-info">
              <div className="work-name gradient-text">{work.name}</div>
              <div className="work-description">{work.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
