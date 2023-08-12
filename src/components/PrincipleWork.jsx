import React from "react";
import blueSolarPanel from "../assets/blueSolarPanel.png";
import middleservicetwo from "../assets/middleservicestwo.png";

const PrincipleWork = () => {
  return (
    <div className="h-full font-Arimo py-20 sm:gap-10 md:items-center xl:items-start md:gap-10 xl:gap-56 bg-white sm:flex-col xl:flex-row flex">
      <div className="mt-20 ml-20">
        <img src={blueSolarPanel} className="w-24" alt="" />
        <h1 className="text-4xl w-72 font-extrabold text-bluePinheiro">
          Princípios do nosso Trabalho
        </h1>
      </div>
      <div className="flex sm:items-center gap-10 sm:flex-col md:flex-row text-center">
        <div>
          <img src={middleservicetwo} className="w-64 rounded-3xl" alt="" />
          <div className="bg-gray-200 w-64 h-64 p-4 rounded-3xl md:mt-4">
            <h1 className="text-bluePinheiro text-4xl font-bold">Visão</h1>
            <p className="opacity-70">
              Ser uma empresa que traga orgulho a clientes e colaboradores, por
              sua eficiência e tecnologia em soluções de energia.
            </p>
          </div>
        </div>
        <div>
          <img src={middleservicetwo} className="w-64 rounded-3xl" alt="" />
          <div className="bg-gray-200 w-64 h-64 p-4 rounded-3xl md:mt-4">
            <h1 className="text-bluePinheiro text-4xl font-bold">Missão</h1>
            <p className="opacity-70">
              Oferecer soluções de engenharia com qualidade e eficiência, que
              garantam a satisfação do cliente, boas condições de trabalho aos
              colaborados e lucratividade a empresa.
            </p>
          </div>
        </div>
        <div>
          <img src={middleservicetwo} className="w-64 rounded-3xl" alt="" />
          <div className="bg-gray-200 w-64 h-64 p-4 rounded-3xl md:mt-4">
            <h1 className="text-bluePinheiro text-4xl font-bold">Valores</h1>
            <p className="opacity-70">
              Temos em nosso DNA qualidade e inovação. Trabalhamos com confiança
              e com foco no melhor relacionamento com o cliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipleWork;
