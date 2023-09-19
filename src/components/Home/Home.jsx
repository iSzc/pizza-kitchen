import Header from "../Header/Header";
import React from "react";
import style from "./style.module.css";
import { useApp } from "../AppContext";
import stylemodule from "../AboutUs/style.module.css";
import { Link } from "react-router-dom";

function Home() {
  const { themeChange, setThemeChange } = useApp();

  return (
    <main className={`h-screen ${themeChange ? "bg-blackTheme" : "bg-white"}`}>
      <Header themeChange={themeChange} setThemeChange={setThemeChange} />
      <section
        className={`z-[0] w-screen  absolute  ${
          themeChange ? "bg-blackTheme" : "bg-white"
        } z-[-1] h-screen  `}
      >
        <div
          className={`h-full flex flex-col justify-between relative text-5xl z-[1]  w-full    ${
            themeChange ? "bg-blackTheme" : "bg-white"
          }`}
        >
          <div
            className={`mt-56 flex flex-col w-full  flex flex-col items-center  px-6 ${
              themeChange ? "bg-blackTheme" : "bg-white"
            }`}
          >
            <span
              className={`w475:mt-52 w375:text-3xl h-32 leading-9 flex items-center w425:text-4xl w600:text-4xl text-4xl text-center font-Overpass font-bold max-w-[380px] leading-[50px] ${
                stylemodule.animationCard
              } ${themeChange ? "text-white" : ""}`}
            >
              Bem Vindo ao Pizza Kitchen
            </span>
            <Link to="/basepizza" className="w-full flex justify-center">
              <button
                className={`rounded-full h-16 bg-[#fb7413] text-white text-base font-bold font-Overpass tracking-wide w-[538px] w550:w-full cursor-pointer z-[9999] ${style.btnAni} ${stylemodule.animationCard}`}
              >
                CRIE SUA PIZZA
              </button>
            </Link>
          </div>
          <div
            className={`${
              themeChange ? "bg-blackTheme" : "bg-white"
            } flex flex-col justify-end items-center
            `}
          >
            <div
              className={`bg-repeat h-24 bg-contain  w-screen w1024:bg-no-repeat w1024:bg-cover ${
                themeChange ? "bg-footerDark" : "bg-footerLight"
              }`}
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
