import axios from "../../Axios";
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
  const { handleTrailer } = useContext(AppContext);
  const [movie, setMovie] = useState([]);
  /*const path='https://api.themoviedb.org/3/'
    const apiKey='api_key=a16f75b2ad11198ee57fcf54e8034a06'
    const img500='https://image.tmdb.org/t/p/w500'*/
  // const imgOrg='https://image.tmdb.org/t/p/orginal'/*
  //let [imgUrl,setUrl]=useState("")
  /* function getBanner(){
        /*axios.get(path+'tv/popular?'+apiKey+'&language=en-US&page=1').then((res)=>{
        setMovie(res.data.results[0])
        setUrl(img500+movie.backdrop_path)
        console.table(movie)
     })
    }*/
  useEffect(() => {
    axios.get(`${trending}`).then((res) => {
      let rndNum = getRandomIntInclusive(0, 19);
      console.log("random Number:", rndNum);
      setMovie(res.data.results[rndNum]);
      console.table(res.data.results[rndNum]);
    });
  }, []);
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
        <h2 className="title">{movie ? movie.title : null}</h2>
        <div className="bannerButtons">
          <button
            onClick={() => handleTrailer(movie.id)}
            className="button play"
          >
            Play
          </button>
          <button className="button list">My List</button>
        </div>
        <h3 className="description">{movie ? movie.overview : null}</h3>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
