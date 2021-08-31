import React from "react";

import Category from "../components/category/Category";
import Layout from "../components/layout/Layout";
import PostList from "../components/post-list/PostList";

const Reading = () => {
  return (
    <Layout customClassName="reading">
      <Category />
      <PostList />
    </Layout>
  );
};

export default Reading;
