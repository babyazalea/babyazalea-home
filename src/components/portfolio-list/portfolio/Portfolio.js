import React from "react";

import Card from "../../ui/card/Card";
import SkillIcons from "../../ui/skill-icon/SkillIcons";
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
      {/*<Card*/}
      {/*  customClassName="portfolio-card"*/}
      {/*  bgStyle={props.portfolio["color-theme"].card}*/}
      {/*>*/}
      {/*  <div className="portfolio-inside" style={insideBg}>*/}
      {/*    <div className="portfolio-title" style={titleAndDescBg}>*/}
      {/*      <span>{props.portfolio.title}</span>*/}
      {/*      <div className="show-me-what-you-got">*/}
      {/*        <SkillIcons skills={props.portfolio.skills} />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="emoji">{props.portfolio.emoji}</div>*/}
      {/*    <div className="portfolio-description" style={titleAndDescBg}>*/}
      {/*      <span>{props.portfolio.description}</span>*/}
      {/*    </div>*/}
      {/*    <div className="links">*/}
      {/*      <a className="play-link" href={props.portfolio.playLink}>*/}
      {/*        <i className="fas fa-play"></i>*/}
      {/*      </a>*/}
      {/*      <a className="github-link" href={props.portfolio.githubLink}>*/}
      {/*        <i className="fab fa-github"></i>*/}
      {/*      </a>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</Card>*/}
      <Card>
        <span>{props.portfolio.title}</span>
        <span>{props.portfolio.description}</span>
        <div className="show-me-what-you-got">
          <SkillIcons skills={props.portfolio.skills} />
        </div>
        <div className="links">
          <a className="play-link" href={props.portfolio.playLink}>
            <i className="fas fa-play"></i>
          </a>
          <a className="github-link" href={props.portfolio.githubLink}>
            <i className="fab fa-github"></i>
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Portfolio;
