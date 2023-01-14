import React from "react";
import ProdctItem from "../productItem/index";

const moviesList = ({ movies }) => {
  return (
    <>
      <div className="row">
        {movies.map((product, index) => {
          return (
            <div className="col-lg-3" key={product.id}>
              <ProdctItem product={product} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default moviesList;
