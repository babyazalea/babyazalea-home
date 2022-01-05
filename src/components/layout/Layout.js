import React, { Fragment } from "react";

import Header from "./header/Header";
import Main from "./main/Main";

import "./Layout.scss";

const Layout = (props) => {
  return (
    <Fragment>
      <Header
        noExtension={props.noExtension}
        customClassName={props.customClassName}
      />
      <Main customClassName={props.customClassName}>{props.children}</Main>
    </Fragment>
  );
};

export default Layout;
