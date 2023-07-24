import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TopBar from "./components/TopBar";
import MiddleOneSlashSix from "./components/MiddleOneSlashSix";
import MiddleTwoSlashSix from "./components/MiddleTwoSlashSix";
import MiddleThreeSlashSix from "./components/MiddleThreeSlashSix";
import MiddleFourSlashSix from "./components/MiddleFourSlashSix";
import MiddleFiveSlashSix from "./components/MiddleFiveSlashSix";
import MiddleSixSlashSix from "./components/MiddleSixSlashSix";

export default function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
              <MiddleOneSlashSix />
              <MiddleTwoSlashSix />
              <MiddleThreeSlashSix />
              <MiddleFourSlashSix />
              <MiddleFiveSlashSix />
              <MiddleSixSlashSix />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
