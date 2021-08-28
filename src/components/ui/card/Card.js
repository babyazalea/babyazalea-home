import React from "react";

import "./Card.scss";

const Card = (props) => {
  let cardClassName = "card";
  if (props.customClassName) {
    cardClassName = `card ${props.customClassName}`;
  }

  return <div className={cardClassName}>{props.children}</div>;
};

export default Card;
