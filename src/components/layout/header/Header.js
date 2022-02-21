import React from "react";
import { Link, navigate } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCircleQuestion,
} from "@fortawesome/free-regular-svg-icons";

import tyangeLogo from "../../../images/logos/tyange-logo.svg";

const Header = (props) => {
  const homeButtonHandler = () => {
    if(props.categoryInitializer) {
      props.categoryInitializer();
      navigate("/");
    }

    navigate("/");
  }

  return (
    <header className="w-full h-24">
      <nav className="flex flex-row items-center w-full h-24 justify-between px-10 md:p-0 md:gap-x-32 md:justify-around lg:justify-evenly">
        <div className="logo">
          <button onClick={() => homeButtonHandler()}>
            <div>
              <img className="pt-1" src={tyangeLogo} alt="tyange logo" />
            </div>
          </button>
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
              <Link href="/credits/">
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
