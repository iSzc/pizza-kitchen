import { useApp } from "../AppContext";
import Header from "../Header/Header";
Header;
import style from "./style.module.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Toppings() {
  const { themeChange, setThemeChange } = useApp();
  const location = useLocation();
  const selectedBase = location.state.selectedBase;
  const [delay, setDelay] = useState(false);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [focusedField, setFocusedField] = useState(null);
  const [buttonVisible, setButtonVisible] = useState(false);

  const toppings = [
    "queijo extra",
    "pepperoni",
    "presunto parma",
    "cogumelos",
    "azeitona preta",
    "bacon",
    "milho",
    "atum",
    "abacaxi",
    "cebola",
    "pimentão",
    "manjerição fresco",
    "espinafre",
    "rucula",
  ];

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleToppingSelection = (topping) => {
    if (selectedToppings.includes(topping)) {
      setSelectedToppings(selectedToppings.filter((item) => item !== topping));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, 500);
  }, [Toppings]);

  useEffect(() => {
    if (selectedToppings.length >= 3) {
      if (!buttonVisible) {
        setTimeout(() => {
          setButtonVisible(true);
        }, 300);
      }
    }
  }, [selectedToppings]);

  return (
    <main className={`${themeChange ? "bg-[#121417]" : "bg-white"} h-screen `}>
      <Header themeChange={themeChange} setThemeChange={setThemeChange} />
      <section
        className={`z-[0] w-screen absolute  ${
          themeChange ? "bg-[#121417]" : "bg-white"
        } z-[-1] flex flex-col items-center `}
      >
        <div
          className={`flex w-auto w600:w-screen items-center flex-col w600:mt-28 mt-56 px-8 h-auto `}
        >
          <h1
            className={`text-3xl self-start font-bold font-Overpass tracking-[1px] w600:text-2xl ${
              themeChange ? "text-white" : ""
            } ${style.titleEffect}`}
          >
            Escolha seus recheios:
          </h1>

          <form className="mt-10 flex flex-col self-center w600:w-full ">
            <fieldset action="" className="flex flex-col ">
              <legend className="sr-only">Available pizza bases</legend>

              {toppings.map((topping, index) => {
                return (
                  <div className={`${style.div} h-9`} key={index}>
                    {delay && (
                      <>
                        <input
                          type="checkbox"
                          id={topping}
                          value={topping}
                          name="pizza-toppings"
                          onFocus={() => handleFocus(topping)}
                          onBlur={() => handleBlur()}
                          checked={selectedToppings.includes(topping)}
                          onChange={() => handleToppingSelection(topping)}
                          className={`${style.input}`}
                        />
                        <label
                          htmlFor={topping}
                          className={`${
                            style.label
                          }  text-lg hover:scale-105 font-Overpass tracking-[1px]
                        ${
                          selectedToppings.includes(topping) && !themeChange
                            ? "text-[#fb7a1e]"
                            : ""
                        } ${
                            selectedToppings.includes(topping) && themeChange
                              ? "text-[#0485E1]"
                              : ""
                          }  ${themeChange ? style.invertColor : ""} ${
                            themeChange && focusedField === topping
                              ? "border-dashed border-4 dark:border-[#0485E1] text-[#0485E1]"
                              : ""
                          } ${
                            focusedField === topping && themeChange !== true
                              ? "border-dashed border-4 dark:border-[#fb7a1e] text-[#fb7a1e]"
                              : "border-4 border-transparent"
                          } `}
                        >
                          {topping.charAt(0).toLocaleUpperCase() +
                            topping.slice(1)}
                        </label>
                      </>
                    )}
                  </div>
                );
              })}
            </fieldset>

            {!buttonVisible && (
              <span className="text-[#b50607] mt-10 font-Overpass font-semibold">
                Pelo menos 3 recheios devem ser selecionados
              </span>
            )}

            <div
              className={`mt-8 w600:w-full w-[518px] ${style.btnAni}  border-none `}
            >
              {buttonVisible && (
                <Link to="/finished" state={{ selectedBase, selectedToppings }}>
                  <button
                    type="submit"
                    className={`w-full mb-6 h-16 bg-[#fb7413] rounded-full text-white w425:text-sm text-base font-bold font-Overpass 
                ${focusedField ? style.appear : ""}`}
                  >
                    FINALIZE SEU PEDIDO
                  </button>
                </Link>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Toppings;
