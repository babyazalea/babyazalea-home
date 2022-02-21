import React from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

import tyangeLogo from "../../../images/logos/tyange-logo.svg";

const Header = () => {
  return (
    <header className="w-full h-24">
      <nav className="flex flex-row items-center w-full h-24 justify-between px-10 md:p-0 md:gap-x-32 md:justify-around lg:justify-evenly">
        <div className="logo">
          <Link to="/">
            <div>
              <img className="pt-1" src={tyangeLogo} alt="tyange logo" />
            </div>
          </Link>
        </div>
        <div>
          <ul className="flex flex-row gap-5">
            <li>
              <a href="mailto:usun16@gmail.com">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} size={"lg"} />
                </span>
              </a>
            </li>
            <li>
              <Link href="/credits">
                <span>
                  <FontAwesomeIcon icon={faCircleQuestion} size={"lg"} />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
