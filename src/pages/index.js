import * as React from "react";
import Home from "../components/home/Home";
import Layout from "../components/layout/Layout";

const IndexPage = () => {
  return (
    <Layout customClassName={"home"}>
      <Home />
    </Layout>
  );
};

export default IndexPage;
