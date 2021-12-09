import React from "react";

import "./Category.scss";

const Category = (props) => {
  return (
    <div className="category">
      <button
        className="reading-all"
        onClick={() => props.categoryInitializer()}
      >
        <i className="far fa-folder"></i>
        모든 글
      </button>
      <ul className="category-wrapper">
        {props.subCategorys.map((category, index) => {
          return (
            <li key={index} className="sub-category">
              <button onClick={() => props.categoryHandler(category)}>
                <i className="far fa-folder"></i>
                <span>{category}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
