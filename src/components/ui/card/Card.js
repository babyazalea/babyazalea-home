import React from "react";

import "./Card.scss";

const Card = (props) => {
  let cardClassName = "card";
  if (props.customClassName) {
    cardClassName = `card ${props.customClassName}`;
  }

  let bgStyle = {};
  if (props.bgStyle) {
    bgStyle = props.bgStyle;
  }

  return (
    <div className={cardClassName} style={bgStyle}>
      {props.children}
    </div>
  );
};

export default Card;
