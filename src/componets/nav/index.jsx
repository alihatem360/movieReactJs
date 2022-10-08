import React, { useState } from "react";
import { Link } from "react-router-dom";
import Theme from "../theme";
import "./index.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";

// import { useContext } from "react";
// import { ThemeContext } from "../../App";

function Navbar() {
  const { themeValue } = useContext(ThemeContext);
  // const [themeValue, setThemeValue] = useState({ color: "light" });
  return (
    <div className={`${themeValue === "light" ? "bg-light" : "bg-dark"}`}>
      <div className="container ">
        <nav
          className={
            themeValue === "light"
              ? "navbar navbar-expand-lg navbar-light bg-light"
              : "navbar navbar-expand-lg navbar-dark bg-dark"
          }
        >
          <div className="container-fluid ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse  `}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0  w-100 d-flex justify-content-between">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`${themeValue === "light" ? "" : " text-light"}`}
                  >
                    movies <i class="fa-solid fa-video"></i>
                  </Link>
                </li>

                <li>
                  <Theme />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
