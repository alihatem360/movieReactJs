import React from "react";
import ProdctItem from "../productItem/index";
const filterList = ({ FilterResult }) => {
  return (
    <>
      <div className="row">
        {FilterResult.map((product, index) => {
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

export default filterList;
