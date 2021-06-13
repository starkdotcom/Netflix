import React, { useContext } from "react";
import Banner from "./Banner/Banner";
import RowPost from "./RowPost/RowPost";
import { trendingMovies, actionMoviesUrl } from "../Config/constants";
import { AppContext } from "./AppContext";
import { Video } from "./Video";
function Movies() {
  const { videoId, setVideoId, opts } = useContext(AppContext);
  return (
    <div>
      <Banner />
      {videoId !== null
        ? (console.log(videoId),
          (
            <Video
              className=""
              videoId={videoId}
              setVideoId={setVideoId}
              opts={opts}
            />
          ))
        : console.log("video id", videoId)}
      <div className="post">
        <RowPost title="Trending" url={trendingMovies} />
        <RowPost title="Action" url={actionMoviesUrl} />
      </div>
    </div>
  );
}

export default Movies;
