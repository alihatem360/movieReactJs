import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { MovieContext } from "../../App";
import "./style.css";
const CatigoriseNav = () => {
  const catigoriseList = ["now_playing", "popular", "top_rated", "upcoming"];

  const { catigorise, setCatigorise } = useContext(MovieContext);

  return (
    <div id="CatigoriseNavComponet">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {catigorise}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {catigoriseList.map((catigorise) => (
            <li class="nav-item">
              <a
                class="dropdown-item"
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
  );
};

export default CatigoriseNav;
