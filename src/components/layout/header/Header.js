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
    <header className="w-full h-24">
      <nav className="flex flex-row justify-around sm:justify-between items-center w-full h-24 sm:px-20">
        <div className="logo">
          <Link to="/">
            <div>
              <span>tyange-blog</span>
            </div>
          </Link>
        </div>
        <div>
          <ul className="flex flex-row gap-10 sm:gap-7">
            <li>
              <Link to="/">
                <span className="hidden sm:block">읽을거리</span>
                <span className="sm:hidden">
                  <FontAwesomeIcon icon={faICursor} />
                </span>
              </Link>
            </li>
            <li>
              <a href="mailto:usun16@gmail.com">
                <span>
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
