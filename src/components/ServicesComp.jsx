import React from "react";
import bg3middle from "../assets/bg3middle.png";
import middleservicesone from "../assets/middleservicesone.png";
import middleservicestwo from "../assets/middleservicestwo.png";
import middleservicesthree from "../assets/middleservicesthree.png";
import serviceone from "../assets/serviceone.png";
import servicetwo from "../assets/servicetwo.png";

const ServicesComp = () => {
  return (
    <div
      className="transition-all ease-in-out font-Arimo text-white font-bold duration-700 sm:h-full md:h-screen flex flex-col items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg3middle})` }}
    >
      <div className="flex flex-col sm:text-center items-center">
        <h1 className="text-bluePinheiro text-5xl mt-20">
          Conheça nossos serviços
        </h1>
        <div className="flex sm:justify-center mt-8 md:justify-normal flex-row">
          <div className="w-40 rounded-full h-1 bg-orangePinheiro"></div>
          <div className="w-12 rounded-full ml-5 h-1 bg-orangePinheiro"></div>
        </div>
      </div>
      <div className="flex sm:flex-col gap-10 justify-center items-center mt-20 md:flex-row">
        <div
          className="flex flex-col hover:cursor-pointer md:hover:w-4/12 transition-all duration-700 text-center sm:w-11/12 sm:ml-4 sm:mr-4 md:ml-0 md:mr-0 md:w-3/12 justify-between items-center rounded-3xl h-96 bg-white bg-cover p-6 shadow-lg"
          style={{ backgroundImage: `url(${middleservicesone})` }}
        >
          <img src={serviceone} className="w-20 ml-5 mt-2" alt="" />
          <div className="sm:hidden md:flex w-56 h-0.5 rounded-full opacity-70 bg-white"></div>
          <h5 className="mb-2 md:text-2xl text-5xl font-bold  leading-tight  text-white">
            Energia Solar
          </h5>
          <p className="mb-4 text-base font-light  text-white">
            A geração de energia através de placas fotovoltaicas vem crescendo
            muito nos últimos anos...
          </p>
          <button
            type="button"
            className="inline-block hover:bg-white rounded border-2 hover:text-black border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 focus:border-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 "
            data-te-ripple-init
          >
            Ver mais
          </button>
        </div>
        <div
          className="flex flex-col md:mb-0 sm:mb-20 hover:cursor-pointer md:hover:w-4/12 transition-all duration-700 text-center sm:w-11/12 sm:ml-4 sm:mr-4 md:ml-0 md:mr-0 md:w-3/12 justify-between items-center rounded-3xl h-96 bg-white bg-cover p-6 shadow-lg"
          style={{ backgroundImage: `url(${middleservicestwo})` }}
        >
          <img src={servicetwo} className="w-16 mt-6" alt="" />
          <div className="sm:hidden md:flex w-56 h-0.5 rounded-full opacity-70 bg-white"></div>
          <h5 className="mb-2 text-5xl md:text-2xl font-bold  leading-tight  text-white">
            Instalações Elétricas
          </h5>
          <p className="mb-4 text-base font-light  text-white">
            Há mais de 10 anos atuando em serviços de infraestrutura elétrica de
            alta, média e baixa tensão.
          </p>
          <button
            type="button"
            className="inline-block hover:bg-white rounded border-2 hover:text-black border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 focus:border-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 "
            data-te-ripple-init
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesComp;
