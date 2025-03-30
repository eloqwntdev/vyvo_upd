import React from "react";

const WatchVideo = () => {
  return (
    <section className="min-h-[400px] md:min-h-[600px] lg:min-h-[900px] relative w-full">
      <video
        src="/vyvo.mp4"
        className="w-full h-full absolute top-0 left-0 object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/vyvo-poster.jpg"
      />
    </section>
  );
};

export default WatchVideo;
