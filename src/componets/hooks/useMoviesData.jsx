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
  const [loading, setLoading] = useState(true);
  const [catigorise, setCatigorise] = useState("now_playing");
  const [page, setPage] = useState(2);
  console.log("pages", page);
  console.log("catigorise value  " + " " + catigorise);
  const key = "9bde724434cd2ef83bccc262c14d0248&language";
  const url = `https://api.themoviedb.org/3/movie/${catigorise}?api_key=${key}=en-US&page=${page}`;

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
  };
};

export default useMoviesData;
