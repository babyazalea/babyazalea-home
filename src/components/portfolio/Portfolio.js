import React from "react";

import Card from "../ui/card/Card";
import firebaseLogo from "../../images/logos/firebase.svg";
import "./Portfolio.scss";

const Portfolio = (props) => {
  return (
    <div className="portfolio">
      <Card customClassName="portfolio-card">
        <h2>{props.portfolio.title}</h2>
        <span>{props.portfolio.description}</span>
        <div>
          {props.portfolio.skills.map((skill) => {
            if (skill === "firebase") {
              return (
                <img
                  src={firebaseLogo}
                  alt="firebase logo"
                  className="firebase-logo"
                />
              );
            }
            return <i className={`fab fa-${skill}`}></i>;
          })}
        </div>
      </Card>
    </div>
  );
};

export default Portfolio;
