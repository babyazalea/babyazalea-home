import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import Seo from "../components/seo/seo";

export const query = graphql`
  query PostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        category
      }
      fields {
        slug
      }
    }
  }
`;

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  const createdAt = new Date(post.frontmatter.date);

  return (
    <Layout isBlogPost="true">
      <Seo title={post.frontmatter.title} />
      <div className="flex flex-col items-center w-full gap-24">
        <div className="flex flex-col items-center w-11/12 sm:w-fit">
          <p className="mb-10 text-xl italic font-semibold blog-post-title sm:text-xl">
            {post.frontmatter.title}
          </p>
          <span className="text-sm">
            {createdAt.getFullYear()}년 {createdAt.getMonth() + 1}월{" "}
            {createdAt.getDate()}일
          </span>
        </div>
        <article
          className="w-11/12 prose"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;
