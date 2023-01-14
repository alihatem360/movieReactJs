import React, { useState, useEffect } from "react";
import axios from "axios";

const useMoviesData = () => {
  const [movies, setMovies] = useState([]);
  const [FilterResult, setFilterResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catigorise, setCatigorise] = useState("now_playing");
  const [page, setPage] = useState(1);
  const [pageCounter, setPageCounter] = useState("");

  const key = "9bde724434cd2ef83bccc262c14d0248&language";
  const baseURL = "https://api.themoviedb.org/3/";
  const url = `${baseURL}movie/${catigorise}?api_key=${key}=en&page=${page}`;

  const getallMovies = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setMovies(res.data.results);
    setPageCounter(res.data.total_pages);
    setLoading(false);
  };

  useEffect(() => {
    getallMovies();
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
    pageCounter,
  };
};

export default useMoviesData;
