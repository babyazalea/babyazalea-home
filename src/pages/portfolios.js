import React from "react";
import Layout from "../components/layout/Layout";
import Portfolio from "../components/portfolio/Portfolio";

const Portfolios = () => {
  const portfolios = [
    {
      title: "햄버거 찾기",
      description: "원하는 햄버거를 찾아드려요",
      skills: ["react", "firebase"],
    },
    {
      title: "햄버거 찾기",
      description: "원하는 햄버거를 찾아드려요",
      skills: ["react", "firebase"],
    },
    {
      title: "햄버거 찾기",
      description: "원하는 햄버거를 찾아드려요",
      skills: ["react", "firebase"],
    },
    {
      title: "햄버거 찾기",
      description: "원하는 햄버거를 찾아드려요",
      skills: ["react", "firebase"],
    },
    {
      title: "햄버거 찾기",
      description: "원하는 햄버거를 찾아드려요",
      skills: ["react", "firebase"],
    },
    {
      title: "햄버거 찾기",
      description: "원하는 햄버거를 찾아드려요",
      skills: ["react", "firebase"],
    },
  ];

  return (
    <Layout customClassName="portfolios">
      {portfolios.map((portfolio) => (
        <Portfolio portfolio={portfolio} />
      ))}
    </Layout>
  );
};

export default Portfolios;
