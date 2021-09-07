import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import Category from "../components/category/Category";
import PostList from "../components/post-list/PostList";
import PageTunner from "../components/post-list/page-tunner/PageTunner";

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          date
        }
      }
    }
  }
`;

const Reading = ({ data }) => {
  console.log(data.allMarkdownRemark.nodes);

  const categorys = {
    name: "모든 글",
    subCategorys: [
      { name: "프로그래밍" },
      { name: "생각들" },
      { name: "옛날들" },
    ],
  };

  const readings = data.allMarkdownRemark.nodes;

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
