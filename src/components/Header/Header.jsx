import logoPizza from "../../assets/images/logo.svg";
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";
import hamburguer from "../../assets/images/icon-hamburger.svg";
import close from "../../assets/images/icon-close.svg";
import { useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import ButtonHeader from "./ButtonHeader/ButtonHeader";
import Logout from "../Signup/Logout";
import { motion } from "framer-motion";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { themeChange, setThemeChange } = props;
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(
    localStorage.getItem("userIsLoggedIn") === "true"
  );

  const themeButton = () => {
    const newTheme = !themeChange;
    setThemeChange(newTheme);

    localStorage.setItem("theme", themeChange ? "dark" : "light");
  };

  const toggleMenu = (props) => {
    setIsOpen(!isOpen);
  };

  const userLoggedInEmail = localStorage.getItem("userEmail");

  return (
    <main
      className={`w-screen flex flex-col z-[1] fixed  ${
        themeChange ? "bg-darkTheme" : "bg-white"
      } ${props.className}`}
    >
      <div className="flex justify-between items-center  h-24 px-20 w1024:px-6 shadow-customShadow ">
        <motion.div className="w-48 h-full flex items-center gap-x-4 z-[0] max-w-[1240px]">
          <Link to="/">
            <button className={`w-12 h-12 cursor-pointer mt-2`}>
              <img
                src={logoPizza}
                alt=""
                className={`${themeChange ? style.logoStyle : ""}`}
              />
            </button>
          </Link>
          <Link to="/">
            <button
              className={`w375:hidden mt-4 font-Overpass tracking-wider cursor-pointer hover:text-orange-500 ${
                themeChange ? "text-white" : ""
              }`}
            >
              Pizza Kitchen
            </button>
          </Link>
        </motion.div>
        <div className="w1024:w-20 h-12 flex items-center w1024:justify-between relative">
          <div
            className={`mr-12 gap-x-12  h-full items-center flex justify-between w1024:hidden `}
          >
            <Link to="/contact">
              <ButtonHeader
                btn="CONTATO"
                btnChangeTheme={`${themeChange ? "text-white" : ""}`}
              />
            </Link>
            <Link to="/aboutus">
              <ButtonHeader
                btn="SOBRE NÓS"
                btnChangeTheme={`${themeChange ? "text-white" : ""}`}
              />
            </Link>
            {userIsLoggedIn && (
              <span
                className={`text-[#535456] text-base flex z-[4] font-[#717171] font-Overpass font-semibold ${
                  themeChange ? "text-white" : ""
                }`}
              >
                LOGADO COMO {userLoggedInEmail.toUpperCase()}
              </span>
            )}
            {userIsLoggedIn ? (
              <Logout
                className={`text-[#535456] text-base flex z-[4] font-[#717171] hover:text-orange-500 font-Overpass font-semibold ${
                  themeChange ? "text-white" : ""
                }`}
              />
            ) : (
              <Link to="/login">
                <ButtonHeader
                  btn="REGISTRAR/ENTRAR"
                  btnChangeTheme={`${themeChange ? "text-white" : ""}`}
                />
              </Link>
            )}
          </div>

          <button
            className="w-6 h-6 z-[2] absolute right-0 w1024:left-0 "
            onClick={themeButton}
          >
            <img src={`${themeChange ? sun : moon}`} alt="" />
          </button>

          <button
            className="w-6 h-10 z-[2] absolute right-0 hidden w1024:block"
            onClick={toggleMenu}
          >
            <img
              src={`${isOpen ? close : hamburguer}`}
              alt=""
              className={`bg-transparent ${themeChange ? style.menuIcon : ""}`}
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className={`fixed h-screen w425:w-[220px] w768:w-[300px] w-[400px] flex flex-col right-0 items-start pl-8  gap-y-8 pt-48 bg-[#fb7442] z-0 opacity-[.90] ${style.animation} text-base font-Overpass font-semibold hidden w1024:flex`}
        >
          <Link to="/contact">
            <button className={`${themeChange ? "text-white" : ""}`}>
              CONTATO
            </button>
          </Link>
          <Link to="/aboutus">
            <button className={`${themeChange ? "text-white" : ""}`}>
              SOBRE NÓS
            </button>
          </Link>
          {userIsLoggedIn && (
            <span
              className={`text-base flex z-[4] font-[#717171] font-Overpass font-semibold ${
                themeChange ? "text-white" : ""
              }`}
            >
              LOGADO COMO {userLoggedInEmail.toUpperCase()}
            </span>
          )}
          {userIsLoggedIn ? (
            <Logout className={`${themeChange ? "text-white" : ""}`} />
          ) : (
            <Link to="/login">
              <button className={`${themeChange ? "text-white" : ""}`}>
                REGISTRAR/ENTRAR
              </button>
            </Link>
          )}
        </div>
      )}
    </main>
  );
}

export default Header;
