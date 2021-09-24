import React from "react";

import HomeNavigation from "./home-navigation/HomeNavigation";
import Footer from "../layout/footer/Footer";
import "./Home.scss";
// import Prologue from "./prologue/Prologue";

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* <Prologue /> */}
      <HomeNavigation />
      <Footer />
    </div>
  );
};

export default Home;
