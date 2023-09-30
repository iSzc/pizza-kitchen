import Header from "../Header/Header";
import React from "react";
import style from "./style.module.css";
import { useApp } from "../AppContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const { themeChange, setThemeChange } = useApp();

  return (
    <main className={`h-screen ${themeChange ? "bg-darkTheme" : "bg-white"}`}>
      <Header themeChange={themeChange} setThemeChange={setThemeChange} />
      <section
        className={`z-[0] w-screen  absolute  ${
          themeChange ? "bg-darkTheme" : "bg-white"
        } z-[-1] h-screen  `}
      >
        <div
          className={`h-full flex flex-col justify-between relative text-5xl z-[1] w-full ${
            themeChange ? "bg-darkTheme" : "bg-white"
          }`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className="mt-56 flex flex-col w-full  flex flex-col items-center  px-6"
          >
            <span
              className={`w475:mt-52 w375:text-3xl h-32 leading-9 flex items-center w425:text-4xl w600:text-4xl text-4xl text-center font-Overpass font-bold max-w-[380px] leading-[50px] ${
                themeChange ? "text-white" : ""
              }`}
            >
              Bem Vindo ao Pizza Kitchen
            </span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="w550:w-full"
            >
              <Link to="/basepizza" className="w-full flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.05 }}
                  className="rounded-full h-16 bg-[#fb7413] text-white text-base font-bold font-Overpass tracking-wide w-[538px] w550:w-full cursor-pointer z-[9999]"
                >
                  CRIE SUA PIZZA
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          <div
            className={`${
              themeChange ? "bg-darkTheme" : "bg-white"
            } flex flex-col justify-end items-center
            `}
          >
            <div
              className={`bg-repeat h-24 bg-contain  w-screen w1024:bg-no-repeat w1024:bg-cover ${
                themeChange ? style.bgLight : style.bgDark
              }`}
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
