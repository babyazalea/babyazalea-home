import React from "react";

import Card from "../ui/card/Card";
import firebaseLogo from "../../images/logos/firebase.svg";
import "./Portfolio.scss";

const Portfolio = (props) => {
  return (
    <div className="portfolio">
      <Card customClassName="portfolio-card">
        <div className="portfolio-inside">
          <div className="portfolio-title">
            <span>{props.portfolio.title}</span>
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
          <div className="portfolio-description">
            <span>{props.portfolio.description}</span>
          </div>
          <div className="links">
            <div className="play-link">
              <i className="fas fa-play"></i>
            </div>
            <div className="github-link">
              <i className="fab fa-github"></i>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Portfolio;
