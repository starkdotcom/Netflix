import React, { useContext, useEffect } from "react";
import Banner from "./Banner/Banner";
import RowPost from "./RowPost/RowPost";
import { trending, orginalsTvUrl, actionMoviesUrl } from "../Config/constants";
import { AppContext } from "./AppContext";
import { Video } from "./Video";
import "./Landing.css";
function Landing() {
  const { videoId, setVideoId, opts } = useContext(AppContext);
  //const videoRef = useRef(null);
  /*const scrollToVideo = () => {
    console.log("video Ref", videoRef);
    videoRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };*/
  useEffect(() => {
    if (videoId !== "") {
    }
  }, [videoId]);
  return (
    <div>
      <Banner />
      {console.log("Video Id check:", videoId)}
      {/*<div style={{ width: "100%", height: "1px" }}  ref={videoRef}></div>*/}
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
        <RowPost title="Trending" url={trending} />
        <RowPost title="Netflix Orginals" url={orginalsTvUrl} />
        <RowPost title="Action" url={actionMoviesUrl} />
      </div>
    </div>
  );
}

export default Landing;
