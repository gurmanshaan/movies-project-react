import React from "react";

const Pagination = (props) => {
  const totalItems = props.totalResults;
  const pageSize = props.dataLimit;
  const currentPage = props.currentPage;
  const totalPages = props.pages;
  let startPage, endPage;
  
  if (totalPages <= 10) {
    startPage = 1;
    endPage = totalPages;
  }
  else {
    if (currentPage <= 6) {
      startPage = 1;
      endPage = 10;
    }
     else if (currentPage + 4 >= totalPages) {
      startPage = totalPages - 9;
      endPage = totalPages;
    }
     else {
      startPage = currentPage - 5;
      endPage = currentPage + 4;
    }
  }


var startIndex = (currentPage - 1) * pageSize; 
var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1); 

var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i); 


  function goToNextPage() {
    props.nextPage(props.currentPage + 1);
  }

  function goToPreviousPage() {
    props.nextPage(props.currentPage - 1);
  }

  function changePage (e){
    const pageNumber = Number(e.target.textContent);
    props.nextPage(pageNumber);
  }

  return (
    <>
      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`paginationItem ${props.currentPage === 1 ? "disabled" : ""}`}
        >
          <span>
            Previous
            </span>
        </button>
      {pages.map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? 'active' : ""}`}
        >
          <span>{item}</span>
        </button>
      ))}
        <button
          onClick={goToNextPage}
          className={`paginationItem ${
            props.currentPage === props.pages ? "disabled" : ""
          }`}
        >
          <span>
          Next
          </span>
        </button>
      </div>
    </>
  );
};

export default Pagination;
