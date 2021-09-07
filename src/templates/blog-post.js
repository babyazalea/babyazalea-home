import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/Layout";

export const query = graphql`
  query PostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
  console.log(post);

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <span>{post.frontmatter.date}</span>
      <div>{post.html}</div>
    </Layout>
  );
};

export default BlogPostTemplate;
