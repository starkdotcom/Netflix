import YouTube from "react-youtube";
import "./Video.css";
export const Video = ({ videoId, setVideoId, opts }) => {
  return (
    <div /*onClick={() => setVideoId("")}*/ className="float-video">
      <div /*onClick={null}*/ className="video">
        <button onClick={() => setVideoId(null)} className="btn close-video">
          Close X
        </button>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};
