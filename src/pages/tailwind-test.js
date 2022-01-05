import React from 'react';
import Layout from "../components/layout/Layout";

const TailwindTest = () => {
  return (
    <Layout customClassName="testTailwind">
      <h1 className="text-3xl font-bold underline "> Hello world! </h1>
    </Layout>
  );
};

export default TailwindTest;
