import React from "react";
import { Link } from "gatsby";

import Post from "./post/Post";

import "./PostList.scss";

const PostList = (props) => {
  return (
    <div className="post-list">
      <ul>
        {props.readings.map((reading) => (
          <li key={reading.id}>
            <Link to={`../reading${reading.fields.slug}`}>
              <Post reading={reading.frontmatter} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
