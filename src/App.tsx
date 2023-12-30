import { BrowserRouter } from "react-router-dom";
import "./App.css";
import GlobalRouter from "./GlobalRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalRouter />
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
