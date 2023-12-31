import React from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import FeatureCard from "../../components/FeatureCard";
import Image from "../../components/Image";
import vite from "/vite.svg?url";
import { SketchOutlined } from "@ant-design/icons";
import MenuItemProp from "../../models/MenuItemProp";
import Stats from "./Stats";
import Footer from "./Footer";

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
        logo={<SketchOutlined className="logo" />}
        menuItems={menuItems}
      ></Navbar>
      <Carousel>
        <Image
          height={"90vh"}
          width={"100vw"}
          src={
            "https://content.clipchamp.com/content-repo/content/previews/cc_i507bdbb.jpg"
          }
        />
        <Image
          height={"90vh"}
          width={"100vw"}
          src={
            "https://content.clipchamp.com/content-repo/content/previews/cc_i507bdbb.jpg"
          }
        />
        <Image
          height={"90vh"}
          width={"100vw"}
          src={
            "https://content.clipchamp.com/content-repo/content/previews/cc_i507bdbb.jpg"
          }
        />
      </Carousel>
      <FeatureCard src={vite} caption={"undefined"}></FeatureCard>
      <Stats />
      <Footer />
    </>
  );
};

export default HomePage;
