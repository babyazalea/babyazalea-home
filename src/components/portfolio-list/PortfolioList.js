import React from "react";

import Portfolio from "./portfolio/Portfolio";

import "./PortfolioList.scss";

const PortfolioList = (props) => {
  return (
    <div className="portfolios-wrapper">
      {props.portfolios.map((portfolio, index) => (
        <Portfolio portfolio={portfolio} key={index} />
      ))}
    </div>
  );
};

export default PortfolioList;
