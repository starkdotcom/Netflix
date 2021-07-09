import React, { useContext, useEffect } from "react";
import { API_KEY, language, img200, searchUrl } from "../../Config/constants";
import { AppContext } from "../AppContext";
import axios from "../../Axios";
import RowPost from "../RowPost/RowPost";
import "./Detail.css";
import { Video } from "./../Video";

function Detail({ searchId, show }) {
  const { videoId, setVideoId, opts } = useContext(AppContext);
  const { detail, setDetail, handleTrailer } = useContext(AppContext);
  useEffect(() => {
    if (detail === null || detail === undefined) {
      axios
        .get(`${show}/${searchId}?${API_KEY}${language}`)
        .then((res) => {
          setDetail(res.data);
        })
        .catch(() => {
          if (show === "undefined")
            axios
              .get(`tv/${searchId}?${API_KEY}${language}`)
              .then((res) => {
                setDetail(res.data);
              })
              .catch(() => {
                axios
                  .get(`movie/${searchId}?${API_KEY}${language}`)
                  .then((res) => {
                    setDetail(res.data);
                  });
              });
        });
    }
  });

  const searchTerm = detail
    ? detail.name || detail.title || detail.orginal_title || detail.orginal_name
    : null;

  return (
    <div className="detail">
      {videoId !== null ? (
        <Video
          className=""
          videoId={videoId}
          setVideoId={setVideoId}
          opts={opts}
        />
      ) : null}
      <div className="contentDetail">
        <div className="md left">
          <div
            className="md titleDetail"
            style={{
              fontSize: searchTerm
                ? searchTerm.length > 17
                  ? "1.5rem"
                  : searchTerm.length > 8
                  ? "2rem"
                  : "2.8rem"
                : "2rem",
            }}
          >
            {detail
              ? detail.name ||
                detail.title ||
                detail.orginal_title ||
                detail.orginal_name
              : null}
          </div>
          <div className="md overviewDetail">
            {detail ? (
              <div>
                {detail.tagline ? <h3>{detail.tagline}</h3> : null}
                <i className="badge">{detail.adult ? "A" : "U/A"}</i>
                {detail.genres
                  ? detail.genres.map((a, index) => {
                      return (
                        <span key={index} className="badge">
                          {a.name}
                        </span>
                      );
                    })
                  : null}
                {detail.vote_average ? (
                  <i className="badge">⭐{detail.vote_average}</i>
                ) : null}

                <p className="about"> {detail.overview}</p>
                <hr />
                <p>
                  {detail.languages
                    ? `Languages : ` +
                      detail.languages.map((a) => {
                        return " " + a;
                      })
                    : detail.original_language
                    ? `Language : ` + detail.original_language
                    : null}
                </p>
                <p>
                  {detail.release_date
                    ? `Release Date :      ` + detail.release_date
                    : `First Aired On :    ` + detail.first_air_date}
                </p>
                <p>
                  {detail.number_of_seasons
                    ? `Number of Seasons : ` + detail.number_of_seasons
                    : null}
                </p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="md right">
          <div className="imgBtn">
            <img
              style={{ backgroundImage: `url(logo2.png)` }}
              className="posterImage md "
              src={detail ? img200 + detail.poster_path : "logo2.png"}
              alt=""
            />
            <button
              className="btn play"
              onClick={() => {
                let obj = detail.id;
                handleTrailer(obj);
              }}
            >
              <img src="playbtn.png" alt="▶" width="30" height="30" />
            </button>
          </div>
        </div>

        <div className="sm top">
          <div className="imgBtn">
            {detail ? console.log(detail.poster_path) : "not true"}
            <img
              style={{ backgroundImage: `url(logo2.png)` }}
              className="sm posterImage"
              src={detail ? img200 + detail.poster_path : "logo2.png"}
              alt=""
            />
            <button
              className="btn play"
              onClick={() => {
                let obj = detail.id;
                handleTrailer(obj);
              }}
            >
              <img src="playbtn.png" alt="▶" width="30" height="30" />
            </button>
          </div>
        </div>
        <div className="sm bottom">
          <div
            className="sm titleDetail"
            style={{
              fontSize: searchTerm
                ? searchTerm.length > 17
                  ? "1.5rem"
                  : searchTerm.length > 8
                  ? "2rem"
                  : "2.8rem"
                : "2rem",
            }}
          >
            {detail
              ? detail.name ||
                detail.title ||
                detail.orginal_title ||
                detail.orginal_name
              : null}
          </div>
          <div className="sm overviewDetail">
            {detail ? (
              <div className="sm">
                {detail.tagline ? <h3>{detail.tagline}</h3> : null}
                <i className="badge">{detail.adult ? "A" : "U/A"}</i>
                {detail.genres
                  ? detail.genres.map((a, index) => {
                      return (
                        <span className="badge" key={index}>
                          {a.name}
                        </span>
                      );
                    })
                  : null}
                {detail.vote_average ? (
                  <i className="badge">⭐{detail.vote_average}</i>
                ) : null}
                <p className="about">{detail.overview}</p>
                <hr />
                <p>
                  {detail.languages
                    ? `Languages : ` +
                      detail.languages.map((a) => {
                        return " " + a;
                      })
                    : detail.original_language
                    ? `Language : ` + detail.original_language
                    : null}
                </p>
                <p>
                  {detail.release_date
                    ? `Release Date :      ` + detail.release_date
                    : `First Aired On :    ` + detail.first_air_date}
                </p>
                <p>
                  {detail.number_of_seasons
                    ? `Number of Seasons : ` + detail.number_of_seasons
                    : null}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="postDetail">
        {
          <RowPost
            title="Similar"
            url={searchUrl + `&query=${searchTerm ? searchTerm : null}`}
          />
        }
      </div>
    </div>
  );
}

export default Detail;
