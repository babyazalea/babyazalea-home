import React from "react";

const Main = (props) => {
  return (
    <main
      className={`flex flex-col flex-1 mb-14 ${props.isCredits ? "0" : "mt-10"} ${
        props.isBlogPost ? "p-5 box-border" : ""
      }`}
    >
      {props.children}
    </main>
  );
};

export default Main;
