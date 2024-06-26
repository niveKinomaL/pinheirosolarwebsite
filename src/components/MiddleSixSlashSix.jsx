import React from "react";
import bg6middle from "../assets/bg6middle.png";
import {
  AiOutlineMail,
  AiFillPhone,
  AiOutlineClockCircle,
} from "react-icons/ai";

const MiddleSixSlashSix = () => {
  return (
    <div
      className="transition-all sm:items-center ease-in-out font-Arimo text-center text-white font-bold duration-700 sm:h-full md:h-screen flex md:flex-row sm:flex-col items-start bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg6middle})` }}
    >
      <div className="md:mt-20 md:ml-36">
        <h1 className="text-4xl mt-20 md:ml-5 md:text-left">
          Fale com a gente
        </h1>
        <div className="flex  md:ml-5 sm:justify-center sm:mb-0 md:mb-10 mt-6 md:justify-normal flex-row">
          <div className="w-40 rounded-full h-1 bg-white"></div>
          <div className="w-12 rounded-full ml-5 h-1 bg-white"></div>
        </div>
        <form
          className="flex sm:scale-75	md:scale-100 text-bluePinheiro gap-4 items-center flex-col"
          action=""
        >
          <div className="flex flex-row gap-4">
            <input
              type="text"
              required
              className="p-4 rounded-full outline-none"
              placeholder="Nome*"
            />
            <input
              required
              type="text"
              className="p-4 rounded-full outline-none"
              placeholder="Telefone*"
            />
          </div>
          <input
            required
            type="email"
            className="p-4 w-full rounded-full outline-none"
            placeholder="Email*"
          />
          <textarea
            required
            name=""
            className="p-4 w-full rounded-xl outline-none"
            placeholder="Digite sua mensagem"
            id=""
            cols="30"
            rows="7"
          ></textarea>
          <button className="mt-10 sm:scale-150 md:scale-100 mb-10 bg-bluePinheiro w-2/4 text-white px-2 py-2 text-lg rounded-xl">
            Enviar
          </button>
        </form>
      </div>
      <div className="md:ml-24 sm:gap-6 sm:border-2 md:border-none md:p-0 sm:p-5 sm:border-white sm:rounded-xl sm:mb-20 flex sm:text-xl sm:flex-col md:flex-col md:gap-24 md:text-xl sm:mt-10 md:mt-36 text-left">
        <div>
          <div className="flex items-center gap-4">
            <AiOutlineMail className="scale-150" />
            <h1 className="font-extrabold">Contatos</h1>
          </div>
          <p className="font-light ml-9">contato@pinheiro.com.br</p>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <AiFillPhone className="scale-150" />
            <h1 className="font-extrabold">Telefones</h1>
          </div>
          <p className="font-light ml-9">(84) 3318-1837</p>
          <p className="font-light ml-9">(84) 3318-1837</p>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <AiOutlineClockCircle className="scale-150" />
            <h1 className="font-extrabold">Horários</h1>
          </div>
          <p className="ml-9 font-light">
            Segunda a Sexta: 07:30 às
            <br /> 11:30 e 13:00 às 17:30
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiddleSixSlashSix;
