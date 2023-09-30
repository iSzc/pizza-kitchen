import React, { useState } from "react";
import { useApp } from "../AppContext";
import iconStar from "../../assets/images/icon-star.svg";
import { AnimatePresence, motion } from "framer-motion";

function Feedback({ showFeedback, setShowFeedback, onClick, value }) {
  const { themeChange } = useApp();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [buttonValue, setButtonValue] = useState("");

  const handleClick = (value) => {
    setButtonValue(value);
    setButtonClicked(true);
    console.log(value);
  };

  const handleFeedbackClick = () => {
    onClick(buttonValue);
    setShowFeedback(false);
  };

  const renderButton = (value) => (
    <div className="h-10 w-10 flex justify-center items-center">
      <button
        className={`h-full w-full rounded-full cursor-pointer font-semibold cursor-pointer hover:text-white  ${
          buttonValue === value
            ? "bg-[#fb7413] text-white"
            : "bg-[#e5e7ea]"
            ? "hover:bg-[#959eac] text-[#959eac] bg-[#e5e7ea]"
            : ""
        } 

      
        `}
        onClick={() => handleClick(value)}
      >
        {value}
      </button>
    </div>
  );

  return (
    <>
      <AnimatePresence>
        {showFeedback && (
          <div
            className={`h-full w-screen relative z-[3333] flex justify-center items-center`}
          >
            <motion.div
              initial={{ y: "-150%", x: "0%", opacity: 0 }}
              animate={{ y: "0%", x: "0%", opacity: 1 }}
              exit={{ y: "-150%", x: "0%", opacity: 0 }}
              className={`gap-x-4 w-96 rounded-xl relative flex flex-col  ${
                themeChange
                  ? "bg-[#252d37] opacity-[1]"
                  : "bg-white shadow-customShadowBox"
              }  `}
            >
              <div
                className={`mt-4 ml-6 w-10 h-10 flex justify-center items-center rounded-full ${
                  themeChange ? "bg-[#373f4a]" : "bg-[#e5e7ea]"
                }`}
              >
                <img src={iconStar} alt="Icon Star" className="h-4 w-4" />
              </div>
              <span
                className={`px-4 mt-4 text-xl text-center w-full font-semibold text-center ${
                  themeChange ? "text-white" : ""
                }`}
              >
                O que achou do nosso atendimento?
              </span>
              <span className="mt-6 px-4 text-center text-[#a3abb7]">
                Por favor, conte-nos como foi o seu pedido. Todos os comentários
                serão lidos e analisados para que melhoremos cada vez mais.
              </span>
              <div className="flex justify-around mt-8  mb-6 mb-6">
                {renderButton("1")}
                {renderButton("2")}
                {renderButton("3")}
                {renderButton("4")}
                {renderButton("5")}
              </div>
              {buttonClicked && (
                <div className="mt-6 mb-6 h-14 px-10">
                  <button
                    className="bg-[#fb7413] text-white w-full h-full rounded-full font-Overpass font-semibold tracking-[2px]"
                    onClick={handleFeedbackClick}
                  >
                    ENVIAR
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Feedback;
