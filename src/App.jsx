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
import VideosMiddleFiveSix from "./components/VideosMiddleFiveSix";
import PrincipleWork from "./components/PrincipleWork";
import FinalPageQuemSomos from "./components/FinalPageQuemSomos";
import Projetos from "./Pages/Projetos";
import Etica from "./Pages/Etica";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";
import WhatsappComp from "./components/WhatsappComp";

function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <TopBar />
        <NavBar />
        <WhatsappComp />
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
                <VideosMiddleFiveSix />
                <PrincipleWork />
                <FinalPageQuemSomos />
              </>
            }
          />
          <Route
            path="/Projetos"
            element={
              <>
                <Projetos />
              </>
            }
          />
          <Route
            path="/Etica"
            element={
              <>
                <Etica />
                <MiddleSixSlashSix />
              </>
            }
          />
          <Route
            path="/Contato"
            element={
              <>
                <ContactUs />
              </>
            }
          />
          <Route
            path="/Servicos"
            element={
              <>
                <Services />
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
