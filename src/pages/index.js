import * as React from "react";

import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const IndexPage = () => {
  return (
    <Layout noExtension={true} customClassName="top">
      <Home />
    </Layout>
  );
};

export default IndexPage;
