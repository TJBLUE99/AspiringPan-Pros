import Navbar from "../../components/Navbar";
import FeatureCard from "../../components/FeatureCard";
import vite from "/vite.svg?url";
import MenuItemProp from "../../models/MenuItemProp";
import "../../components/Carousel.css";
import Hero from "../../components/Hero";

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
        logo={<img src="logo2.png" className="logo" />}
        menuItems={menuItems}
      ></Navbar>
      <Hero />
      <FeatureCard src={vite} caption={"undefined"}></FeatureCard>
    </>
  );
};

export default HomePage;
