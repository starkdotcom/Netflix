import React from "react";
import Detail from "../Detail/Detail";
import RowPost from "../RowPost/RowPost";
import { searchUrl } from "../../Config/constants";
import { useLocation } from "react-router-dom";
function Result() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const searchTerm = query.get("query");
  const searchId = query.get("id");
  const showType = query.get("show");

  return (
    <div>
      {searchId !== "null" ? (
        <Detail searchId={searchId} show={showType} />
      ) : (
        <div className="result" style={{ position: "relative", top: "80px" }}>
          <RowPost
            title={`Search Results for ${searchTerm}`}
            url={searchUrl + `&query=${searchTerm}`}
          />
        </div>
      )}
    </div>
  );
}

export default Result;
