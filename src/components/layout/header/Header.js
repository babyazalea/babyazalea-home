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
        <span>babyazalea's home</span>
      </div>
      <div className="menus">
        <ul>
            <li>읽을거리</li>
            <li>포트폴리오</li>
            <li>credits</li>
            <li>github</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
