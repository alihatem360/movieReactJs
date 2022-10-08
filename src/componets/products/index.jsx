import ProdctItem from "../productItem/index";

import { useContext, useEffect } from "react";
import { ThemeContext } from "../../App";
import { MovieContext } from "../../App";
import Filter from "../filter/index";

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

  console.log("Filter" + FilterResult);

  return (
    <div className={`${themeValue === "light" ? "bg-light" : "bg-dark"}`}>
      <div className="container ">
        {loading ? (
          <h1
            className={`${themeValue === "light" ? "text-dark" : "text-light"}`}
          >
            Loading...
          </h1>
        ) : (
          <>
            <h1
              className={
                themeValue === "light"
                  ? "text-dark py-4 text-center"
                  : "text-light py-4 text-center"
              }
            >
              <h3 className="">
                <span class="badge bg-secondary">{page}</span>
              </h3>
              {catigorise} <i class="fa-solid fa-clapperboard"></i>
            </h1>
            {/* <Filter /> */}

            <div className="row">
              {FilterResult.map((product, index) => {
                return (
                  <div className="col-lg-3" key={product.id}>
                    <ProdctItem product={product} />
                  </div>
                );
              })}
            </div>

            <div className="row">
              {movies.map((product, index) => {
                return (
                  <div className="col-lg-3" key={product.id}>
                    <ProdctItem product={product} />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default index;
