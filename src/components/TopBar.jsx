import React from "react";
import { IoIosMail } from "react-icons/io";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoYoutube,
  BiLogoLinkedin,
} from "react-icons/bi";

const TopBar = () => {
  return (
    <div className="transition-all ease-in-out duration-700 flex-row sm:hidden md:flex justify-between px-10 h-10 font-bold text-sm bg-bluePinheiro items-center font-Arimo text-white">
      <div className="flex flex-row gap-7">
        <p className="flex items-center gap-2">
          <IoIosMail className="mt-0.5" />
          marketing@pinheiro.com.br
        </p>
        <p className="flex items-center gap-1">
          <IoIosMail className="mt-0.5" />
          contato@pinheiro.com.br
        </p>
      </div>
      <div className="flex flex-row gap-3 text-xl items-center">
        <BiLogoFacebook />
        <BiLogoInstagram />
        <BiLogoYoutube />
        <BiLogoLinkedin />
      </div>
    </div>
  );
};

export default TopBar;
