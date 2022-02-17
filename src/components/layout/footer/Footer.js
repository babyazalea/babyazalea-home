import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

import gcLogo from "../../../images/logos/gatsby-cloud.svg";
import gatsbyLogo from "../../../images/logos/gatsby.svg";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <footer>
      <div className="contact">
        <a href="https://github.com/babyazalea">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="copyright">
        <span className="copyright-text">
          <FontAwesomeIcon icon={faCopyright} />
          <span>{new Date().getFullYear()} babyazalea, powered by</span>
        </span>
        <a href="https://www.gatsbyjs.com/">
          <img
            className="footer-gatsby-logo"
            src={gatsbyLogo}
            alt="gatsbyJs logo"
          />
        </a>
        <a href="https://www.gatsbyjs.com/products/cloud/">
          <img
            className="footer-gc-logo"
            src={gcLogo}
            alt="gatsby cloud logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
