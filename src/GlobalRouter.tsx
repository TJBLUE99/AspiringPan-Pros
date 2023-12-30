import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./screens/home/Home";
// import HomePage from "./pages/home-page/home"

const GlobalRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default GlobalRouter;
