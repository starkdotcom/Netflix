import React, { useState, useContext } from "react";
import { img200 } from "../../Config/constants";
import "./RowPost.css";
import "./card.css";
import { AppContext } from "../AppContext";
import { useHistory } from "react-router-dom";
import ReactCardFlip from "react-card-flip";

function Card({ obj, i, handleTrailer }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { setDetail } = useContext(AppContext);
  const name = obj.name || obj.title || obj.orginal_title || obj.orginal_name;
  const history = useHistory();
  const handleMore = (id, show) => {
    setDetail(null);
    history.push(`/search?id=${id}&query=${null}&show=${show}`);
  };
  return (
    <div className="card">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          onMouseEnter={() => setIsFlipped(true)}
          onTouchStart={() => {
            setIsFlipped(true);
          }}
          className="card_front"
        >
          <img
            key={i}
            src={obj.poster_path ? `${img200}${obj.poster_path}` : "logo2.png"}
            alt={name}
            className="poster"
          />
        </div>
        <div
          style={{
            boxShadow: " 0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            background: `url(${
              obj.poster_path ? img200 + obj.poster_path : `logo2.png` //https://pngimg.com/uploads/netflix/netflix_PNG15.png`
            })  center center / contain`,
          }}
        >
          <div
            onTouchEnd={() => {
              setIsFlipped(false);
            }}
            onMouseLeave={() => setIsFlipped(false)}
            className="card_back"
          >
            <div className="card_title">{name}</div>
            <button
              className="bttn l"
              onClick={() => {
                handleTrailer(obj.id);
              }}
            >
              Play
            </button>

            <button
              onClick={() => {
                handleMore(obj.id, obj.media_type);
              }}
              className="bttn r"
            >
              More
            </button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}
export default Card;
