import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const WhatsappComp = () => {
  const [isDivVisible, setIsDivVisible] = useState(false);

  const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };

  return (
    <div className="fixed font-Arimo right-10 bottom-10 z-40">
      <div className="Test">
        <div
          className={`bg-white w-56 rounded-2xl mb-5 shadow-2xl h-36 ${
            isDivVisible ? "" : "hidden"
          }`}
        >
          <div className="w-full flex flex-col justify-center text-center items-center h-20 bg-orangePinheiro rounded-t-2xl">
            <h1 className="font-bold text-white">Fale conosco pelo Whatsapp</h1>
            <p className="text-sm w-44 font-thin text-darkBluePinheiroPinheiro">
              Aqui você pode selecionar o canal de atendimento!
            </p>
          </div>
          <div className="flex flex-row h-16 items-center justify-center">
            <a href="#">
              <div className="flex items-center justify-center cursor-pointer bg-gray-200 rounded-2xl py-1 px-3">
                <AiOutlineWhatsApp className="text-orangePinheiro" size={40} />
                <h1 className="font-bold text-md ml-2">Atendimento</h1>
              </div>
            </a>
          </div>
        </div>
        <div
          className="flex cursor-pointer items-center"
          onClick={toggleDivVisibility}
        >
          <div
            className={`w-40 h-12 shadow-2xl flex flex-col items-center justify-center bg-white rounded-lg mr-3 ${
              isDivVisible ? "invisible" : ""
            }`}
          >
            <p className="text-sm">Precisando de ajuda?</p>
            <p className="text-sm font-bold">Nos chame nos Whats!</p>
          </div>
          <div className="flex  bg-orangePinheiro w-14 rounded-full h-14 shadow-2xl items-center justify-center">
            <AiOutlineWhatsApp className="text-white" size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsappComp;
