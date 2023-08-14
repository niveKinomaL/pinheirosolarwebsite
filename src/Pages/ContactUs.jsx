import React from "react";
import WomanTelemarketing from "../assets/WomanTelemarketing.png";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-white shadow-2xl rounded-3xl flex justify-center sm:flex-col md:flex-row items-center sm:h-screen sm:w-full md:w-3/4 gap-20 md:h-6/8">
        <img
          src={WomanTelemarketing}
          className="shadow-xl rounded-3xl sm:hidden md:block md:w-2/5"
          alt=""
        />
        <div>
          <div>
            <h1 className="text-4xl sm:text-center md:mt-20 md:ml-5 md:text-left">
              Fale com a gente
            </h1>
            <div className="flex  md:ml-5 sm:justify-center sm:mb-0 md:mb-10 mt-6 md:justify-normal flex-row">
              <div className="w-40 rounded-full h-1 bg-bluePinheiro"></div>
              <div className="w-12 rounded-full ml-5 h-1 bg-bluePinheiro"></div>
            </div>
          </div>
          <div>
            <form
              className="flex sm:scale-75	md:scale-100 text-bluePinheiro gap-4 items-center flex-col"
              action=""
            >
              <div className="flex flex-row gap-4">
                <input
                  type="text"
                  required
                  className="p-4 bg-slate-100 rounded-full outline-none"
                  placeholder="Nome*"
                />
                <input
                  required
                  type="text"
                  className="p-4 bg-slate-100 rounded-full outline-none"
                  placeholder="Telefone*"
                />
              </div>
              <input
                required
                type="email"
                className="p-4 bg-slate-100 w-full rounded-full outline-none"
                placeholder="Email*"
              />
              <textarea
                required
                name=""
                className="p-4 bg-slate-100 w-full rounded-xl outline-none"
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
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
