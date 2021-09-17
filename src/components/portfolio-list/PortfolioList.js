import React from "react";

import Portfolio from "./portfolio/Portfolio";

import "./PortfolioList.scss";

const PortfolioList = (props) => {
  return (
    <div className="portfolios-wrapper">
      <ul>
        {props.portfolios.map((portfolio, index) => (
          <li key={index}>
            <Portfolio portfolio={portfolio} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioList;
