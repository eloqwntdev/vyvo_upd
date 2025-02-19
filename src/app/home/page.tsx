import MainSection from "./components/main-section";
import TechSolutions from "./components/tech-solutions";
import KeyMetricsDisplay from "./components/key-metrics-display";
import OurProducts from "./components/our-products";

export const metadata = {
  title: "VAI",
  description: "",
  icons: {
    icon: "/logo.svg",
  },
};

const HomePage = () => {
  return (
    <>
      <MainSection />
      <TechSolutions />
      <KeyMetricsDisplay />
      <OurProducts />
    </>
  );
};

export default HomePage;
