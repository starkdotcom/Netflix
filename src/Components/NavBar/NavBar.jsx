import axios from "axios";
import React, { useState, useEffect, useContext, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";
import { img500, searchUrl } from "../../Config/constants";
import { AppContext } from "../AppContext";
export default function NavBar() {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = useCallback(() => {
    history.push(`/search?query=${searchTerm}&id=${null}&show=${null}`);
    setSearchTerm("");
  }, [history, searchTerm]);
  const [searchResult, setSearchResult] = useState([]);
  const { setDetail } = useContext(AppContext);
  const name =
    searchResult.name ||
    searchResult.title ||
    searchResult.orginal_title ||
    searchResult.orginal_name;
  useEffect(() => {
    dynamicSearch(setSearchResult);
  }, [searchTerm]);
  const dynamicSearch = (callback) => {
    if (searchTerm !== "") {
      axios
        .get(searchUrl + `&query=${searchTerm}`)
        .then((res, err) => {
          if (res.data.results.length === 0) {
            let term = { id: false };
            callback(term);
          } else {
            let term = res.data.results[0];
            callback(term);
          }
        })
        .catch((err) => {
          let term = { id: false };
          callback(term);
        });
    } else {
      let term = { id: false };
      callback(term);
    }
  };

  const handleKeyEvent = (e) => {
    handleSubmit();
  };
  const handleKeypress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      handleKeyEvent();
    }
  };

  return (
    <div className="navbar">
      <ul>
        <li className="navElement netflix">
          {" "}
          <Link to="/">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
              alt="Netflix"
            />
          </Link>
        </li>
        <li className="navElement a tv">
          {" "}
          <Link to="/tvshows">Tv Shows</Link>
        </li>
        <li className="navElement a movie">
          {" "}
          <Link to="/movies">Movies</Link>
        </li>
        <li className="navElement search">
          <div className="input-group">
            <div className="form-outline">
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                onKeyPress={handleKeypress}
                className="form-control"
                placeholder="Search"
              />

              <div className="form-notch">
                <div
                  className="form-notch-leading"
                  style={{ width: "9px" }}
                ></div>
                <div
                  className="form-notch-middle"
                  style={{ width: "56.8px" }}
                ></div>
                <div className="form-notch-trailing"></div>
              </div>
            </div>
            <button
              type="button"
              onClick={searchTerm !== "" ? () => handleSubmit() : null}
              className="btn btn-primary ripple-surface"
            >
              <img src="/magnifying-glass.png" alt="" width="20" height="20" />
            </button>
          </div>

          {searchResult.id !== undefined &&
          searchResult.id !== false &&
          searchTerm !== "" ? (
            <Link
              to={`/search?id=${searchResult.id}&query=${null}&show=${
                searchResult.media_type
              }`}
            >
              <div className="searchResult">
                <div
                  onClick={() => {
                    setDetail(searchResult);
                    setSearchTerm("");
                  }}
                >
                  <span
                    style={{ fontSize: name.length > 8 ? "1rem" : "1.8rem" }}
                  >
                    {searchResult.name ||
                      searchResult.title ||
                      searchResult.orginal_title ||
                      searchResult.orginal_name}
                  </span>{" "}
                  {searchResult.poster_path ? (
                    <img
                      src={`${img500 + searchResult.poster_path}`}
                      alt={`${searchResult.name}`}
                    />
                  ) : null}
                </div>
              </div>
            </Link>
          ) : //))
          null}
        </li>
        <li className="navElement user">
          {" "}
          <img
            className="avatar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="Avatar"
          />
        </li>
      </ul>
    </div>
  );
}
