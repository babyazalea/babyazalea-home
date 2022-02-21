import React from "react";

const Main = (props) => {
  return (
    <main
      className={`flex flex-col flex-1 mt-10 ${
        props.isBlogPost && "p-5 box-border overflow-x-hidden"
      }`}
    >
      {props.children}
    </main>
  );
};

export default Main;
