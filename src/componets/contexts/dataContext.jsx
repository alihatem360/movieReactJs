import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

const [movies, setMovies] = useState([]);
const key = "9bde724434cd2ef83bccc262c14d0248&language";
const page = "1";
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}=en-US&page=${page}`;

useEffect(() => {
  axios.get(url).then((res) => {
    setMovies(res.data.results);
  });
}, []);

const DataContextProvider = ({ children }) => {
  return (
    <DataContext.Provider value={{ movies }}>{children}</DataContext.Provider>
  );
};

export default DataContextProvider;
