import React from "react";
import { useApp } from "../AppContext";
import { Link } from "react-router-dom";
import tyIcon from "../../assets/images/illustration-thank-you.svg";
import { AnimatePresence, motion } from "framer-motion";

function ThankYou({ showTy, buttonValue }) {
  const { themeChange } = useApp();

  return (
    <>
      <AnimatePresence>
        {showTy && (
          <div
            className={`h-screen w-screen relative z-[3333] flex justify-center items-center `}
          >
            <motion.div
              initial={{ y: "-100%", x: "0%", opacity: 0 }}
              animate={{ y: "20%", x: "0%", opacity: 1 }}
              className={`gap-x-4 w-96 rounded-xl relative flex flex-col justify-center items-center mx-2 ${
                themeChange ? "bg-[#252d37] opacity-[1]" : "bg-white"
              } shadow-customShadowBox `}
            >
              <div
                className={`mt-6 w-40 h-28 flex justify-center items-center`}
              >
                <img src={tyIcon} alt="Icon Star" className="h-full w-full" />
              </div>
              <div
                className={`mt-4 px-2 py-1 rounded-full ${
                  themeChange ? "bg-[#323a46]" : "bg-[#ebedf0]"
                }`}
              >
                <span className={`text-[#fc7614] text-md font-semibold `}>
                  Você escolheu {buttonValue} de 5
                </span>
              </div>
              <span
                className={`px-4 mt-4 text-2xl text-center w-full font-semibold text-center ${
                  themeChange ? "text-white" : ""
                }`}
              >
                Obrigado!
              </span>
              <span className="mt-4 px-4 text-center text-[#a3abb7] font-Overpass">
                Agradecemos por dedicar um tempo para nos avaliar. Se tiver
                alguma dúvida ou Feedback, entre em contato!
              </span>
              <div className="mt-4 mb-4">
                <Link to="/">
                  <button
                    className={`text-[#fc7614] font-semibold font-Overpass`}
                  >
                    Retornar a pagina principal
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ThankYou;
