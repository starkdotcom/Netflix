import React, { useContext } from "react";
import Banner from "./Banner/Banner";
import RowPost from "./RowPost/RowPost";
import { orginalsTvUrl, trendingTv } from "../Config/constants";
import { Video } from "./Video";
import { AppContext } from "./AppContext";
function TvShows() {
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
        <RowPost title="Trending" url={trendingTv} />
        <RowPost title="Netflix Orginals" url={orginalsTvUrl} />
      </div>
    </div>
  );
}

export default TvShows;
