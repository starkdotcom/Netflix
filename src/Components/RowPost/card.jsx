import React, { useState } from "react";
import { img500 } from "../../Config/constants";
import "./RowPost.css";
import "./card.css";
import ReactCardFlip from "react-card-flip";

function Card({ obj, i, handleTrailer }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const name = obj.name || obj.title || obj.orginal_title || obj.orginal_name;
  return (
    <div className="card">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          onMouseEnter={() => setIsFlipped((prev) => !prev)}
          onTouchStart={() => {
            setIsFlipped((prev) => !prev);
          }}
          className="card_front"
        >
          <img
            key={i}
            src={obj.poster_path ? `${img500}${obj.poster_path}` : "logo2.png"}
            alt={name}
            className="poster"
          />
        </div>
        <div
          style={{
            boxShadow: " 0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            background: `url(${
              obj.poster_path ? img500 + obj.poster_path : `logo2.png` //https://pngimg.com/uploads/netflix/netflix_PNG15.png`
            })  center center / contain`,
          }}
        >
          <div
            onTouchEnd={() => {
              setIsFlipped((prev) => !prev);
            }}
            onMouseLeave={() => setIsFlipped((prev) => !prev)}
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
            <button className="bttn r">Save</button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}
export default Card;
