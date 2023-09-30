import React, { useState } from "react";
import Header from "../Header/Header";
import { useApp } from "../AppContext";
import { useLocation } from "react-router-dom";
import pizza1 from "../../assets/images/pizza1.png";
import pizza2 from "../../assets/images/pizza2.png";
import pizza3 from "../../assets/images/pizza3.png";
import pizza4 from "../../assets/images/pizza4.png";
import pizza1Dark from "../../assets/images/pizza-dark-1.png";
import pizza2Dark from "../../assets/images/pizza-dark-2.png";
import pizza3Dark from "../../assets/images/pizza-dark-3.png";
import pizza4Dark from "../../assets/images/pizza-dark-4.png";
import upArrow from "../../assets/images/up-arrow.png";
import upArrowLeft from "../../assets/images/up-arrow-left.png";
import upArrowBlack from "../../assets/images/up-arrow-black.png";
import upArrowBlackLeft from "../../assets/images/up-arrow-black-left.png";
import Feedback from "./Feedback";
import ThankYou from "./ThankYou";
import { motion } from "framer-motion";

function OrderCompleted() {
  const { themeChange, setThemeChange } = useApp();
  const location = useLocation();
  const selectedBase = location.state.selectedBase;
  const selectedToppings = location.state.selectedToppings;
  const [showFeedback, setShowFeedback] = useState(false);
  const [showTy, setShowTy] = useState(false);
  const [buttonValue, setButtonValue] = useState("");

  const handleFeedbackClick = (value) => {
    setButtonValue(value);
    setTimeout(() => {
      setShowTy(true);
    }, 500);
  };

  const handleClick = () => {
    setShowFeedback(true);
  };

  return (
    <main
      className={`${themeChange ? "bg-darkTheme" : "bg-white"} ${
        showFeedback && !themeChange ? "bg-[#333333]" : ""
      } h-screen `}
    >
      <Header
        themeChange={themeChange}
        setThemeChange={setThemeChange}
        className={`${showFeedback || showTy ? "blur-[2px]" : ""}`}
      />
      <section
        className={`z-[0] w-screen absolute ${
          (showFeedback || showTy) && !themeChange
            ? "bg-[#333333]  blur-[2px]"
            : ""
        } ${(showFeedback || showTy) && themeChange ? "blur-[2px]" : ""}
         ${
           themeChange ? "bg-darkTheme" : "bg-white"
         } z-[-1] flex flex-col items-center `}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          className="flex w-auto w600:w-screen items-center flex-col mt-40 px-4 h-auto "
        >
          <span
            className={`w550:w-full w-[500px] w320:px-0 w375:px-2 text-4xl text-center font-semibold font-Overpass leading-[52px] ${
              themeChange ? "text-white" : "text-black"
            }`}
          >
            Que maravilha, seu pedido está a caminho!
          </span>
          <div className="mt-12 w550:w-full w-[500px]">
            <p
              className={`text-center text-xl italic ${
                themeChange ? "text-white" : "text-black"
              } `}
            >
              Seu pedido:
            </p>
            <p
              className={`text-center mt-4 font-Overpass ${
                themeChange ? "text-white" : "text-black"
              } `}
            >
              Uma pizza com massa{" "}
              {selectedBase.charAt(0).toLocaleUpperCase() +
                selectedBase.slice(1)}{" "}
              com os seguintes recheios:
              {selectedToppings.map((topping, index) => {
                return (
                  <>
                    {" "}
                    <span>
                      {topping.charAt(0).toLocaleUpperCase() + topping.slice(1)}
                      {index < selectedToppings.length - 1 && ", "}
                    </span>
                  </>
                );
              })}
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
              className="text-white h-36 flex justify-center mt-12"
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  delay: 0.5,
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 3.25,
                }}
                src={`${themeChange ? pizza1 : pizza1Dark}`}
                alt="pizzaAnimation"
                aria-hidden="true"
                className="absolute"
              />

              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  delay: 1.75,
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 3.25,
                }}
                src={`${themeChange ? pizza2 : pizza2Dark}`}
                alt="pizzaAnimation"
                className="absolute"
              />

              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  delay: 3,
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 3.25,
                }}
                src={`${themeChange ? pizza3 : pizza3Dark}`}
                alt="pizzaAnimation"
                className="absolute"
              />

              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  delay: 4.5,
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 4.25,
                }}
                src={`${themeChange ? pizza4 : pizza4Dark}`}
                alt="pizzaAnimation"
                className="absolute"
              />
            </motion.div>
          </div>
          <div
            className={`flex mt-32 items-center w375:mb-6 ${
              themeChange ? "bg-darkTheme" : ""
            }`}
          >
            <img
              src={`${themeChange ? upArrow : upArrowBlack}`}
              alt="rightArrow"
              className="h-16 w-16  w425:w-12 w425:h-12"
            />

            <span
              className={`text-center font-semibold ${
                themeChange ? "text-white" : ""
              }`}
            >
              Se você tiver um minuto, conte-nos o{" "}
              <button
                href=""
                onClick={handleClick}
                className={`text-[#fb7415] font-Overpass ${
                  themeChange ? "hover:text-white" : "hover:text-black"
                }`}
              >
                que achou!
              </button>
            </span>

            <img
              src={`${themeChange ? upArrowLeft : upArrowBlackLeft} `}
              alt="leftArrow"
              className="h-16 w-16 w425:w-12 w425:h-12"
            />
          </div>
        </motion.div>
      </section>
      <Feedback
        showFeedback={showFeedback}
        setShowFeedback={setShowFeedback}
        onClick={handleFeedbackClick}
      />
      {showTy && (
        <ThankYou
          buttonValue={buttonValue}
          showTy={showTy}
          setShowTy={setShowTy}
        />
      )}
    </main>
  );
}

export default OrderCompleted;
