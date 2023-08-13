import React from "react";
import bg4middle from "../assets/bg4middle.png";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const MiddleFourSlashSix = () => {
  return (
    <div
      className="transition-all justify-center ease-in-out font-Arimo text-center text-white font-bold duration-700 sm:h-full md:h-screen flex flex-col items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg4middle})` }}
    >
      <div className="flex mb-12 flex-col items-center">
        <h1 className="sm:text-4xl md:text-5xl mt-10">Nossos projetos</h1>
        <div className="flex sm:justify-center mt-8 md:justify-normal flex-row">
          <div className="w-40 rounded-full h-1 bg-white"></div>
          <div className="w-12 rounded-full ml-5 h-1 bg-white"></div>
        </div>
      </div>
      <Carousel />
      <Link to={"/Projetos"}>
        <button className="bg-white px-8 py-3 hover:px-10 duration-300 transition-all mt-10 mb-10 rounded-xl text-orangePinheiro">
          Ver mais projetos
        </button>
      </Link>
    </div>
  );
};

export default MiddleFourSlashSix;
