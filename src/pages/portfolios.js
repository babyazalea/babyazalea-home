import React from "react";
import Category from "../components/category/Category";
import Layout from "../components/layout/Layout";
import Portfolio from "../components/portfolio/Portfolio";

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
      <Category skills={removeDuplicateSkill} />
      <div className="portfolios-wrapper">
        {portfolios.map((portfolio, index) => (
          <Portfolio portfolio={portfolio} key={index} />
        ))}
      </div>
    </Layout>
  );
};

export default Portfolios;
