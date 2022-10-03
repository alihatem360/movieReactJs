import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { MovieContext } from "../../App";
import "./style.css";
const CatigoriseNav = () => {
  const catigoriseList = ["now_playing", "popular", "top_rated", "upcoming"];

  const { catigorise, setCatigorise } = useContext(MovieContext);
  return (
    <div>
      <nav class="navbar navbar-expand-lg  " id="CatigoriseNav">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav">
              {catigoriseList.map((catigorise) => (
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    onClick={() => setCatigorise(catigorise)}
                  >
                    {catigorise}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CatigoriseNav;
