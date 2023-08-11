import React from "react";
import bgMiddle from "../assets/themajorEnterprise.png";

const QuemsomosMiddlepart = () => {
  return (
    <div
      className="transition-all sm:flex-col justify-center ease-in-out md:gap-20 font-Arimo text-center text-white font-bold duration-700 sm:h-screen md:h-fit md:py-20 md:flex-row flex items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgMiddle})` }}
    >
      <div className="flex mb-12 flex-col items-start">
        <h1 className="sm:text-4xl w-96 md:text-8xl mt-10 sm:text-center md:text-left">
          A Maior do CE
        </h1>
        <div className="flex scale-50 sm:justify-center sm:ml-10 mt-4 md:mr-10 flex-row">
          <div className="w-40 rounded-full h-1 bg-white"></div>
          <div className="w-12 rounded-full ml-5 h-1 bg-white"></div>
        </div>
      </div>
      <div className="flex md:flex-row sm:flex-col text-bluePinheiro">
        <div className="bg-white sm:scale-75 md:scale-100 w-64 h-56">
          <h1 className="text-6xl mt-14 scale-150">+90</h1>
          <p className="opacity-75 mt-5">Colaboradores</p>
        </div>
        <div className="bg-gray-200 sm:scale-75 sm:mb-20 md:mb-0 md:scale-100 w-64 h-56">
          <h1 className="text-6xl mt-14 scale-125">+1000</h1>
          <p className="opacity-75 mt-5">Projetos</p>
        </div>
      </div>
    </div>
  );
};

export default QuemsomosMiddlepart;
