import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Button from "./components/Button";
import { FeatureCard } from "./components/FeatureCard";
import Navbar from "./components/Navbar";
import { StatCard } from "./components/StatCard";
import vite from "/vite.svg?url";
import { GlobalRouter } from "./GlobalRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<GlobalRouter />} />
        </Routes>
      </BrowserRouter>

      {/* <Navbar />
      <Button type="link" style={{ textTransform: "lowercase" }}>
        Test
      </Button>
      <StatCard val="1000" desc="Hey"></StatCard>
      <FeatureCard src={vite} caption={"Expert Coaching"} /> */}
    </>
  );
}

export default App;
