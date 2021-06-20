import axios from "../../Axios";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { img500, trending } from "../../Config/constants";
import { AppContext } from "../AppContext";
import "./Banner.css";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function Banner() {
  const { handleTrailer, setDetail } = useContext(AppContext);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios.get(`${trending}`).then((res) => {
      let rndNum = getRandomIntInclusive(0, 19);
      setMovie(res.data.results[rndNum]);
    });
  }, []);

  const name =
    movie.name || movie.title || movie.orginal_title || movie.orginal_name;
  const history = useHistory();
  const handleMore = (id, show) => {
    setDetail(null);
    history.push(`/search?id=${id}&query=${null}&show=${show}`);
  };
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${
          movie.backdrop_path !== undefined ? img500 + movie.backdrop_path : ""
        })`,
      }}
    >
      <div className="content">
        <h2
          className="title"
          style={{
            fontSize: name
              ? name.length > 18
                ? "1rem"
                : name.length > 8
                ? "1.8rem"
                : "2.8rem"
              : "2rem",
          }}
        >
          {movie
            ? movie.name ||
              movie.title ||
              movie.orginal_title ||
              movie.orginal_name
            : null}
        </h2>
        <div className="bannerButtons">
          <button
            onClick={() => handleTrailer(movie.id)}
            className="button play"
          >
            Play
          </button>

          <button
            type="button"
            className="button list"
            onClick={() =>
              movie ? handleMore(movie.id, movie.media_type) : null
            }
          >
            More
          </button>
        </div>
        <h3 className="description">{movie ? movie.overview : null}</h3>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
