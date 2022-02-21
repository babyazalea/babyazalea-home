import React from "react";
import { Link } from "gatsby";

import Post from "./post/Post";

const PostList = (props) => {
  return (
    <div className="w-full flex justify-center mb-10">
      <ul className="max-w-2xl lg:max-w-lg md:w-7/12 sm:w-9/12 w-10/12 flex flex-col gap-8 divide-y">
        {props.readings.map((reading) => (
          <li key={reading.id} >
            <Link to={`../reading${reading.fields.slug}`}>
              <Post reading={reading.frontmatter} excerpt={reading.excerpt} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
