import React from "react";

import Post from "./post/Post";

import "./PostList.scss";

const PostList = (props) => {
  return (
    <div className="post-list">
      <ul>
        {props.readings.map((reading, index) => (
          <li key={index}>
            <Post reading={reading} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
