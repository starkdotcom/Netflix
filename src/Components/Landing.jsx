import React, { useContext, useEffect } from "react";
import Banner from "./Banner/Banner";
import RowPost from "./RowPost/RowPost";
import { trending, orginalsTvUrl, actionMoviesUrl } from "../Config/constants";
import { AppContext } from "./AppContext";
import { Video } from "./Video";
function Landing() {
  const { videoId, setVideoId, opts } = useContext(AppContext);

  useEffect(() => {
    if (videoId !== "") {
    }
  }, [videoId]);
  return (
    <div>
      <Banner />
      {videoId !== null ? (
        <Video
          className=""
          videoId={videoId}
          setVideoId={setVideoId}
          opts={opts}
        />
      ) : null}
      <div className="post">
        <RowPost title="Trending" url={trending} />
        <RowPost title="Netflix Orginals" url={orginalsTvUrl} />
        <RowPost title="Action" url={actionMoviesUrl} />
      </div>
    </div>
  );
}

export default Landing;
