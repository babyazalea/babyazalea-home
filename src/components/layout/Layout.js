import React from "react";

import Header from "./header/Header";
import Main from "./main/Main";

import "./Layout.scss";
import Footer from "./footer/Footer";

const Layout = (props) => {
  return (
    <div className={`layout ${props.customClassName}`}>
      <Header
        noExtension={props.noExtension}
        customClassName={props.customClassName}
      />
      <Main customClassName={props.customClassName}>{props.children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
