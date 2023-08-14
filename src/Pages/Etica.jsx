import React from "react";
import EticaBg from "../assets/EticaBG.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Etica = () => {
  return (
    <div className="flex flex-col md:mb-32">
      <div className="sm:h-56 md:h-96 bg-bluePinheiro flex justify-center items-center text-center font-Arimo font-extrabold text-white">
        <h1 className="sm:text-4xl md:text-8xl">Bem vindo(a)!</h1>
      </div>
      <div
        className="transition-all sm:px-8 sm:py-10 md:px-20 md:py-44 ease-in-out font-Arimo text-bluePinheiro font-bold duration-700 sm:h-full md:h-screen flex flex-col items-start bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${EticaBg})` }}
      >
        <h1 className="text-3xl sm:mb-3 sm:text-center md:text-left md:mb-8 sm:w-full md:w-6/12">
          Este é o canal oficial para orientações sobre questões de ordem moral
          ou legal.
        </h1>
        <p className="font-thin sm:text-center md:text-left text-xl md:w-5/12">
          Assim, como meio de comunicação para que sejam denunciadas, de forma
          anônima ou identificada, quaisquer condutas que violem os preceitos
          estabelecidos no Código de Ética e Conduta da Taldi. Garantimos o
          sigilo das informações relatadas, assim como a identidade dos usuários
          que não quiserem se identificar. Uma vez realizado o relato, a Taldi,
          por meio de seu Comitê, assume o compromisso de buscar as providências
          necessárias para apurar, prevenir e punir condutas inadequadas, não
          admitindo qualquer tipo de retaliação contra aqueles que tenham
          relatado irregularidades de boa-fé.
        </p>
        <div className="flex md:flex-row sm:flex-col sm:ml-10 md:ml-0 mt-10 gap-10">
          <div className="text-center bg-orangePinheiro shadow-xl items-center flex flex-col justify-center rounded-2xl h-44 w-56 ">
            <h1 className="text-2xl font-extrabold text-white">
              Relatar uma preocupação
            </h1>
            <button className="font-Arimo flex items-center w-fit  hover:px-7 hover:bg-bluePinheiro hover:text-white transition-all ease-linear px-6 p-2 mt-4 text-orangePinheiro font-bold text-xl bg-white rounded-md ">
              Relatar <BsFillArrowRightCircleFill className="ml-4" />
            </button>
          </div>
          <div className="text-center bg-bluePinheiro shadow-xl items-center flex flex-col justify-center rounded-2xl h-44 w-56 ">
            <h1 className="text-2xl font-extrabold text-white">
              Acompanhar um relato
            </h1>
            <button className="font-Arimo flex items-center w-fit  hover:px-4 hover:bg-orangePinheiro hover:text-white transition-all ease-linear px-2 p-2 mt-4 text-orangePinheiro font-bold text-xl bg-white rounded-md ">
              Acompanhar <BsFillArrowRightCircleFill className="ml-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Etica;
