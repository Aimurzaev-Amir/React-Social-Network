import React, { useState } from "react";
import stl from "./Pagination.module.css";

let Pagination = (props) => {
  let pages = [];
  let pagesCounter = Math.ceil(props.totalFriends / props.pageSize);
  for (let i = 1; i <= pagesCounter; i++) {
    pages.push(i);
  }
  const portion = 10;
  let portionCounter = pagesCounter / portion;
  let [currentPortion, setPortion] = useState(1);

  const PrevPortion = () => {
    setPortion(currentPortion - 1);
  };

  const NextPortion = () => {
    setPortion(currentPortion + 1);
  };

  let pagesArray = pages
    .filter(
      (p) => p >= currentPortion * portion - 9 && p <= currentPortion * portion
    )
    .map((pageNum) => {
      return (
        <span
          key={pageNum}
          className={props.currentPage === pageNum ? stl.selectedPage : null}
          onClick={() => props.onPageNumberClick(pageNum)}
        >
          {pageNum}
        </span>
      );
    });
  return (
    <div className={stl.pagination}>
      {currentPortion > 1 && <button onClick={PrevPortion}>prev</button>}
      {pagesArray}
      {currentPortion < portionCounter && (
        <button onClick={NextPortion}>next</button>
      )}
    </div>
  );
};

export default Pagination;
