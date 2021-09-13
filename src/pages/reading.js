import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { blogCategorys } from "../content/blog/blog-categorys";

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
  const maximumPostsNumber = 4;

  const [selectedPageNum, setSelectedPageNum] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showingReadings, setShowingReadings] = useState([]);

  useEffect(() => {
    setShowingReadings(() =>
      selectedCategory !== null
        ? allReadings
            .filter(
              (readings) => readings.frontmatter.category === selectedCategory
            )
            .slice(
              selectedPageNum > 1 ? (selectedPageNum - 1) * 3 + 1 : 0,
              selectedPageNum > 1
                ? (selectedPageNum - 1) * 3 + maximumPostsNumber + 1
                : maximumPostsNumber
            )
        : allReadings.slice(
            selectedPageNum > 1 ? (selectedPageNum - 1) * 3 + 1 : 0,
            selectedPageNum > 1
              ? (selectedPageNum - 1) * 3 + maximumPostsNumber + 1
              : maximumPostsNumber
          )
    );
  }, [selectedCategory, allReadings, selectedPageNum]);

  const subCategorys = blogCategorys;

  const categoryHandler = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const categoryInitializer = () => {
    setSelectedCategory(null);
  };

  const selectPageNumHandler = (num) => {
    setSelectedPageNum((prevNum) => prevNum !== num && num);
  };

  let readingsNumber;
  if (selectedCategory !== null) {
    readingsNumber = allReadings.filter(
      (readings) => readings.frontmatter.category === selectedCategory
    ).length;
  } else {
    readingsNumber = allReadings.length;
  }

  return (
    <Layout customClassName="reading">
      <Category
        subCategorys={subCategorys}
        categoryHandler={categoryHandler}
        categoryInitializer={categoryInitializer}
      />
      <div className="post-part">
        <PostList readings={showingReadings} />
        <PageTunner
          readingsNumber={readingsNumber}
          selectPageNumHandler={selectPageNumHandler}
        />
      </div>
    </Layout>
  );
};

export default Reading;
