import React, { useEffect, useMemo, useState } from "react";
import { portfoliosData } from "../content/portfolios/portfolios-data";

import Sorting from "../components/sorting/Sorting";
import Layout from "../components/layout/Layout";
import PortfolioList from "../components/portfolio-list/PortfolioList";

const skillCollection = [];
for (let i = 0; i < portfoliosData.length; i++) {
  skillCollection.push(portfoliosData[i].skills);
}

const removeDuplicateSkills = [...new Set(skillCollection.flat())];

const comparingSkills = (portfolioSkills, selectedSkills) => {
  let score = 0;
  selectedSkills.forEach((skill) =>
    portfolioSkills.forEach(
      (portfolioSkill) => skill === portfolioSkill && (score += 1)
    )
  );

  return score;
};

const Portfolios = () => {
  const skills = useMemo(() => removeDuplicateSkills, []);

  const [portfolios, setPortfolios] = useState(portfoliosData);
  const [allSkills, setAllSkills] = useState(skills);
  const [sortingSkills, setSortingSkills] = useState([]);

  useEffect(() => {
    setPortfolios(() => {
      if (sortingSkills.length > 0) {
        const portfoliosWithScore = [];
        for (let i = 0; i < portfoliosData.length; i++) {
          const portfoliosSkills = portfoliosData[i].skills;

          portfoliosWithScore.push({
            portfolio: portfoliosData[i],
            score: comparingSkills(portfoliosSkills, sortingSkills),
          });
        }

        const updatedPortfolios = [];
        const filteredPortfolios = portfoliosWithScore.filter(
          (portfolioData) => portfolioData.score >= sortingSkills.length
        );

        filteredPortfolios.forEach((portfolioData) => {
          updatedPortfolios.push(portfolioData.portfolio);
        });

        return updatedPortfolios;
      }
      return [...portfoliosData];
    });
  }, [sortingSkills]);

  const skillSelectedHandler = (skillName) => {
    setAllSkills((prevSkills) => {
      return prevSkills.filter((skill) => skill !== skillName);
    });
    setSortingSkills((prevSortingSkills) => {
      const newSortingSkills = [...prevSortingSkills];
      newSortingSkills.push(skillName);
      return newSortingSkills;
    });
  };

  const skillUnselectedHandler = (skillName) => {
    setSortingSkills((prevSortingSkills) => {
      return prevSortingSkills.filter((skill) => skill !== skillName);
    });
    setAllSkills((prevSkills) => {
      const newSkills = [...prevSkills];
      newSkills.push(skillName);
      return newSkills;
    });
  };

  return (
    <Layout customClassName="portfolios">
      <Sorting
        skills={allSkills}
        sortingSkills={sortingSkills}
        skillSelectedHandler={skillSelectedHandler}
        skillUnselectedHandler={skillUnselectedHandler}
      />
      <PortfolioList portfolios={portfolios} />
    </Layout>
  );
};

export default Portfolios;
