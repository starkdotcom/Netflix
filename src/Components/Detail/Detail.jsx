import React, { useContext, useEffect } from "react";
import { API_KEY, language, img500, searchUrl } from "../../Config/constants";
import { AppContext } from "../AppContext";
import axios from "../../Axios";
import RowPost from "../RowPost/RowPost";
import "./Detail.css";

function Detail({ searchId, show }) {
  const { detail, setDetail } = useContext(AppContext);
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
            {detail ? detail.overview : null}
          </div>
        </div>
        <div className="md right">
          <div>
            <img
              className="posterImage md "
              src={detail ? img500 + detail.poster_path : null}
              alt=""
            />
          </div>
        </div>

        <div className="sm top">
          <div>
            <img
              className="sm posterImage"
              src={detail ? img500 + detail.poster_path : null}
              alt=""
            />
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
            {detail ? detail.overview : null}
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
