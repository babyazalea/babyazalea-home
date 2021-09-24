import React from "react";

import "./PageTunner.scss";

const PageTunner = (props) => {
  const pageIndicators = ["1"];
  if (props.readingsNumber >= 5) {
    const pagesNumber = Math.floor(props.readingsNumber / 4) + 1;
    for (let i = 2; i < pagesNumber + 1; i++) {
      pageIndicators.push(`${i}`);
    }
  }

  const indicatorClasses = (indicatorNum) =>
    indicatorNum === props.selectedPageNum
      ? "page-indicator highlighted"
      : "page-indicator";

  return (
    <div className="page-tunner">
      <ul>
        {pageIndicators.map((pageIndicator, index) => (
          <li className={indicatorClasses(parseInt(pageIndicator))} key={index}>
            <button
              onClick={() =>
                props.selectPageNumHandler(parseInt(pageIndicator))
              }
            >
              <span>{pageIndicator}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageTunner;
