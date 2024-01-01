import FeatureCard from "../../components/FeatureCard";
import vite from "/vite.svg?url";
import Stats from "./Stats";
import "../../components/Carousel.css";
import Hero from "./Hero";
import ImageGrid from "./ImageGrid";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeatureCard src={vite} caption={"undefined"}></FeatureCard>
      <Stats />
      <ImageGrid />
    </>
  );
};

export default HomePage;
