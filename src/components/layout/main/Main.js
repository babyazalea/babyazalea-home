import React from "react";

// import "./Main.scss";

const Main = (props) => {
  return (
    <main>
      <div className={props.customClassName}>{props.children}</div>
    </main>
  );
};

export default Main;
