import React from "react";
import "./style.css";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../App";
import axios from "axios";
import ProdctItem from "../productItem/index";
const search = () => {
  const { themeValue } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [movieResult, setMovieResult] = useState([]);

  const handleSearch = (e) => {
    setSearch(e);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=9bde724434cd2ef83bccc262c14d0248&language=en-US&query=${e}&include_adult=false`
      )
      .then((res) => {
        setMovieResult(res.data.results);
      });
  };

  console.log("movieResult" + movieResult);
  return (
    <div
      className={`
    ${themeValue === "light" ? "bg-light" : "bg-dark"}
    `}
      id="search"
    >
      <div className="row">
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Search.."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      <div
        className={`
        ${search === "" || search.length === 0 ? "d-none" : "d-block"}
        ${themeValue === "light" ? "bg-light" : "bg-dark"}
      `}
      >
        <div className="row">
          {movieResult.map((product, index) => {
            return (
              <div className="col-lg-3" key={product.id}>
                <ProdctItem product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default search;
