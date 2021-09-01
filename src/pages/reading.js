import React from "react";

import Category from "../components/category/Category";
import Layout from "../components/layout/Layout";
import PostList from "../components/post-list/PostList";

const Reading = () => {
  const readings = [
    {
      title: "test1",
      writtenAt: new Date("December 17, 1995 03:24:00"),
    },
    {
      title: "test2",
      writtenAt: new Date("December 17, 1995 03:24:00"),
    },
    {
      title: "test3",
      writtenAt: new Date("December 17, 1995 03:24:00"),
    },
    {
      title: "test4",
      writtenAt: new Date("December 17, 1995 03:24:00"),
    },
  ];

  return (
    <Layout customClassName="reading">
      <Category />
      <PostList readings={readings} />
    </Layout>
  );
};

export default Reading;
