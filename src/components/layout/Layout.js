import React from "react";

import Header from "./header/Header";

import "./Layout.scss";

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
