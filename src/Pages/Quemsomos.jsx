import React from "react";
import quemsomosbg from "../assets/QuemSomos.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Quemsomos = () => {
  return (
    <div className="h-full font-Arimo flex flex-col items-center">
      <div className="flex  justify-end">
        <img src={quemsomosbg} className="h-fit" alt="" />
      </div>
      <div className="flex sm:flex-col px-20 py-10 items-center md:flex-row">
        <div className="flex-1">
          <h1 className="text-4xl mb-3 font-bold text-bluePinheiro">
            Nossa estrutura
          </h1>
          <p className="text-xl opacity-70 sm:w-72 sm:mb-10 md:mb-0 md:w-3/4 text-darkBluePinheiro">
            Somos uma empresa inovadora que trabalha há mais de 14 anos com a
            execução de obras de infraestrutura elétrica no Nordeste brasileiro.
            Contamos com uma equipe motivada e capacitada, que trabalha com
            muita eficácia para atender e satisfazer a necessidade dos nossos
            clientes.
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <img
            src="https://taldi.com.br/wp-content/uploads/2021/08/1_k4WusiCeGMmFkR25t-zIcQ-800x450.jpeg"
            className="md:h-96 sm:w-fit sm:scale-125 md:scale-100 md:w-11/12 shadow-2xl rounded-3xl"
            alt=""
          />
        </div>
      </div>
      <div className="flex px-20 py-10 items-center sm:flex-col md:flex-row">
        <div className="sm:flex md:flex-1">
          <img
            src="https://taldi.com.br/wp-content/uploads/2021/08/1_k4WusiCeGMmFkR25t-zIcQ-800x450.jpeg"
            className="md:h-96 md:scale-100 sm:scale-125 sm:w-fit md:w-11/12 sm:mb-10 md:mb-0 shadow-2xl rounded-3xl"
            alt=""
          />
        </div>
        <div className="sm:flex md:flex-1 flex-col md:justify-end">
          <h1 className="text-4xl mb-3 font-bold text-bluePinheiro">
            Feita para você
          </h1>
          <p className="text-xl opacity-70 sm:w-72 sm:mb-10 md:mb-0 md:w-3/4 text-darkBluePinheiro">
            Oferecemos sempre o melhor custo benefício nos projetos e soluções
            que atuamos. Nos baseamos nos princípios da Engenharia, que visam
            executar os processos de maneira mais rápida e segura, com redução
            de custos e melhor qualidade.
          </p>
        </div>
      </div>
      <div className="flex sm:flex-col px-20 md:py-10 items-center md:flex-row">
        <div className="flex-1">
          <h1 className="text-4xl mb-3 font-bold text-bluePinheiro">
            Somos a Pinheiro Solar
          </h1>
          <p className="text-xl opacity-70 sm:w-72 sm:mb-10 md:mb-0 md:w-3/4 text-darkBluePinheiro">
            Somos uma empresa inovadora que trabalha há mais de 14 anos com a
            execução de obras de infraestrutura elétrica no Nordeste brasileiro.
            Contamos com uma equipe motivada e capacitada, que trabalha com
            muita eficácia para atender e satisfazer a necessidade dos nossos
            clientes.
          </p>
          <button className="font-Arimo sm:mb-10 md:mb-0 md:mt-5 flex w-44  items-center hover:px-6 hover:bg-bluePinheiro transition-all ease-linear text-white font-bold text-sm bg-orangePinheiro rounded-md px-5 gap-2 py-3">
            Nossos Projetos <BsFillArrowRightCircleFill className="" />
          </button>
        </div>
        <div className="flex-1 flex justify-end">
          <img
            src="https://taldi.com.br/wp-content/uploads/2021/08/1_k4WusiCeGMmFkR25t-zIcQ-800x450.jpeg"
            className="md:h-96 md:scale-100 sm:scale-125 sm:w-fit md:w-11/12 sm:mb-10 md:mb-0 shadow-2xl rounded-3xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Quemsomos;
