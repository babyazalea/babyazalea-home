import React from "react";

import Card from "../../ui/card/Card";
import firebaseLogo from "../../../images/logos/firebase.svg";
import "./Portfolio.scss";

const Portfolio = (props) => {
  let insideBg;
  let titleAndDescBg;
  if (
    props.portfolio["theme-color"] &&
    props.portfolio["theme-color"].includes("color")
  ) {
    const colorNumber = props.portfolio["theme-color"]
      .split("color")[1]
      .split(")")[0];
    const colorNameTemplate = props.portfolio["theme-color"].replace(
      colorNumber,
      "-number"
    );

    let lightColorNumber = 100;

    if (colorNumber > 400) {
      lightColorNumber = 200;
    }

    insideBg = {
      backgroundColor: colorNameTemplate.replace(
        "-number",
        lightColorNumber / 2
      ),
    };

    titleAndDescBg = {
      backgroundColor: colorNameTemplate.replace("-number", lightColorNumber),
    };
  }

  return (
    <div className="portfolio">
      <Card
        customClassName="portfolio-card"
        bgColor={props.portfolio["theme-color"]}
      >
        <div className="portfolio-inside" style={insideBg}>
          <div className="portfolio-title" style={titleAndDescBg}>
            <span>{props.portfolio.title}</span>
          </div>
          <div className="show-me-what-you-got" style={titleAndDescBg}>
            {props.portfolio.skills.map((skill, index) => {
              if (skill === "firebase") {
                return (
                  <div className="skill-icon">
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
                <div className="skill-icon">
                  <i className={`fab fa-${skill}`} key={index}></i>
                </div>
              );
            })}
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
