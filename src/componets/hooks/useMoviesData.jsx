import React, { useState, useEffect } from "react";
import axios from "axios";

// const catigorise = [
//
//   "now_playing",
//   "popular",
//   "top_rated",
//   "upcoming",
// ];

const useMoviesData = () => {
  const [movies, setMovies] = useState([]);
  const [FilterResult, setFilterResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catigorise, setCatigorise] = useState("now_playing");
  const [page, setPage] = useState(2);

  const key = "9bde724434cd2ef83bccc262c14d0248&language";
  const url = `https://api.themoviedb.org/3/movie/${catigorise}?api_key=${key}=en-US&page=${
    page > 0 ? page : 2
  }`;

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res) => {
      setMovies(res.data.results);
      setLoading(false);
    });
  }, [catigorise, page]);
  return {
    movies,
    loading,
    setLoading,
    setMovies,
    catigorise,
    setCatigorise,
    page,
    setPage,
    FilterResult,
    setFilterResult,
  };
};

export default useMoviesData;
