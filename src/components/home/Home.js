import React from "react";

import Introduction from "./introduction/Introduction";
import "./Home.scss";
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
