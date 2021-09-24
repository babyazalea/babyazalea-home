import React from "react";

import HomeNavigation from "./home-navigation/HomeNavigation";
import "./Home.scss";
// import Prologue from "./prologue/Prologue";

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* <Prologue /> */}
      <HomeNavigation />
    </div>
  );
};

export default Home;
