import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faICursor, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// import "./Header.scss";

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
                  <FontAwesomeIcon icon={faICursor} />
                </span>
              </Link>
            </li>
            <li>
              <a href="mailto:usun16@gmail.com">
                <span className="lg mail-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="sm">
                  <FontAwesomeIcon icon={faEnvelope} />
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
