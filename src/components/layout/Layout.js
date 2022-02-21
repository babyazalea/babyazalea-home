import React from "react";

import Header from "./header/Header";
import Main from "./main/Main";

const Layout = (props) => {
  console.log(props.isBlogPost);

  return (
    <div className="flex flex-col w-screen h-screen p-0 m-0 font-sans">
      <Header />
      <Main isCredits={props.isCredits} isBlogPost={props.isBlogPost}>{props.children}</Main>
    </div>
  );
};

export default Layout;
