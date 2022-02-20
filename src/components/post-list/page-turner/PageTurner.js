import React from "react";

const PageTurner = (props) => {
  const pageIndicators = ["1"];

  const pagesNumber = Math.floor(props.readingsNumber / 4) + 1;
  for (let i = 2; i < pagesNumber + 1; i++) {
    pageIndicators.push(`${i}`);
  }

  return (
    <div className="flex justify-center p-5">
      <ul className="flex gap-5 w-1/3">
        {pageIndicators.map((pageIndicator, index) => (
          <li key={index}>
            <button
              className={`flex justify-center items-center border border-black-100 w-7 h-7 rounded-lg ${
                parseInt(pageIndicator) === props.selectedPageNum && "bg-neutral-200"
              }`}
              onClick={() =>
                props.selectPageNumHandler(parseInt(pageIndicator))
              }
            >
              <span className="text-xs">{pageIndicator}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageTurner;
