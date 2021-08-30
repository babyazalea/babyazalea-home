import React from "react";

import "./Card.scss";

const Card = (props) => {
  let cardClassName = "card";
  if (props.customClassName) {
    cardClassName = `card ${props.customClassName}`;
  }

  let bgColor;
  if (props.bgColor) {
    bgColor = props.bgColor;
  }

  return (
    <div className={cardClassName} style={{ backgroundColor: bgColor }}>
      {props.children}
    </div>
  );
};

export default Card;
