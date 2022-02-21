import React from "react";

const Main = (props) => {
  return (
    <main
      className={`flex flex-col flex-1 overflow-x-hidden ${props.isCredits ? "0" : "mt-10"} ${
        props.isBlogPost ? "p-5 box-border" : ""
      }`}
    >
      {props.children}
    </main>
  );
};

export default Main;
