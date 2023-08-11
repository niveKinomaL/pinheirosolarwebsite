import React from "react";
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
import Footer from "./components/footer";
import Quemsomos from "./Pages/Quemsomos";
import QuemsomosMiddlepart from "./components/QuemsomosMiddlepart";

function App() {
  return (
    <div>
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
          <Route
            path="/Quemsomos"
            element={
              <>
                <Quemsomos />
                <QuemsomosMiddlepart />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
