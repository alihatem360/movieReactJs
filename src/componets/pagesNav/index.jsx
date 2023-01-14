import React, { useContext } from "react";
import "./style.css";
import Theme from "../theme";
import { ImSearch } from "react-icons/im";
import { MovieContext } from "../../App";
import { ThemeContext } from "../../App";
import CatigoriseNav from "../catigoriesNav";
import Filter from "../utility/filter";
import PaginationComponent from "../utility/pagination";
import { Link } from "react-router-dom";
const PagesNav = () => {
  const { themeValue } = useContext(ThemeContext);
  const { setPage, pageCounter } = useContext(MovieContext);

  return (
    <div
      className={` ${themeValue === "dark" ? "bg-dark" : ""} 
      `}
    >
      <div id="PagesNav">
        <Filter />
        <PaginationComponent setPage={setPage} pageCounter={pageCounter} />
        <CatigoriseNav />

        <Link to="/search">
          <ImSearch
            className={`${
              themeValue === "dark" ? "text-light" : ""
            } search-icon`}
          />
        </Link>
        <Theme />
      </div>
    </div>
  );
};

export default PagesNav;
