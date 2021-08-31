import React from "react";

import "./Sorting.scss";
import Skill from "./skill/Skill";

const Sorting = (props) => {
  return (
    <div className="sorting">
      <div className="none-selected">
        {props.skills.map((skill, index) => (
          <Skill skill={skill} key={index} />
        ))}
      </div>
      <span className="sorting-message">다음 스킬에 따라 분류합니다:</span>
      <div className="selected"></div>
    </div>
  );
};

export default Sorting;
