import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
function index({ product }) {
  return (
    <Fragment>
      <div className="card">
        <div className="img-container">
          <img src={product.img} className="card-img-top" alt="vdfgd" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.description}</h5>
          <p className="card-text">Price : {product.price}$</p>
          <b>Quantity : </b> <br />
          <b>total : {product.price}$</b> <br /> <br />

          <a className="btn btn-danger " href="#">
            <AiOutlineDelete /> Delete
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default index;
