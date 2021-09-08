import React from "react";
import { portfoliosData } from "../content/portfolios/portfolios-data";

import Sorting from "../components/sorting/Sorting";
import Layout from "../components/layout/Layout";
import PortfolioList from "../components/portfolio-list/PortfolioList";

const Portfolios = () => {
  const portfolios = portfoliosData;

  const skillCollection = [];
  for (let i = 0; i < portfolios.length; i++) {
    skillCollection.push(portfolios[i].skills);
  }

  const removeDuplicateSkill = [...new Set(skillCollection.flat())];

  return (
    <Layout customClassName="portfolios">
      <Sorting skills={removeDuplicateSkill} />
      <PortfolioList portfolios={portfolios} />
    </Layout>
  );
};

export default Portfolios;
