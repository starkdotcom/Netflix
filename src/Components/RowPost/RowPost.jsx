import React, { useState, useRef, useEffect, useContext } from "react";
import "./RowPost.css";
import axios from "../../Axios";
import Card from "./card";
import { AppContext } from "../AppContext";
import useDragScroll from "use-drag-scroll";

function RowPost(props) {
  const { handleTrailer } = useContext(AppContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((res) => {
      setData(res.data.results);
    });
  }, [props.url]);
  const ref = useRef(null);
  const { hasSwiped } = useDragScroll({
    sliderRef: ref,
    momentumVelocity: 0.9,
  });
  return (
    <div className="row">
      <h2 className="rowTitle">{props.title}</h2>
      <div className="posters" ref={ref}>
        {data.map((obj, i) => (
          <Card
            obj={obj}
            key={i}
            handleTrailer={handleTrailer}
            onClick={(e) => {
              if (hasSwiped) {
                e.preventDefault();
              }
            }}
          />
        ))}
      </div>{" "}
    </div>
  );
}

export default RowPost;
