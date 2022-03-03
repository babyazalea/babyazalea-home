import React from "react";

import githubIcon from "../../../images/logos/github-brands.svg";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-3 mb-5">
      <div className="flex gap-3">
        <a href="https://github.com/tyange">
          <img
            className="w-5 opacity-60 hover:opacity-100"
            src={githubIcon}
            alt="Github icon"
          />
        </a>
      </div>
      <div className="flex items-center gap-1 text-xs">
        <span>©</span>
        <span>{new Date().getFullYear()}</span>
        <span>tyange</span>
      </div>
    </footer>
  );
};

export default Footer;
