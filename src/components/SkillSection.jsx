import React from "react";
import "./SkillSection.css";
const SkillSection = () => {
  const skillsArray = [
    {
      name: "Figma / Adobe XD",
      percentage: 90,
    },
    {
      name: "UI Design",
      percentage: 80,
    },
    {
      name: "Information Architecture",
      percentage: 80,
    },
    {
      name: "UX Design",
      percentage: 70,
    },
    {
      name: "Box Model",
      percentage: 70,
    },
    {
      name: "Business Model Canvas",
      percentage: 70,
    },
    {
      name: "Design Systems",
      percentage: 70,
    },
    {
      name: "Prototyping",
      percentage: 70,
    },
  ];
  return (
    <div className="skill-container">
      <img className="effect dots-skill" src="assets/dots skill.svg" alt="" />
      <div className="skill-title">
        <div className="title-text">Skills</div>
        <div className="image-container">
          <img src="/assets/Highlight_10.svg" alt="" />
        </div>
      </div>
      <div className="gray-line"></div>
      <div className="skills">
        {skillsArray.map((skill) => (
          <div className="skill">
            <div className="percentage-text">{skill.percentage}%</div>
            <div className="percentage-ellipse-container">
              <img
                className="percentage-ellipse"
                src={"assets/Ellipse " + skill.percentage + ".svg"}
                alt=""
              />
            </div>
            <img
              className="full-ellipse"
              src="/assets/Ellipse Full.svg"
              alt=""
            />

            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
