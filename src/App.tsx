import { BrowserRouter } from "react-router-dom";
import "./App.css";
import GlobalRouter from "./GlobalRouter";
import Layout from "./screens/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
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
