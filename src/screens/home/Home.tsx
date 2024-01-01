import FeatureCard from "../../components/FeatureCard";
import vite from "/vite.svg?url";
import Stats from "./Stats";
import "../../components/Carousel.css";
import Hero from "./Hero";
import Features from "./Features";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
    </>
  );
};

export default HomePage;
