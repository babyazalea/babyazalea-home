import React from "react";

import "./Skill.scss";

const Skill = (props) => {
  const skillNameConverter = (skillName) => {
    switch (skillName) {
      case "react":
        return "React";
      case "angular":
        return "Angular";
      case "firebase":
        return "Firebase";
      default:
        return;
    }
  };

  return <div className="skill">{skillNameConverter(props.skill)}</div>;
};

export default Skill;
