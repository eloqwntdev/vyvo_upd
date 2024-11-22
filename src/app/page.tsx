import SmoothScroll from "@/components/common/animations/smooth-scroll";
import Banner from "./components/banner";
import FAQ from "./components/faq";
import Features from "./components/features";
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import Statement from "./components/statement";
import TryNow from "./components/try-now";

export const metadata = {
  title: "VAI",
  description: "",
};

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-start bg-black"
      id="top"
    >
      <Banner />
      <Statement />
      <div className="w-full relative">
        <Features />
        <Pricing />
        <FAQ />
        <TryNow />
      </div>
    </main>
  );
}
