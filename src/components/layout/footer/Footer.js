import React from "react";

import gcLogo from "../../../images/logos/gatsby-cloud.svg";
import gatsbyLogo from "../../../images/logos/gatsby.svg";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <footer>
      <span className="copyright-text">
        <i class="far fa-copyright"></i>

        <span>babyazalea, powered by</span>
      </span>
      <img
        className="footer-gatsby-logo"
        src={gatsbyLogo}
        alt="gatsbyJs logo"
      />
      <img className="footer-gc-logo" src={gcLogo} alt="gatsby cloud logo" />
    </footer>
  );
};

export default Footer;
