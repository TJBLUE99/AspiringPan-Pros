import FeatureCard from "../../components/FeatureCard";
import vite from "/vite.svg?url";
import Stats from "./Stats";
import "../../components/Carousel.css";
import Hero from "./Hero";
import ImageGrid from "./ImageGrid";
import Features from "./Features";

const HomePage = () => {
  return (
    <>
      <Hero media="video" />
      <Features />
      <Stats />
      <ImageGrid />
    </>
  );
};

export default HomePage;
