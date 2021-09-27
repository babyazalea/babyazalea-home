import React, { useEffect, useRef } from "react";
import { Link, navigate } from "gatsby";

import homeIcon from "../../../images/icons/home-icon.svg";
import "./Header.scss";

const Header = (props) => {
  const headerExtensionClasses = useRef("header-extension");

  useEffect(() => {
    if (!props.noExtension) {
      headerExtensionClasses.current = `header-extension extending ${props.customClassName}`;
    }
  }, [props.noExtension, props.customClassName]);

  return (
    <header>
      <div>
        <div className="header-home-btn">
          {props.customClassName === "post-template" ? (
            <button className="page-back-btn" onClick={() => navigate(-1)}>
              <i className="fas fa-arrow-left"></i>
            </button>
          ) : (
            <Link to="/">
              <img src={homeIcon} alt="home icon" />
            </Link>
          )}
        </div>
        <div className={headerExtensionClasses.current}>
          <Link className="header-portfolios-btn" to="/portfolios">
            <i className="far fa-file-code"></i>
          </Link>
          <Link className="header-reading-btn" to="/reading">
            <i className="far fa-folder-open"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
