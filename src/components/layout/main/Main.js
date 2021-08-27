import React from "react";

import "./Main.scss";

const Main = (props) => {
  return <main className={props.customClassName}>{props.children}</main>;
};

export default Main;
