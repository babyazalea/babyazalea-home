import React from "react";

import Card from "../../ui/card/Card";

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

  return (
    <div className="skill">
      <Card>{skillNameConverter(props.skill)}</Card>
    </div>
  );
};

export default Skill;
