import React from "react";

import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

const Layout = (props) => {
  console.log(props.isBlogPost);

  return (
    <div className="flex flex-col w-screen h-screen p-0 m-0 font-sans overflow-x-hidden">
      <Header categoryInitializer={props.categoryInitializer} />
      <Main isCredits={props.isCredits} isBlogPost={props.isBlogPost}>
        {props.children}
      </Main>
      <Footer />
    </div>
  );
};

export default Layout;
