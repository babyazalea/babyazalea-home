import React from "react";

// import "./Main.scss";

const Main = (props) => {
  return <main className="flex flex-col flex-1 mt-10">{props.children}</main>;
};

export default Main;
