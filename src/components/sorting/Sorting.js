import React from "react";

import "./Sorting.scss";
import Skill from "./skill/Skill";

const Sorting = (props) => {
  let sortedSkills;
  if (props.sortingSkills.length > 0) {
    sortedSkills = (
      <div
        className={props.skills.length === 0 ? "fully-selected" : "selected"}
      >
        <span className="sorting-message">다음 스킬에 따라 분류합니다:</span>
        {props.sortingSkills.map((skill, index) => (
          <Skill
            key={index}
            isSelected={true}
            skill={skill}
            skillUnselectedHandler={props.skillUnselectedHandler}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="sorting">
      <div className="none-selected">
        {props.skills.map((skill, index) => (
          <Skill
            skillSelectedHandler={props.skillSelectedHandler}
            skill={skill}
            key={index}
          />
        ))}
      </div>
      {sortedSkills}
    </div>
  );
};

export default Sorting;
