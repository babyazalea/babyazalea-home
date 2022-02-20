import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import Category from "../components/category/Category";
import PostList from "../components/post-list/PostList";
import PageTurner from "../components/post-list/page-turner/PageTurner";
import Seo from "../components/seo/seo";

export const query = graphql`
  query blogQuery {
   allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          category
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const allReadings = data.allMarkdownRemark.nodes;
  const maximumPostsNumber = 4;
  const categories =
    allReadings !== null
      ? [
          ...new Set(
            allReadings.map((reading) => reading.frontmatter.category).flat()
          ),
        ]
      : [];

  const [selectedPageNum, setSelectedPageNum] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showingReadings, setShowingReadings] = useState([]);

  useEffect(() => {
    if (allReadings !== null) {
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
              .sort(function (a, b) {
                return (
                  new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
                );
              })
          : allReadings
              .slice(
                selectedPageNum > 1 ? (selectedPageNum - 1) * 3 + 1 : 0,
                selectedPageNum > 1
                  ? (selectedPageNum - 1) * 3 + maximumPostsNumber + 1
                  : maximumPostsNumber
              )
              .sort(function (a, b) {
                return (
                  new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
                );
              })
      );
    }
  }, [selectedCategory, allReadings, selectedPageNum]);

  const categoryHandler = (categoryName) => {
    setSelectedPageNum(1);
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
      <Seo title="읽을거리" />
      <Category
        subCategorys={categories}
        selectedCategory={selectedCategory}
        categoryHandler={categoryHandler}
        categoryInitializer={categoryInitializer}
      />
      <div className="w-full flex-1 flex flex-col">
        <PostList readings={showingReadings} />
        {readingsNumber >= 5 && (
          <PageTurner
            readingsNumber={readingsNumber}
            selectedPageNum={selectedPageNum}
            selectPageNumHandler={selectPageNumHandler}
          />
        )}
      </div>
    </Layout>
  );
};

export default IndexPage;
