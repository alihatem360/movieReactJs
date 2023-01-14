import { useContext } from "react";
import { ThemeContext } from "../../App";
import { MovieContext } from "../../App";

import ProdctItem from "../productItem/index";
import Filter from "../filter/index";
import PagesNav from "../pagesNav/index";
const index = () => {
  const { themeValue } = useContext(ThemeContext);
  const {
    movies,
    loading,
    setLoading,
    setMovies,
    catigorise,
    page,
    FilterResult,
  } = useContext(MovieContext);

  return (
    <div className={`h-100 ${themeValue === "light" ? "bg-light" : "bg-dark"}`}>
      <div className="container ">
        {loading ? (
          <h1
            className={`${themeValue === "light" ? "text-dark" : "text-light"}`}
          >
            Loading...
          </h1>
        ) : (
          <>
            <PagesNav />
            <Filter />
            <div
              className={`
      ${FilterResult.length === movies.length ? "d-none" : "d-block"}
`}
            >
              <div className="row">
                {FilterResult.map((product, index) => {
                  return (
                    <div className="col-lg-3" key={product.id}>
                      <ProdctItem product={product} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className={`
      ${FilterResult.length > 0 ? "d-none" : "d-block"}
           `}
            >
              <div className="row">
                {movies.map((product, index) => {
                  return (
                    <div className="col-lg-3" key={product.id}>
                      <ProdctItem product={product} />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default index;
