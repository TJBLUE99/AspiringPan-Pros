import "./App.css";
import Button from "./components/Button";
import { FeatureCard } from "./components/FeatureCard";
import Navbar from "./components/Navbar";
import { StatCard } from "./components/StatCard";
import vite from "/vite.svg?url";

function App() {
  return (
    <>
      <Navbar />
      <Button type="link" style={{ textTransform: "lowercase" }}>
        Test
      </Button>
      <StatCard val="1000" desc="Hey"></StatCard>
      <FeatureCard src={vite} caption={"Expert Coaching"} />
    </>
  );
}

export default App;
