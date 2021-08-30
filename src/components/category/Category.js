import React from "react";

import "./Category.scss";
import Skill from "./skill/Skill";

const Category = (props) => {
  return (
    <div className="category">
      <div className="none-selected">
        {props.skills.map((skill, index) => (
          <Skill skill={skill} key={index} />
        ))}
      </div>
      <span className="category-message">다음 스킬에 따라 분류합니다:</span>
      <div className="selected"></div>
    </div>
  );
};

export default Category;
