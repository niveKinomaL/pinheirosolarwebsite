import React from "react";
import bgmiddle from "../assets/bgmiddlequemsomos.png";

const FinalPageQuemSomos = () => {
  return (
    <div
      className="transition-all justify-center sm:py-10 ease-in-out font-Arimo sm:items-center md:items-center text-center text-white font-bold duration-700 sm:h-full md:h-96 flex flex-col items-start bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgmiddle})` }}
    >
      <h1 className="md:text-4xl sm:text-2xl sm:w-11/12 md:w-4/12">
        Descubra como a Pinheiro Solar pode te ajudar!
      </h1>
      <button className="bg-bluePinheiro px-8 py-3 hover:px-10 duration-300 transition-all mt-10 mb-10 rounded-xl text-whiteo">
        Ver serviços
      </button>
    </div>
  );
};

export default FinalPageQuemSomos;
