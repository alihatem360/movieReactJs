import { useContext } from "react";
import { ThemeContext } from "../../App";
import { MovieContext } from "../../App";
import MoviesList from "./moviesList";
import FilterList from "./filterList";
import PagesNav from "../pagesNav/index";

const index = () => {
  const { themeValue } = useContext(ThemeContext);
  const { movies, loading, FilterResult, setPage, pageCounter } =
    useContext(MovieContext);
  return (
    <div className={`h-100 ${themeValue === "light" ? "bg-light" : "bg-dark"}`}>
      <div className="container ">
        <PagesNav />

        {loading ? (
          <h1
            className={`${themeValue === "light" ? "text-dark" : "text-light"}`}
          >
            Loading...
          </h1>
        ) : (
          <>
            <div
              className={`${
                FilterResult.length === movies.length ? "d-none" : "d-block"
              }`}
            >
              <FilterList FilterResult={FilterResult} />
            </div>

            <div
              className={`${FilterResult.length > 0 ? "d-none" : "d-block"}`}
            >
              <MoviesList movies={movies} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default index;
