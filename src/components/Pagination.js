import React from 'react'

const Pagination = (props) =>{

function goToNextPage (){
   props.nextPage(props.currentPage +1); 
}

function goToPreviousPage() {
  props.nextPage(props.currentPage -1); 
    }

  return(
<> 
    <div className="pagination">
      <button
        onClick={goToPreviousPage}
        className={`prev ${props.currentPage === 1 ? 'disabled' : ''}`}
      >
        Prev
      </button>
      <button
        onClick={goToNextPage}
        className={`next ${props.currentPage === props.pages ? 'disabled' : ''}`}
      >
        Next
      </button>
    </div>
</>
  )
}

export default Pagination;




