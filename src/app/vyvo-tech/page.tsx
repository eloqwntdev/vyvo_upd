import Banner from "./components/banner";
import BiosenseRing from "./components/biosense-ring";
import MobileBiosenseRing from "./components/mobile-biosense-ring";
import Overview from "./components/overview";

export const metadata = {
  title: "Vyvo Tech",
  description: "",
  icons: {
    icon: "/logo.svg",
  },
};

const VyvoTech = () => {
  return (
    <>
      <Banner />
      <BiosenseRing />
      <MobileBiosenseRing />
      <Overview />
    </>
  );
};

export default VyvoTech;
