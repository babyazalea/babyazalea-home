import React from "react";

import "./Home.scss";
import Introduction from "./introduction/Introduction";
// import Prologue from "./prologue/Prologue";

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* <Prologue /> */}
      <Introduction />
    </div>
  );
};

export default Home;
