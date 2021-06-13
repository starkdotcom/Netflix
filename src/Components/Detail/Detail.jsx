import React, { useContext, useEffect } from "react";
import { API_KEY, language, img500, searchUrl } from "../../Config/constants";
import { AppContext } from "../AppContext";
import axios from "../../Axios";
import RowPost from "../RowPost/RowPost";
import "./Detail.css";

function Detail({ searchId, show }) {
  const { detail, setDetail } = useContext(AppContext);
  //const searchTerm =  detail.name || detail.title || detail.orginal_title || detail.orginal_name||;
  //
  useEffect(() => {
    console.log("Detail:", detail, `${show}/${searchId}?${API_KEY}${language}`);
    if (detail === null || detail === undefined) {
      axios.get(`${show}/${searchId}?${API_KEY}${language}`).then((res) => {
        setDetail(res.data);
        console.table("Result", res.data);
      });
    }
  });

  const searchTerm = detail
    ? detail.name || detail.title || detail.orginal_title || detail.orginal_name
    : null;
  console.log(detail);
  return (
    <div style={{ background: "black", height: "100%" }}>
      <div className="contentDetail">
        <div className="left">
          <div className="titleDetail">
            {detail
              ? detail.name ||
                detail.title ||
                detail.orginal_title ||
                detail.orginal_name
              : null}
          </div>
          <div className="overviewDetail">
            {detail ? detail.overview : null}
          </div>
        </div>
        <div className="right">
          <div>
            <img
              className="posterImage"
              src={detail ? img500 + detail.poster_path : null}
              alt=""
            />
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
