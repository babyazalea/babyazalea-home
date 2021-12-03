import * as React from "react";

import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";

const IndexPage = () => {
  return (
    <Layout noExtension={true} customClassName="top">
      <Home />
    </Layout>
  );
};

export default IndexPage;
