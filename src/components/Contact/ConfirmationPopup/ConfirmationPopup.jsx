import React from "react";
import { useApp } from "../../AppContext";
import style from "../../style.module.css";

function ConfirmationPopup({ showPopup, nameValue }) {
  const { themeChange } = useApp();

  return (
    <>
      {showPopup && (
        <div
          className={`h-60 w375:w-[320px] w320:w-[270px] w375:ml-7 gap-x-4 w-96 w480:ml-5 ml-28 mt-32 rounded-xl border-dashed border-2 border-[#fb7413] absolute z-[3333] flex flex-col gap-y-4 justify-center items-center ${
            showPopup ? style.popupactive : ""
          } ${themeChange ? "bg-[#121417]" : "bg-white"}`}
        >
          <span
            className={`font-bold font-Overpass text-lg w425:text-base ${
              themeChange ? "text-white" : ""
            }`}
          >
            Obrigado, {nameValue} !
          </span>
          <span className="px-4 text-center text-[#a3abb7]">
            Recebemos a sua mensagem e retornaremos o mais breve possivel
          </span>
          <span className="mt-10 text-[#a3abb7]">
            <i>Voltando para o inicio...</i>
          </span>
        </div>
      )}
    </>
  );
}

export default ConfirmationPopup;
