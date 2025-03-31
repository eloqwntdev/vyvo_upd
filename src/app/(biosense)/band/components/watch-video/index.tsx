import React from "react";

const WatchVideoBand = () => {
  return (
    <section
      id="band-video"
      className="min-h-[415px] sm:min-h-[600px] md:min-h-[800px] lg:min-h-[900px] relative w-full"
    >
      <video
        src="https://eloqwntmain.ams3.cdn.digitaloceanspaces.com/Vyvo/Werables_Page/0214_kk2LdYeh.mp4"
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
