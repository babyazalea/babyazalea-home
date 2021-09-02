import React from "react";

import Layout from "../components/layout/Layout";
import Category from "../components/category/Category";
import PostList from "../components/post-list/PostList";
import PageTunner from "../components/post-list/page-tunner/PageTunner";

const Reading = () => {
  const categorys = {
    name: "모든 글",
    subCategorys: [
      { name: "프로그래밍" },
      { name: "생각들" },
      { name: "옛날들" },
    ],
  };

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
      <Category categorys={categorys} />
      <div className="post-part">
        <PostList readings={readings} />
        <PageTunner readings={readings} />
      </div>
    </Layout>
  );
};

export default Reading;
