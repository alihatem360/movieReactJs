import React from "react";
import ReactPaginate from "react-paginate";
const PaginationComponent = ({ setPage, pageCounter }) => {
  const handlePageClick = (data) => {
    let selected = data.selected;
    console.log(selected + 1);
    setPage(selected + 1);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCounter}
        previousLabel="السابق"
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
};

export default PaginationComponent;
