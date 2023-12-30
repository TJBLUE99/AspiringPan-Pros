import { SketchOutlined } from "@ant-design/icons";
import "./App.css";
import Button from "./components/Button";
import { FeatureCard } from "./components/FeatureCard";
import Navbar from "./components/Navbar";
import { StatCard } from "./components/StatCard";
import vite from "/vite.svg?url";
import MenuItemProp from "./models/MenuItemProp";

function App() {
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
      />
      <Button type="link" style={{ textTransform: "lowercase" }}>
        Test
      </Button>
      <StatCard val="1000" desc="Hey"></StatCard>
      <FeatureCard src={vite} caption={"Expert Coaching"} />
    </>
  );
}

export default App;
