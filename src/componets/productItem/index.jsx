import React, { Fragment, useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import unKnwnImage from "../../assets/undraw_netflix_q-00-o.svg";
function index({ product }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500/";
  const { themeValue } = useContext(ThemeContext);
  return (
    <Fragment>
      <div
        className={`${
          themeValue === "light"
            ? "card "
            : "card text-light bg-dark shadow rounded"
        }`}
      >
        {/* ${imageUrl}${product.poster_path} */}
        <div className="img-container">
          <img
            src={
              product.poster_path
                ? `${imageUrl}${product.poster_path}`
                : unKnwnImage
            }
            className="card-img-top"
            alt={product.title}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {product.title} <i class="fa-solid fa-signature"></i>
          </h5>

          <p className="card-text">
            {product.release_date} <i class="fa-regular fa-calendar-days"></i>
          </p>

          <Link
            to={`/products/${product.id}`}
            className={`${
              themeValue === "light"
                ? "btn-primary "
                : " btn-warning text-light"
            } btn w-100`}
          >
            Details <i class="fa-solid fa-angles-right"></i>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default index;
