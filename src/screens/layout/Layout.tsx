import React from "react";
import Navbar from "../../components/Navbar";
import MenuItemProp from "../../models/MenuItemProp";
import Image from "../../components/Image";
import Footer from "./Footer";
import GlobalRouter from "../../GlobalRouter";
import { FloatButton } from "antd";

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
      title: "About Us",
      path: "/about-us",
    },
  ];
  return (
    <div style={{ scrollBehavior: "smooth" }}>
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
      <FloatButton.BackTop />
    </div>
  );
};

export default Layout;
