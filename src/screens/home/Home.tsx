import Navbar from "../../components/Navbar";
import FeatureCard from "../../components/FeatureCard";
import vite from "/vite.svg?url";
import MenuItemProp from "../../models/MenuItemProp";
import Stats from "./Stats";
import Footer from "./Footer";
import "../../components/Carousel.css";
import Hero from "./Hero";
import Image from "../../components/Image";

const HomePage = () => {
  const menuItems: Array<MenuItemProp> = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "Mentors",
      path: "/mentors",
    },
    {
      title: "About Us",
      path: "/about-us",
    },
  ];

  return (
    <>
      <Navbar
        logo={
          <Image
            src="logo2.png"
            style={{ height: "70px", width: "160px", mixBlendMode: "lighten" }}
          />
        }
        menuItems={menuItems}
      ></Navbar>
      <Hero />
      <FeatureCard src={vite} caption={"undefined"}></FeatureCard>
      <Stats />
      <Footer />
    </>
  );
};

export default HomePage;
