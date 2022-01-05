import React, { useEffect, useRef } from "react";
import { Link, navigate } from "gatsby";

import homeIcon from "../../../images/icons/home-icon.svg";
import "./Header.scss";

const Header = (props) => {
  const headerExtensionClasses = useRef("header-extension");

  useEffect(() => {
    if (!props.noExtension) {
      headerExtensionClasses.current = `header-extension extending selected-${props.customClassName}`;
    }
  }, [props.noExtension, props.customClassName]);

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <div className="logo-text-wrapper">
            <span>babyazalea's</span>
            <span>home</span>
          </div>
        </Link>
      </div>
      <div className="menus">
        <ul>
          <li>
            <Link to="/">
              <span>읽을거리</span>
            </Link>
          </li>
          <li>
            <a href="/">
              <span>포트폴리오</span>
            </a>
          </li>
          <li>
            <Link to="/credits">
              <span>credits</span>
            </Link>
          </li>
          <li>
            <a href="https://github.com/babyazalea">
              <span>
                <i className="fab fa-github"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
