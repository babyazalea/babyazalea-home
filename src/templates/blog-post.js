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

  return (
    <Layout customClassName="post-template">
      <Seo title={post.frontmatter.title} />
      <div className="blog-post-wrapper">
        <div className="blog-post-caption">
          <h1>{post.frontmatter.title}</h1>
          <span>{post.frontmatter.date}</span>
        </div>
        <article
          className="prose prose-gray"
          dangerouslySetInnerHTML={{ __html: post.html }}
        >
          {/*<section*/}
          {/*  className="blog-post-section"*/}

          {/*  itemProp="articleBody"*/}
          {/*/>*/}
          {/*{post.rawMarkdownBody}*/}
          {/*<h1>Garlic bread with cheese: What the science tells us</h1>*/}
          {/*<p>*/}
          {/*  For years parents have espoused the health benefits of eating garlic bread with cheese to their*/}
          {/*  children, with the food earning such an iconic status in our culture that kids will often dress*/}
          {/*  up as warm, cheesy loaf for Halloween.*/}
          {/*</p>*/}
        </article>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;
