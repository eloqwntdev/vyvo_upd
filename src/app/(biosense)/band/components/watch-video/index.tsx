import React from "react";

const WatchVideoBand = () => {
  return (
    <section className="min-h-[900px] relative">
      <video
        src="/vyvo.mp4"
        className="w-full h-full absolute top-0 left-0 object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
};

export default WatchVideoBand;
