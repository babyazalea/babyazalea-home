import React from "react";
import { Link } from "gatsby";

import homeIcon from "../../../images/icons/home-icon.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <Link to="/portfolios">만든 것들</Link>
        </div>
        <div>
          <Link to="/">
            <img src={homeIcon} alt="home icon" />
          </Link>
        </div>
        <div>
          <Link to="/reading">읽을 거리</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
