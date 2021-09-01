import React from "react";
import Card from "../../ui/card/Card";

import "./Post.scss";

const Post = (props) => {
  return (
    <div className="post">
      <Card customClassName="post-card">
        <h2 className="post-title">{props.reading.title}</h2>
        <span className="post-written-at">
          {props.reading.writtenAt.toISOString().slice(0, 10)}
        </span>
      </Card>
    </div>
  );
};

export default Post;
