import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";

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
      <nav>
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
                <span className="lg">읽을거리</span>
                <span className="sm">
                  <i className="fas fa-i-cursor"></i>
                </span>
              </Link>
            </li>
            <li>
              <a href="/">
                <span className="lg">만든 것들</span>
                <span className="sm">
                  <i className="fas fa-code"></i>
                </span>
              </a>
            </li>
            <li>
              <Link to="/credits">
                <span className="lg">크레딧</span>
                <span className="sm">
                  <i className="fas fa-scroll"></i>
                </span>
              </Link>
            </li>
            <li>
              <a href="https://github.com/babyazalea" className="github-link">
                <span>
                  <i className="fab fa-github"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
