import React from "react";

import gcLogo from "../../../images/logos/gatsby-cloud.svg";
import gatsbyLogo from "../../../images/logos/gatsby.svg";

// import "./Footer.scss";

const Footer = (props) => {
  return (
    <footer>
      <span className="copyright-text">
        <i className="far fa-copyright"></i>

        <span>babyazalea, powered by</span>
      </span>
      <a href="https://www.gatsbyjs.com/">
        <img
          className="footer-gatsby-logo"
          src={gatsbyLogo}
          alt="gatsbyJs logo"
        />
      </a>
      <a href="https://www.gatsbyjs.com/products/cloud/">
        <img className="footer-gc-logo" src={gcLogo} alt="gatsby cloud logo" />
      </a>
    </footer>
  );
};

export default Footer;
