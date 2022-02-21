import React from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <header className="w-full h-24">
      <nav className="flex flex-row items-center w-full h-24 justify-between px-10 md:p-0 md:gap-x-32 md:justify-around lg:justify-evenly">
        <div className="logo">
          <Link to="/">
            <div>
              <span>tyange-blog</span>
            </div>
          </Link>
        </div>
        <div>
          <ul className="flex flex-row">
            <li>
              <a href="mailto:usun16@gmail.com">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} size={"lg"} />
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
