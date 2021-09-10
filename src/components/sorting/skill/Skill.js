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

  return (
    <div className={props.isSelected ? "skill selected-skill" : "skill"}>
      <button onClick={() => props.skillSelectedHandler(props.skill)}>
        {skillNameConverter(props.skill)}
      </button>
    </div>
  );
};

export default Skill;
