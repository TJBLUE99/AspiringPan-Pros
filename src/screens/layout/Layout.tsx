import React from "react";
import Navbar from "../../components/Navbar";
import MenuItemProp from "../../models/MenuItemProp";
import Image from "../../components/Image";
import Footer from "./Footer";
import GlobalRouter from "../../GlobalRouter";

const Layout = () => {
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
      title: "Schedules",
      path: "/schedules",
    },
    {
      title: "Events",
      path: "/events",
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
      />
      <GlobalRouter />
      <Footer />
    </>
  );
};

export default Layout;
