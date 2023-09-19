import React from "react";
import Header from "../Header/Header";
import imgAboutUs from "../../assets/images/about-us-img.jpg";
import { useApp } from "../AppContext";
import style from "./style.module.css";

function AboutUs() {
  const { themeChange, setThemeChange } = useApp();

  return (
    <main className={`${themeChange ? "bg-[#121417]" : "bg-white"} h-screen `}>
      <Header themeChange={themeChange} setThemeChange={setThemeChange} />
      <section
        className={`z-[0] w-screen absolute  ${
          themeChange ? "bg-[#121417]" : "bg-white"
        } z-[-1] w1280:flex w1280:justify-center `}
      >
        <div className="flex w1280:flex-col w1280:items-center justify-center w1280:w-[600px] w1280:gap-y-16 w1280:px-4 px-36 w-screen">
          <div className="w1280:w-full w1280:flex w1280:flex-col w1280:items-center w-3/6 mt-28 ">
            <div
              className={`flex flex-col w1280:items-center mt-12 gap-y-5 w1280:w-full w-8/12 ${style.animationCard} `}
            >
              <span
                className={`text-4xl font-bold font-Overpass ${
                  themeChange ? "text-white" : ""
                }`}
              >
                Sobre Nós
              </span>
              <span
                className={`font-normal font-Overpass leading-[28px] tracking-[1px] w1280:text-center w1280:max-w-[480px] ${
                  themeChange ? "text-white" : ""
                }`}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                nihil sequi officia id voluptates nisi impedit molestias
                distinctio aut repudiandae repellat commodi architecto alias
                excepturi voluptate quos iure, velit vitae!
              </span>
              <span
                className={`font-normal font-Overpass leading-[28px] tracking-[1px] w1280:text-center w1280:max-w-[480px] ${
                  themeChange ? "text-white" : ""
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque atque a molestiae porro eius, neque libero eveniet
                dicta vitae dolor!
              </span>
            </div>
            <div
              className={`flex flex-col w1280:items-center gap-y-5 w1280:mt-20 mt-20 w1280:w-full w-8/12 ${style.animationCard}`}
            >
              <span
                className={`text-4xl font-bold font-Overpass ${
                  themeChange ? "text-white" : ""
                }`}
              >
                Nossa Missão
              </span>
              <span
                className={`font-normal font-Overpass leading-[28px] tracking-[1px] w1280:text-center w1280:max-w-[480px] ${
                  themeChange ? "text-white" : ""
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                vitae voluptas eos assumenda qui! Et minus nobis blanditiis
                dolorum at?
              </span>
              <span
                className={`font-normal font-Overpass leading-[28px] tracking-[1px] w1280:text-center w1280:max-w-[480px] ${
                  themeChange ? "text-white" : ""
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                similique nostrum autem blanditiis consequatur nihil optio
                labore ducimus? Soluta asperiores adipisci, tenetur recusandae
                esse iste.
              </span>
            </div>
          </div>
          <div className="w1280:w-full h-full w-[600px] mt-12 w1280:mt-0 mt-28 mb-2">
            <img src={imgAboutUs} alt="About Us Image" className="" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
