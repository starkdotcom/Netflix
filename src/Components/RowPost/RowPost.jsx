import React, { useState, useEffect, useContext } from "react";
//import YouTube from "react-youtube";
import "./RowPost.css";
//import { img500 } from "../../Config/constants";
//import Movies from '../Movies'
import axios from "../../Axios";
import Card from "./card";
import { AppContext } from "../AppContext";
function RowPost(props) {
  const { handleTrailer } = useContext(AppContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((res) => {
      setData(res.data.results);
    });
  }, [props.url]);

  return (
    <div className="row">
      <h2 className="rowTitle">{props.title}</h2>
      <div className="posters">
        {data.map((obj, i) => (
          <Card obj={obj} key={i} handleTrailer={handleTrailer} />
        ))}
      </div>
    </div>
  );
}

export default RowPost;
