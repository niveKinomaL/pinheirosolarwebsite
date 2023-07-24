import React from "react";
import bg5middle from "../assets/bg5middle.png";
import videoone from "../assets/middleservicesone.png";

const MiddleFiveSlashSix = () => {
  return (
    <div
      className="transition-all ease-in-out font-Arimo sm:items-center md:items-center text-center text-white font-bold duration-700 sm:h-full md:h-screen flex flex-col items-start bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg5middle})` }}
    >
      <div className="flex mb-12 flex-col items-center">
        <h1 className="sm:text-3xl  text-orangePinheiro md:text-4xl md:ml-0 mt-28">
          Assista nossos vídeos
        </h1>
        <div className="flex sm:justify-center sm:mt-3 md:mt-8 md:justify-normal flex-row">
          <div className="w-40 rounded-full h-1 bg-orangePinheiro"></div>
          <div className="w-12 rounded-full ml-5 h-1 bg-orangePinheiro"></div>
        </div>
      </div>
      <div className="flex sm:flex-col md:gap-40 sm:gap-7 md:flex-row md:mt-20 items-center sm:justify-center md:justify-center md:mr-20 md:ml-20">
        <img
          src={videoone}
          className="md:w-2/12 md:scale-x-125 sm:w-8/12 md:h-3/12 rounded-2xl"
          alt=""
        />
        <img
          src={videoone}
          className="md:w-2/12 md:scale-x-150 md:scale-y-125 sm:w-8/12 md:h-3/12 rounded-2xl"
          alt=""
        />
        <img
          src={videoone}
          className="md:w-2/12 md:scale-x-125 sm:w-8/12 md:h-3/12 rounded-2xl"
          alt=""
        />
      </div>
      <button className="bg-orangePinheiro px-8 py-3 hover:px-10 duration-300 transition-all mt-20 mb-20 rounded-xl text-white">
        Inscreva-se no nosso canal
      </button>
    </div>
  );
};

export default MiddleFiveSlashSix;
