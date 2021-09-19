import React from "react";

import firebaseLogo from "../../../images/logos/firebase.svg";
import "./SkillIcons.scss";

const SkillIcons = (props) => {
  let skillIcons = null;
  let className = "skill-icon";

  if (props.customClassName) {
    className = `skill-icon ${props.customClassName}`;
  }

  if (props.skills) {
    skillIcons = props.skills.map((skill, index) => {
      if (skill === "firebase") {
        return (
          <div className={className} key={index}>
            <img
              src={firebaseLogo}
              alt="firebase logo"
              className="firebase-logo"
              key={index}
            />
          </div>
        );
      }
      return (
        <div className={className} key={index}>
          <i className={`fab fa-${skill}`}></i>
        </div>
      );
    });
  }

  return skillIcons;
};

export default SkillIcons;
