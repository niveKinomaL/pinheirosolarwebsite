import React from "react";
import logo from "../assets/logo.png";
import { AiFillPhone } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoYoutube,
  BiLogoLinkedin,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="flex md:flex-row sm:flex-col md:text-left sm:text-center md:justify-between bg-darkBluePinheiro items-center text-white px-10 py-6">
      <div>
        <img src={logo} className="w-44 md:ml-10" alt="" />
      </div>
      <div>
        <p className="md:mr-10 sm:mt-7 sm:mb-6 md:mb-0 md:mt-0">
          © Pinheiro Solar, 2023. Todos os direitos reservados.
        </p>
      </div>
      <div className="flex md:flex-col sm:flex-row gap-2">
        <div>
          <div className="flex items-center gap-4">
            <IoIosMail className="scale-150" />
            <h1 className="font-extrabold">Contato</h1>
          </div>
          <p className="font-light md:ml-9">contato@pinheiro.com.br</p>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <AiFillPhone className="scale-150" />
            <h1 className="font-extrabold">Telefones</h1>
          </div>
          <p className="font-light md:ml-9">(84) 3318-1837</p>
        </div>
      </div>
      <div className="flex sm:mt-5 sm:mb-5 md:mt-0 md:mb-0 md:mr-20 flex-row gap-3 scale-125 text-xl items-center">
        <BiLogoFacebook />
        <BiLogoInstagram />
        <BiLogoYoutube />
        <BiLogoLinkedin />
      </div>
    </div>
  );
};

export default Footer;
