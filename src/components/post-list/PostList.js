import React from "react";
import { Link } from "gatsby";

import Post from "./post/Post";

const PostList = (props) => {
  return (
    <div className="w-full flex justify-center basis-10/12 mb-10">
      <ul className="xl:w-5/12 md:w-6/12 sm:w-8/12 w-9/12 flex flex-col gap-8 divide-y">
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
