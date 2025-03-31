import React from "react";

const WatchVideo = () => {
  return (
    <section className="min-h-[400px] md:min-h-[600px] lg:min-h-[900px] relative w-full">
      <video
        src="https://eloqwntmain.ams3.cdn.digitaloceanspaces.com/Vyvo/Werables_Page/whatch-2_SuxRJP1o.mp4"
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
