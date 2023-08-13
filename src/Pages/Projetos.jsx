import React from "react";
import project1 from "../assets/bg1top.png";

const Projetos = () => {
  return (
    <div className="flex flex-col">
      <div className="sm:h-56 md:h-96 bg-bluePinheiro flex justify-center items-center text-center font-Arimo font-extrabold text-white">
        <h1 className="sm:text-4xl md:text-8xl">Projetos</h1>
      </div>
      <div className="flex flex-col font-bold font-Arimo mt-10 items-center">
        <span className="w-96 mb-5 h-0.5 bg-bluePinheiro"></span>
        <h1 className="text-4xl text-bluePinheiro">Energia Solar</h1>
      </div>
      <div className="flex gap-5 mb-10 flex-wrap items-center text-bluePinheiro font-Arimo font-bold text-center justify-center mt-20">
        <div className="h-full shadow-2xl rounded-2xl mb-5 p-5">
          <img src={project1} className="w-72 rounded-2xl" alt="" />
          <h1 className="text-2xl mt-5">Posto Segundo Meio</h1>
          <p className="font-thin opacity-90">Energia Solar</p>
        </div>
        <div className="h-full shadow-2xl rounded-2xl mb-5 p-5">
          <img src={project1} className="w-72 rounded-2xl" alt="" />
          <h1 className="text-2xl mt-5">Posto Segundo Meio</h1>
          <p className="font-thin opacity-90">Energia Solar</p>
        </div>
        <div className="h-full shadow-2xl rounded-2xl mb-5 p-5">
          <img src={project1} className="w-72 rounded-2xl" alt="" />
          <h1 className="text-2xl mt-5">Posto Segundo Meio</h1>
          <p className="font-thin opacity-90">Energia Solar</p>
        </div>
        <div className="h-full shadow-2xl rounded-2xl mb-5 p-5">
          <img src={project1} className="w-72 rounded-2xl" alt="" />
          <h1 className="text-2xl mt-5">Posto Segundo Meio</h1>
          <p className="font-thin opacity-90">Energia Solar</p>
        </div>
        <div className="h-full shadow-2xl rounded-2xl mb-5 p-5">
          <img src={project1} className="w-72 rounded-2xl" alt="" />
          <h1 className="text-2xl mt-5">Posto Segundo Meio</h1>
          <p className="font-thin opacity-90">Energia Solar</p>
        </div>
        <div className="h-full shadow-2xl rounded-2xl mb-5 p-5">
          <img src={project1} className="w-72 rounded-2xl" alt="" />
          <h1 className="text-2xl mt-5">Posto Segundo Meio</h1>
          <p className="font-thin opacity-90">Energia Solar</p>
        </div>
        <div className="h-full shadow-2xl rounded-2xl mb-5 p-5">
          <img src={project1} className="w-72 rounded-2xl" alt="" />
          <h1 className="text-2xl mt-5">Posto Segundo Meio</h1>
          <p className="font-thin opacity-90">Energia Solar</p>
        </div>
        <div className="h-full shadow-2xl rounded-2xl mb-5 p-5">
          <img src={project1} className="w-72 rounded-2xl" alt="" />
          <h1 className="text-2xl mt-5">Posto Segundo Meio</h1>
          <p className="font-thin opacity-90">Energia Solar</p>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
