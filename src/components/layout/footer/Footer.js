import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-3 mb-5">
      <div className="flex gap-3">
        <a href="https://github.com/tyange" className="text-black sm:text-gray-500 hover:text-black">
          <FontAwesomeIcon icon={faGithub} size={"lg"} />
        </a>
        <a href="https://twitter.com/twit_tyange" className="text-black sm:text-gray-500 hover:text-black">
          <FontAwesomeIcon icon={faTwitter} size={"lg"} />
        </a>
      </div>
      <div className="flex items-center gap-1 text-xs">
        <span>
          <FontAwesomeIcon icon={faCopyright} />
        </span>
        <span>{new Date().getFullYear()}</span>
        <span>tyange</span>
      </div>
    </footer>
  );
};

export default Footer;
