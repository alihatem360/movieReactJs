import axios from "axios";
import React from "react";

import { useState, useEffect, useContext } from "react";
import { MovieContext } from "../../App";
const useSearch = () => {
  const [search, setSearch] = useState("");

  const { movies, setMovies, page, FilterResult, setFilterResult } =
    useContext(MovieContext);
  console.log("Fiter" + FilterResult);
  const handleSearch = (e) => {
    setSearch(e);

    if (e === "" || e.length === 0) {
      setFilterResult([]);
    } else {
      const result = movies.filter((movie) =>
        movie.title.toLowerCase().includes(e.toLowerCase())
      );
      setFilterResult(result);
    }
  };

  return { search, handleSearch };
};

export default useSearch;
