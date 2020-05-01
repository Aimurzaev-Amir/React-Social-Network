import React from "react";
import stl from "./Pagination.module.css";

let Pagination = (props) => {
  let pages = [];
  // let pagesConter = Math.ceil (props.totalFriends / props.pageSize)
  // for(let i=1; i<=pagesConter; i++) {
  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }
  let pagesArray = pages.map((pageNum) => {
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
  return <div>{pagesArray}</div>;
};

export default Pagination;
