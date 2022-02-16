import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import "./blog-post.scss";
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

  return (
    <Layout customClassName="post-template">
      <Seo title={post.frontmatter.title} />
      <div className="blog-post-wrapper">
        <div className="blog-post-caption">
          <h1>{post.frontmatter.title}</h1>
          <span>{post.frontmatter.date}</span>
        </div>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <section
            className="blog-post-section"
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </article>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;
