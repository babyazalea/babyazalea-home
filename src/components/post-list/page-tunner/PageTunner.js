import React from "react";

import "./PageTunner.scss";

const PageTunner = (props) => {
  const pageIndicators = ["1"];
  if (props.readings.length >= 5) {
    const pagesNumber = props.readings.length / 4 + 1;
    for (let i = 0; i < pagesNumber + 1; i++) {
      pageIndicators.push(i);
    }
  }

  return (
    <div className="page-tunner">
      <ul>
        {pageIndicators.map((pageIndicator, index) => (
          <li className="page-indicator" key={index}>
            <span>{pageIndicator}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageTunner;
