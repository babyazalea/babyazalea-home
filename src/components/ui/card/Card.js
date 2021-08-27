import React from "react";

import "./Card.scss";

const Card = (props) => {
  return (
    <div className={`card ${props.customClassName}`}>{props.children}</div>
  );
};

export default Card;
