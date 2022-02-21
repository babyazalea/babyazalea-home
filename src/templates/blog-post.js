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
      <div className="w-full flex flex-col items-center gap-24">
        <div className="w-11/12 sm:w-fit flex flex-col items-center">
          <p className="blog-post-title mb-10 text-xl sm:text-xl font-semibold italic">{post.frontmatter.title}</p>
          <span className="text-sm">
            {createdAt.getFullYear()}년 {createdAt.getMonth() + 1}월{" "}
            {createdAt.getDate()}일
          </span>
        </div>
        <article
          className="prose prose-gray w-11/12 prose:code:text-black"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;
