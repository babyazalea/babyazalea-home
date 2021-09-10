import React, { useEffect, useState } from "react";
import { portfoliosData } from "../content/portfolios/portfolios-data";

import Sorting from "../components/sorting/Sorting";
import Layout from "../components/layout/Layout";
import PortfolioList from "../components/portfolio-list/PortfolioList";

const Portfolios = () => {
  const skillCollection = [];
  for (let i = 0; i < portfoliosData.length; i++) {
    skillCollection.push(portfoliosData[i].skills);
  }

  const removeDuplicateSkills = [...new Set(skillCollection.flat())];

  const [portfolios, setPortfolios] = useState(portfoliosData);
  const [skills, setSkills] = useState(removeDuplicateSkills);
  const [sortingSkills, setSortingSkills] = useState([]);

  useEffect(() => {
    setPortfolios((prevPortfolios) => {
      if (sortingSkills.length > 0) {
        let sortedPortfolios = [];
        for (const sortingSkill of sortingSkills) {
          const filteredPortfolios = portfolios.filter(
            (portfolio) =>
              portfolio.skills.findIndex((skill) => skill === sortingSkill) !==
              -1
          );
          filteredPortfolios.map((portfolio) =>
            sortedPortfolios.push(portfolio)
          );
        }
        console.log(sortedPortfolios);
        return [...new Set(sortedPortfolios.flat())];
      }
      return [...prevPortfolios];
    });
  }, [sortingSkills]);

  const skillSelectedHandler = (skillName) => {
    setSortingSkills((prevSortingSkills) => {
      const newSkills = [...prevSortingSkills];
      const isThereSkill = prevSortingSkills.findIndex(
        (skill) => skill === skillName
      );
      if (isThereSkill !== -1) {
        console.log("skill is there");
        return;
      }
      newSkills.push(skillName);
      setSkills((prevSkills) => {
        return prevSkills.filter((skill) => skill !== skillName);
      });
      return newSkills;
    });
  };

  return (
    <Layout customClassName="portfolios">
      <Sorting
        skills={skills}
        sortingSkills={sortingSkills}
        skillSelectedHandler={skillSelectedHandler}
      />
      <PortfolioList portfolios={portfolios} />
    </Layout>
  );
};

export default Portfolios;
