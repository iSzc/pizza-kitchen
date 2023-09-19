import Header from "../Header/Header";
import React, { useState, useEffect } from "react";
import { useApp } from "../AppContext";
import { Link } from "react-router-dom";
import style from "./style.module.css";

function BasePizza() {
  const { themeChange, setThemeChange } = useApp();
  const [focusedField, setFocusedField] = useState(null);
  const [newPizza, setNewPizza] = useState({});
  const [buttonVisible, setButtonVisible] = useState(false);
  const [delay, setDelay] = useState(false);
  const [selectedBase, setSelectedBase] = useState("");

  const bases = ["napolitana", "siciliana", "nova-iorquina", "toscana"];

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
    if (!buttonVisible) {
      setTimeout(() => {
        setButtonVisible(true);
      }, 400);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, 500);
  }, [BasePizza]);

  const handleBlur = () => {
    setFocusedField(null);
  };

  const addBase = (e) => {
    setNewPizza({
      ...newPizza,
      base: e.target.value,
    });

    setSelectedBase(e.target.value);
  };

  return (
    <main className={`${themeChange ? "bg-[#121417]" : "bg-white"} h-screen `}>
      <Header themeChange={themeChange} setThemeChange={setThemeChange} />
      <section
        className={`z-[0] w-screen absolute  ${
          themeChange ? "bg-[#121417]" : "bg-white"
        } z-[-1] flex flex-col items-center `}
      >
        <div
          className={`flex w-auto w600:w-screen items-center flex-col mt-56 px-8`}
        >
          <h1
            className={`text-3xl self-start font-bold font-Overpass tracking-[1px] w600:text-2xl ${
              themeChange ? "text-white" : ""
            } ${style.titleEffect}`}
          >
            Escolha a base da sua pizza:
          </h1>

          <form className="mt-10 flex flex-col self-center w600:w-full">
            <fieldset action="" className="flex flex-col ">
              <legend className="sr-only">Available pizza bases</legend>

              {bases.map((base, index) => {
                return (
                  <div className={`${style.div} h-9  `} key={index}>
                    {delay && (
                      <>
                        <input
                          type="radio"
                          id={base}
                          value={base}
                          name="pizza-base"
                          checked={index}
                          onFocus={() => handleFocus(base)}
                          onBlur={() => handleBlur()}
                          onChange={addBase}
                          className={`${style.input}`}
                        />
                        <label
                          htmlFor={base}
                          className={`${
                            style.label
                          }  text-lg hover:scale-105 font-Overpass tracking-[1px]  ${
                            themeChange ? style.invertColor : ""
                          } 
                          ${
                            themeChange && focusedField === base
                              ? "border-dashed border-4 dark:border-[#0485E1] text-[#0485E1]"
                              : ""
                          } ${
                            focusedField === base && themeChange !== true
                              ? "border-dashed border-4 dark:border-[#fb7a1e] text-[#fb7a1e]"
                              : "border-4 border-transparent"
                          } `}
                        >
                          {base.charAt(0).toLocaleUpperCase() + base.slice(1)}
                        </label>
                      </>
                    )}
                  </div>
                );
              })}
            </fieldset>

            <div className={`mt-8 w600:w-full w-[518px] ${style.btnAni}`}>
              {buttonVisible && (
                <Link to="/toppings" state={{ selectedBase }}>
                  <button
                    type="submit"
                    className={` w-full mb-4 h-16 bg-[#fb7413] rounded-full text-white w425:text-sm text-base font-bold font-Overpass 
                    ${focusedField ? style.appear : ""}`}
                  >
                    PROXIMO: RECHEIOS
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

export default BasePizza;
