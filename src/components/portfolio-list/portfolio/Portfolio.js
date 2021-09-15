import React from "react";

import Card from "../../ui/card/Card";
import firebaseLogo from "../../../images/logos/firebase.svg";
import "./Portfolio.scss";

const Portfolio = (props) => {
  let insideBg = {};
  let titleAndDescBg = {};

  if (props.portfolio["color-theme"]) {
    const portfolioTheme = props.portfolio["color-theme"];

    insideBg = portfolioTheme["inside-card"].emojiBg;
    titleAndDescBg = portfolioTheme["inside-card"].textBg;
  }

  return (
    <div className="portfolio">
      <Card
        customClassName="portfolio-card"
        bgStyle={props.portfolio["color-theme"].card}
      >
        <div className="portfolio-inside" style={insideBg}>
          <div className="portfolio-title" style={titleAndDescBg}>
            <span>{props.portfolio.title}</span>
            <div className="show-me-what-you-got">
              {props.portfolio.skills.map((skill, index) => {
                if (skill === "firebase") {
                  return (
                    <div className="skill-icon" key={index}>
                      <img
                        src={firebaseLogo}
                        alt="firebase logo"
                        className="firebase-logo"
                        key={index}
                      />
                    </div>
                  );
                }
                return (
                  <div className="skill-icon" key={index}>
                    <i className={`fab fa-${skill}`}></i>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="emoji">{props.portfolio.emoji}</div>
          <div className="portfolio-description" style={titleAndDescBg}>
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
