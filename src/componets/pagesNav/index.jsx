import React, { useContext } from "react";
import "./style.css";

import { MovieContext } from "../../App";
import { ThemeContext } from "../../App";
import CatigoriseNav from "../catigoriesNav";
const PagesNav = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { setPage, page } = useContext(MovieContext);
  const { themeValue } = useContext(ThemeContext);

  return (
    <div
      id="PagesNav"
      className={`pagination ${themeValue === "dark" ? "bg-dark" : ""}`}
    >
      <nav aria-label="...">
        <ul id="pagination">
          <li class="page-item ">
            <a
              class="page-link"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              onClick={() => setPage(page > 1 ? page - 1 : page)}
            >
              <i class="fa-solid fa-backward"></i> Previous
            </a>
          </li>

          {pages.map((page) => (
            <li class="page-item">
              <a class="page-link" href="#" onClick={() => setPage(page)}>
                {page}
              </a>
            </li>
          ))}

          <li class="page-item">
            <a
              class="page-link"
              href="#"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next <i class="fa-solid fa-forward"></i>
            </a>
          </li>
        </ul>
      </nav>

      <div id="CatigoriseNav">
        <CatigoriseNav />
      </div>

      <span
        className={`badge ${
          themeValue === "dark" ? " text-light" : "text-dark"
        }`}
      >
        page : {page}
      </span>
    </div>
  );
};

export default PagesNav;
