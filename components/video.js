import React from "react";

const Video = ({ src, poster }) => {
  return (
    <div
      className="w-full h-0 relative mx-auto"
      style={{ paddingBottom: "56.25%" }}
    >
      <video
        responsive="true"
        paused="true"
        background="false"
        controls
        controlsList="nodownload"
        preload="metadata"
        poster={poster}
        src={src}
        className="w-full h-full absolute top-0 left-0 rounded-xl outline-none"
      />
    </div>
  );
};

export default Video;
