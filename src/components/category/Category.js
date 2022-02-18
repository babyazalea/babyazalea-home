import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// import "./Category.scss";

const Category = (props) => {
  const categorySelectHandler = (event) => {
    if (event.target.value === "reading-all") {
      props.categoryInitializer();
    } else {
      props.categoryHandler(event.target.value);
    }
  };

  return (
    <div className="w-full flex justify-center mb-16">
      <div className="sm:max-w-lg md:max-w-xl sm:w-fit hidden sm:flex sm:flex-wrap sm:gap-4 sm:p-2 sm:justify-center">
        <button
          className={`sm:flex sm:items-center border border-black-100 shadow-sm p-2 rounded-md ${
            props.selectedCategory === null && "bg-neutral-200"
          }`}
          onClick={() => props.categoryInitializer()}
        >
          <span className="text-sm">모든 글</span>
        </button>
        {props.subCategorys.map((category) => {
          return (
            <button
              className={`sm:flex sm:items-center border border-black-100 shadow-sm p-2 rounded-md ${
                props.selectedCategory === category && "bg-neutral-200"
              }`}
              key={category}
              onClick={() => props.categoryHandler(category)}
            >
              <span className="text-sm">{category}</span>
            </button>
          );
        })}
      </div>
      <div className="sm:hidden">
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
