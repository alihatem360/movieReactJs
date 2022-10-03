import React, { useEffect, useState } from "react";
import CartItem from "./cartitem";
import produtsApi from "../../api/produts";

const index = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    produtsApi.getProducts().then((res) => {
      setAllProducts(res[0]);
    });
  }, []);

  return (
    <div className="container mt-4">
      <h1>cart</h1>
      <div className="row">
        {allProducts.map((product) => {
          return (
            <div className="col-lg-3"  key={product.id}>
              <CartItem product={product} />
            </div>
          );
        })}
      </div>
      <h3>total : </h3>
      <button className="btn btn-danger btn-block w-100 my-2">checkout</button>
    </div>
  );
};

export default index;
