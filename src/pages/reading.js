import React, { useEffect, useState } from "react";
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
          category
        }
      }
    }
  }
`;

const Reading = ({ data }) => {
  const allReadings = data.allMarkdownRemark.nodes;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showingReadings, setShowingReadings] = useState(allReadings);

  useEffect(() => {
    setShowingReadings(() =>
      selectedCategory !== null
        ? allReadings.filter(
            (readings) => readings.frontmatter.category === selectedCategory
          )
        : allReadings
    );
  }, [selectedCategory, allReadings]);

  const subCategorys = [
    { name: "프로그래밍" },
    { name: "생각들" },
    { name: "옛날들" },
  ];

  const categoryHandler = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const categoryInitializer = () => {
    setSelectedCategory(null);
  };

  return (
    <Layout customClassName="reading">
      <Category
        subCategorys={subCategorys}
        categoryHandler={categoryHandler}
        categoryInitializer={categoryInitializer}
      />
      <div className="post-part">
        <PostList readings={showingReadings} />
        <PageTunner readings={showingReadings} />
      </div>
    </Layout>
  );
};

export default Reading;
