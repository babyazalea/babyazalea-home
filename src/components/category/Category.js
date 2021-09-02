import React from "react";

import "./Category.scss";

const Category = (props) => {
  return (
    <div className="category">
      <ul className="reading-all">
        <span>
          <i className="far fa-folder"></i>
          모든 글
        </span>
        {props.categorys.subCategorys.map((category, index) => {
          return (
            <li key={index} className="sub-category">
              <ul>
                <i className="far fa-folder"></i>
                {category.name}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
