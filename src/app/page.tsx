"use client";
import SmoothScroll from "@/components/common/animations/smooth-scroll";
import Banner from "./components/banner";
import FAQ from "./components/faq";
import Features from "./components/features";
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import Statement from "./components/statement";
import TryNow from "./components/try-now";
import { useEffect, useState } from "react";

export default function Home() {
  const [hasRevealed, setHasRevealed] = useState(false);
  const [hasRevealedSave, setHasRevealedSave] = useState(false);
  useEffect(() => {
    if (hasRevealed) {
      const timer = setTimeout(() => {
        setHasRevealedSave(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [hasRevealed]);
  return (
    <main
      className="flex flex-col items-center justify-start bg-black"
      id="top"
    >
      <Banner />
      <Statement hasRevealed={hasRevealed} setHasRevealed={setHasRevealed} />
      <div className="w-full relative">
        <Features />
        {hasRevealedSave && (
          <>
            <Pricing />
            <FAQ />
            <TryNow />
          </>
        )}
      </div>
    </main>
  );
}
