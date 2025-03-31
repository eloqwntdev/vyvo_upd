import React from "react";

const WatchVideoRing = () => {
  return (
    <section className="min-h-[200px] sm:min-h-[900px] relative">
      <video
        src="https://eloqwntmain.ams3.cdn.digitaloceanspaces.com/Vyvo/Werables_Page/ring-clip-2-site_roDZ6C73.mp4"
        className="w-full h-full absolute top-0 left-0 object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
};

export default WatchVideoRing;
