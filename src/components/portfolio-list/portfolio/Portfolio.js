import React from "react";

import Card from "../../ui/card/Card";
import SkillIcons from "../../ui/skill-icon/SkillIcons";
import "./Portfolio.scss";

const Portfolio = (props) => {
  return (
    <div className="portfolio">
      <Card customClassName="portfolio-card">
        <div className="portfolio-bg">
          <span>{props.portfolio.emoji}</span>
        </div>
        <div className="portfolio-title-and-skills">
          <span className="portfolio-title">{props.portfolio.title}</span>
          <div className="show-me-what-you-got">
            <SkillIcons skills={props.portfolio.skills} />
          </div>
        </div>
        <div className="portfolio-description">
          {props.portfolio.description.map((desc, index) => (
            <p className="portfolio-description-line" key={index}>
              <span>
                <i className="fas fa-circle"></i>
              </span>
              {desc}
            </p>
          ))}
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
