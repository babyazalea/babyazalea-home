import React from "react";

const Main = (props) => {
  return (
    <main
      className={`flex flex-col flex-1 mt-10 overflow-x-hidden ${
        props.isBlogPost && "p-5 box-border"
      }`}
    >
      {props.children}
    </main>
  );
};

export default Main;
