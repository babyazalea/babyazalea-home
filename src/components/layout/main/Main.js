import React from "react";

// import "./Main.scss";

const Main = (props) => {
  return (
    <main className="flex-1">
      <div>{props.children}</div>
    </main>
  );
};

export default Main;
