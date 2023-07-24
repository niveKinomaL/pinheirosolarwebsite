import React from "react";
import manFixingSolar from "../assets/manFixingSolarPanel.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const MiddleOneSlashSix = () => {
  return (
    <div className="h-screen flex sm:flex-col md:flex-row font-Arimo font-bold gap-5  items-center">
      <div className="flex flex-col xl:mt-0 md:mt-10 gap-4 md:ml-16 sm:text-center sm:items-center md:items-start md:text-left xl:ml-64">
        <h1 className="md:text-3xl sm:text-3xl xl:text-5xl md:w-full xl:w-12/12 sm:w-fit sm:mt-8 text-bluePinheiro">
          A Pinheiro Solar é uma empresa inovadora
        </h1>
        <div className="flex sm:justify-center md:justify-normal flex-row">
          <div className="w-40 rounded-full h-1 bg-orangePinheiro"></div>
          <div className="w-12 rounded-full ml-5 h-1 bg-orangePinheiro"></div>
        </div>
        <p className="text-bluePinheiro md:text-sm opacity-90  sm:w-10/12 md:w-full">
          Somos a maior integradora do Ceará. Trabalhamos há mais de x anos com
          a execução de obras de infraestrutura elétrica no Nordeste do Brasil,
          nos baseamos nos princípios da Engenharia, que visam executar os
          processos de maneira mais rápida e segura, com redução de custos e
          melhor qualidade.
        </p>
        <button className="font-Arimo flex w-fit items-center hover:px-10 hover:bg-bluePinheiro transition-all ease-linear text-white font-bold text-xl bg-orangePinheiro rounded-md px-8 py-3">
          Conheça a Pinheiro <BsFillArrowRightCircleFill className="ml-4" />
        </button>
      </div>
      <img
        src={manFixingSolar}
        className="md:w-5/12 xl:w-4/12 md:mr-20 sm:w-6/12 xl:mr-44"
        alt=""
      />
    </div>
  );
};

export default MiddleOneSlashSix;
