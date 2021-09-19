import React from "react";
import { hadSkills } from "../../../content/portfolios/portfolios-data";

import Card from "../../ui/card/Card";
import SkillIcons from "../../ui/skill-icon/SkillIcons";
import "./Introduction.scss";

const Introduction = () => {
  const skills = hadSkills();

  return (
    <div className="introduction">
      <div className="intro-box one">
        <Card customClassName="intro-card">
          <div>
            <span>babyazalea's</span>
            <br />
            <span>home</span>
          </div>
        </Card>
      </div>
      <div className="intro-box two">
        <Card customClassName="intro-card">
          <div>
            <span>홈페이지 사용법</span>
            <span>README</span>
          </div>
        </Card>
      </div>
      <div className="intro-box three">
        <Card customClassName="intro-card">
          <div className="portfolio-nav-skills-part">
            <SkillIcons
              skills={skills}
              customClassName="portfolios-nav-skills"
            />
          </div>
          <div className="portfolio-nav-text-part">
            <span>포트폴리오</span>
            <span>SIDE PROJECT</span>
          </div>
        </Card>
      </div>
      <div className="intro-box four">
        <Card customClassName="intro-card"></Card>
      </div>
      <div className="intro-box five">
        <Card customClassName="intro-card"></Card>
      </div>
      <div className="intro-box six">
        <Card customClassName="intro-card"></Card>
      </div>
      <div className="intro-box seven">
        <Card customClassName="intro-card"></Card>
      </div>
      <div className="intro-box eight">
        <Card customClassName="intro-card"></Card>
      </div>
    </div>
  );
};

export default Introduction;
