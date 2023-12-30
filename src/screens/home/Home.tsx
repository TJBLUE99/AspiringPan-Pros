import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import FeatureCard from "../../components/FeatureCard";
import Image from "../../components/Image";
import vite from "/vite.svg?url";
import { SketchOutlined } from "@ant-design/icons";
import MenuItemProp from "../../models/MenuItemProp";
import "../../components/Carousel.css";

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

  const imgUrls: string[] = [
    "https://images.pexels.com/photos/690598/pexels-photo-690598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/8462911/pexels-photo-8462911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/5154382/pexels-photo-5154382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3753820/pexels-photo-3753820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/690597/pexels-photo-690597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2888802/pexels-photo-2888802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleSlideChange = (current: any) => {
    setCurrentSlide(current);
  };
  return (
    <>
      <Navbar
        logo={<img src="logo2.png" className="logo" />}
        menuItems={menuItems}
      ></Navbar>
      <Carousel afterChange={handleSlideChange}>
        {imgUrls.map((imgUrl, index) => (
          <div
            key={index}
            className={`carousel-item ${
              currentSlide === index ? "active" : ""
            }`}
          >
            <img src={imgUrl} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <FeatureCard src={vite} caption={"undefined"}></FeatureCard>
    </>
  );
};

export default HomePage;
