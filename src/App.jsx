import { React, Fragment, useState, createContext } from "react";
import "./App.css";
import Navbar from "./componets/nav";
import RouteComponent from "./componets/rout";
import { BrowserRouter } from "react-router-dom";
import useTheme from "./componets/hooks/useTheme";
import useMoviesData from "./componets/hooks/useMoviesData";

export const ThemeContext = createContext();
export const MovieContext = createContext();

function App() {
  // const { search, handleSearch, movieResult } = useSearch();
  const { themeValue, setThemeValue } = useTheme();
  const {
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
  } = useMoviesData();

  return (
    <Fragment>
      <BrowserRouter>
        <ThemeContext.Provider value={{ themeValue, setThemeValue }}>
          <Navbar />
          <MovieContext.Provider
            value={{
              movies,
              setMovies,
              loading,
              setLoading,
              catigorise,
              setCatigorise,
              page,
              setPage,
              FilterResult,
              setFilterResult,
            }}
          >
            <RouteComponent />
          </MovieContext.Provider>
        </ThemeContext.Provider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
