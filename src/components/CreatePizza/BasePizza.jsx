import Header from "../Header/Header";
import React, { useState } from "react";
import { useApp } from "../AppContext";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { motion } from "framer-motion";

function BasePizza() {
  const { themeChange, setThemeChange } = useApp();
  const [focusedField, setFocusedField] = useState(null);
  const [newPizza, setNewPizza] = useState({});
  const [buttonVisible, setButtonVisible] = useState(false);
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
    <main className={`${themeChange ? "bg-darkTheme" : "bg-white"} h-screen `}>
      <Header themeChange={themeChange} setThemeChange={setThemeChange} />
      <section
        className={`z-[0] w-screen absolute  ${
          themeChange ? "bg-darkTheme" : "bg-white"
        } z-[-1] flex flex-col items-center `}
      >
        <motion.div
          className={`flex w-auto w600:w-screen items-center flex-col mt-56 px-8`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className={`text-3xl self-start font-bold font-Overpass tracking-[1px] w600:text-2xl ${
              themeChange ? "text-white" : ""
            }`}
          >
            Escolha a base da sua pizza:
          </motion.h1>

          <motion.form
            className="mt-10 flex flex-col self-center w600:w-full"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <fieldset className="flex flex-col ">
              <legend className="sr-only">Available pizza bases</legend>

              {bases.map((base, index) => {
                return (
                  <motion.div
                    whileHover={{ scale: 1.15, originX: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}
                    className={`${style.div} h-9`}
                    key={index}
                  >
                    <input
                      type="radio"
                      key={base}
                      id={base}
                      value={base}
                      name="pizza-base"
                      checked={index}
                      onFocus={() => handleFocus(base)}
                      onBlur={() => handleBlur()}
                      onChange={addBase}
                      className="opacity-0 absolute"
                    />
                    <label
                      htmlFor={base}
                      className={`${
                        style.label
                      }  text-lg  font-Overpass tracking-[1px]  ${
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
                  </motion.div>
                );
              })}
            </fieldset>

            <motion.div className="mt-8 w600:w-full w-[518px]">
              {buttonVisible && (
                <Link to="/toppings" state={{ selectedBase }}>
                  <motion.button
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    whileHover={{ scale: 1.15 }}
                    type="submit"
                    className=" w-full mb-4 h-16 bg-[#fb7413] rounded-full text-white w425:text-sm text-base font-bold font-Overpass 
                   "
                  >
                    PROXIMO: RECHEIOS
                  </motion.button>
                </Link>
              )}
            </motion.div>
          </motion.form>
        </motion.div>
      </section>
    </main>
  );
}

export default BasePizza;
