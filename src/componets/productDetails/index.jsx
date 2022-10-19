import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";
import UnknwonImage from "../../assets/undraw_netflix_q-00-o.svg";
import "./index.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import VideoList from "../videoList";

function index() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [listVideos, setListVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { themeValue } = useContext(ThemeContext);
  const key = "9bde724434cd2ef83bccc262c14d0248&language";
  const BaseUrl = "https://api.themoviedb.org/3/movie";
  const imageUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    setLoading(true);
    axios
      .get(BaseUrl + "/" + id + "?api_key=" + key + "&language=en-US")
      .then((res) => {
        setMovieDetails(res.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios.get(BaseUrl + "/" + id + "/videos?api_key=" + key).then((res) => {
      for (let i = 0; i < res.data.results.length; i++) {
        if (res.data.results[i].site === "YouTube") {
          setListVideos((prev) => [...prev, res.data.results[i]]);
        }
      }
      setLoading(false);
    });
  }, []);

  console.log(listVideos);

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

          <div
            className={`VideoList ${
              themeValue === "light" ? "" : "bg-dark text-light"
            }`}
          >
            {listVideos.map((video) => {
              return (
                <>
                  {/* <h1>Sorry, there is no video for this movie, please try</h1> */}

                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title={video.name}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default index;
