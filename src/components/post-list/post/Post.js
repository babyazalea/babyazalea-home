import React from "react";

const Post = (props) => {
  let createdAt;

  if (props.reading.date) {
    createdAt = new Date(props.reading.date);
  }

  return (
    <div className="flex flex-col mt-8">
      <p className="text-xl font-bold">{props.reading.title}</p>
      <span className="text-xs mt-3 mb-5">
        {createdAt.getFullYear()}년 {createdAt.getMonth() + 1}월{" "}
        {createdAt.getDate()}일
      </span>
      <p className="text-sm font-light">{props.excerpt}</p>
    </div>
  );
};

export default Post;
