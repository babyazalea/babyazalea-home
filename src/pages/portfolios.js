import React from "react";

import Sorting from "../components/sorting/Sorting";
import Layout from "../components/layout/Layout";
import PortfolioList from "../components/portfolio-list/PortfolioList";

const Portfolios = () => {
  const portfolios = [
    {
      title: "햄버거 찾기",
      description: "원하는 햄버거를 찾아드려요",
      skills: ["react", "firebase", "angular"],
      "theme-color": "var(--amber-color800)",
      emoji: "🍔",
    },
    {
      title: "햄버거 찾기",
      description: "원하는 햄버거를 찾아드려요",
      skills: ["react", "firebase"],
      "theme-color": "var(--dark-green-color200)",
      emoji: "🍔",
    },
    {
      title: "햄버거 찾기",
      description: "원하는 햄버거를 찾아드려요",
      skills: ["react", "firebase"],
      "theme-color": "var(--cyan-color700)",
      emoji: "🍔",
    },
  ];

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
