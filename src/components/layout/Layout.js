import React from "react";

import Header from "./header/Header";
import Main from "./main/Main";

// import "./Layout.scss";

const Layout = (props) => {
  return (
    <div className="flex flex-col w-full h-screen p-0 m-0">
      <Header />
      <Main>{props.children}</Main>
    </div>
  );
};

export default Layout;
