import React from "react";
import Card from "../../ui/card/Card";

// import "./Post.scss";

const Post = (props) => {
  return (
    <div className="post">
      <Card customClassName="post-card">
        <span className="post-title">{props.reading.title}</span>
        <span className="post-written-at">
          {props.reading.date.slice(0, 10)}
        </span>
      </Card>
    </div>
  );
};

export default Post;
