import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";

import "./Category.scss";

const Category = (props) => {
  const categorySelectHandler = (event) => {
    if (event.target.value === "reading-all") {
      props.categoryInitializer();
    } else {
      props.categoryHandler(event.target.value);
    }
  };

  return (
    <div className="category">
      <div className="category-lg">
        <button
          className="reading-all"
          onClick={() => props.categoryInitializer()}
        >
          <FontAwesomeIcon icon={faFolder} />
          모든 글
        </button>
        <ul className="category-wrapper">
          {props.subCategorys.map((category, index) => {
            return (
              <li key={index} className="sub-category">
                <button onClick={() => props.categoryHandler(category)}>
                  <FontAwesomeIcon icon={faFolder} />
                  <span>{category}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="category-sm">
        <select name="reading-category" onChange={categorySelectHandler}>
          <option value="reading-all">모든 글</option>
          {props.subCategorys.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Category;
