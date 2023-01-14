import React from "react";
import "./style.css";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../App";
import axios from "axios";
import { IoMdReturnLeft } from "react-icons/io";
import ProdctItem from "../../componets/productItem/index";
import PaginationComponent from "../../componets/utility/pagination";
import { Link } from "react-router-dom";
const search = () => {
  const { themeValue } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [movieResult, setMovieResult] = useState([]);
  const [pageCounter, setPageCounter] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  console.log(pageNumber, "pageNumber ");
  const handleSearch = (e) => {
    setPageNumber(1);
    setSearch(e);
    getallMovies();
  };

  const getallMovies = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=9bde724434cd2ef83bccc262c14d0248&language=ar&query=${search}&include_adult=true&page=${pageNumber}`
      )
      .then((res) => {
        setMovieResult(res.data.results);
        setPageCounter(res.data.total_pages);
      });
  };

  const setPage = (e) => {
    setPageNumber(e);
  };

  useEffect(() => {
    setPage(pageNumber);
    getallMovies();
  }, [pageNumber]);

  return (
    <div
      className={`
    ${themeValue === "light" ? "bg-light" : "bg-dark"}
    `}
      id="search"
    >
      <div className="row">
        <div
          className="
      
        "
        >
          <input
            type="text"
            className="form-control"
            placeholder="Search.."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Link to="/" className="btn btn-primary mt-2">
            <IoMdReturnLeft /> Back
          </Link>
        </div>
      </div>

      <div
        className={`
        ${search === "" || search.length === 0 ? "d-none" : "d-block"}
        ${themeValue === "light" ? "bg-light" : "bg-dark"}
      `}
      >
        <div className="row">
          <PaginationComponent pageCounter={pageCounter} setPage={setPage} />
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
