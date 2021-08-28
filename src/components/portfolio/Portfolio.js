import React from "react";

import Card from "../ui/card/Card";
import firebaseLogo from "../../images/logos/firebase.svg";
import "./Portfolio.scss";

const Portfolio = (props) => {
  return (
    <div className="portfolio">
      <Card customClassName="portfolio-card">
        <div>
          <h2>{props.portfolio.title}</h2>
        </div>
        <div>
          <span>{props.portfolio.description}</span>
        </div>
        <div className="show-me-what-you-got">
          {props.portfolio.skills.map((skill, index) => {
            if (skill === "firebase") {
              return (
                <img
                  src={firebaseLogo}
                  alt="firebase logo"
                  className="firebase-logo"
                  key={index}
                />
              );
            }
            return <i className={`fab fa-${skill}`} key={index}></i>;
          })}
        </div>
      </Card>
    </div>
  );
};

export default Portfolio;
