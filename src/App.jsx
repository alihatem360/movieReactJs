import { React, createContext } from "react";
import "./App.css";
import RouteComponent from "./componets/rout";
import { BrowserRouter } from "react-router-dom";
import useTheme from "./componets/hooks/useTheme";
import useMoviesData from "./componets/hooks/useMoviesData";

export const ThemeContext = createContext();
export const MovieContext = createContext();

function App() {
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
    pageCounter,
  } = useMoviesData();

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={{ themeValue, setThemeValue }}>
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
              pageCounter,
            }}
          >
            <RouteComponent />
          </MovieContext.Provider>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
