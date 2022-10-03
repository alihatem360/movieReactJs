import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";
import UnknwonImage from "../../assets/undraw_netflix_q-00-o.svg";
import "./index.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";
function index() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { themeValue } = useContext(ThemeContext);
  const key = "9bde724434cd2ef83bccc262c14d0248&language";
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=9bde724434cd2ef83bccc262c14d0248&language=en-US`;
  const imageUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res) => {
      setMovieDetails(res.data);
      setLoading(false);
    });
  }, []);

  console.log(movieDetails);

  return (
    <div
      className={`${themeValue === "light" ? "" : "bg-dark text-light"}`}
      id="movieDetails"
    >
      {loading === true ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src={
                    movieDetails.poster_path
                      ? imageUrl + movieDetails.poster_path
                      : UnknwonImage
                  }
                  className="card-img-top"
                  alt={movieDetails.title}
                />
              </div>
              <div className="col-lg-6">
                <h5 className="card-title">{`${
                  movieDetails.title
                }-${movieDetails.release_date.slice(0, 4)}`}</h5>
                <p className="card-text">
                  <span> overview :</span> {movieDetails.overview}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default index;
