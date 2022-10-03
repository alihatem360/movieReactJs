import React, { useContext } from "react";
import "./style.css";

import { MovieContext } from "../../App";
import { ThemeContext } from "../../App";

const PagesNav = () => {
  const pages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const { setPage, page } = useContext(MovieContext);
  const { themeValue } = useContext(ThemeContext);

  return (
    <div>
      <nav aria-label="...">
        <ul
          className={`pagination ${themeValue === "dark" ? "bg-dark" : ""}`}
          id="pagination"
        >
          <li class="page-item ">
            <a
              class="page-link"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              onClick={() => setPage(page - 1)}
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
    </div>
  );
};

export default PagesNav;
