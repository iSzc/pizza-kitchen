import React, { useEffect, useState } from "react";
import { useApp } from "../AppContext";
import Header from "../Header/Header";
import { createUserWithEmailAndPassword } from "firebase/auth";
import style from "../style.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import eye from "../../assets/images/eye.svg";
import eyeOff from "../../assets/images/eye-off.svg";
import usePasswordToggle from "../Hook/passwordToggle";

function CreateAccount() {
  const { themeChange, setThemeChange, auth } = useApp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordErrorVisible, setPasswordErrorVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [accConfirmation, setAccConfirmation] = useState(false);
  const [visiblePassword, showPassword, togglePasswordVisibility] =
    usePasswordToggle("password");

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (password !== confirmPassword) {
      setPasswordErrorVisible(false);
    } else {
      setPasswordErrorVisible(true);
    }
  }, [password, confirmPassword]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const isFormValid = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailPattern.test(email) && password.trim() !== "";
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      if (password === confirmPassword) {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          setAccConfirmation(true);

          setTimeout(() => {
            window.location.href = "/login";
          }, 1000);
        } catch (error) {
          if (password.length <= 5) {
            alert("A senha precisa conter pelo menos 6 caracteres válidos.");
          } else {
            alert("Este email já esta em uso.");
            console.error("falha ao criar:", error);
          }
        }
      }
    }
  };

  return (
    <main className={`${themeChange ? "bg-darkTheme" : "bg-white"} h-screen `}>
      <Header themeChange={themeChange} setThemeChange={setThemeChange} />
      <section
        className={`z-[0] w-screen absolute  ${
          themeChange ? "bg-darkTheme" : "bg-white"
        } z-[-1] flex flex-col w1280:justify-center items-center`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full mt-64 flex flex-col gap-y-8"
        >
          <div className="w-full flex justify-center">
            <span
              className={`text-center font-Overpass text-3xl font-semibold ${
                themeChange ? "text-white" : "text-black"
              }`}
            >
              CRIAR
            </span>
          </div>
          <motion.form
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            onSubmit={handleFormSubmit}
            className="w600:w-full flex justify-center"
          >
            <fieldset className="px-2 w600:w-full w-[600px]">
              <div
                className={`flex items-center border-4 border-transparent relative  ${
                  themeChange ? "border-[#121417]" : ""
                } ${
                  focusedField === "email"
                    ? "border-dashed border-4 rounded dark:border-[#fb7a1e]"
                    : ""
                }`}
              >
                <label
                  htmlFor="email"
                  className={`absolute px-2 ml-4 text-[#fb7a1e] font-semibold ${
                    themeChange ? "bg-darkTheme" : "bg-white"
                  } ${
                    focusedField === "email" || email !== ""
                      ? style.allAnimation
                      : style.reverseEmailAnimation
                  }
                

                `}
                >
                  Email:
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  className={`w-full rounded border-2 h-14 pl-4 ${
                    themeChange
                      ? "bg-darkTheme border-white text-white"
                      : "border-black"
                  }`}
                />
              </div>

              <div
                className={`flex items-center border-4 border-transparent mt-5 relative ${
                  themeChange ? "border-[#121417]" : ""
                } ${
                  focusedField === "password"
                    ? "border-dashed border-4 rounded dark:border-[#fb7a1e]"
                    : ""
                }`}
              >
                <label
                  htmlFor="password"
                  className={`absolute px-2 ml-4 text-[#fb7a1e] font-semibold ${
                    themeChange ? "bg-darkTheme" : "bg-white"
                  } ${
                    focusedField === "password" || password !== ""
                      ? style.allAnimation
                      : style.reverseEmailAnimation
                  }`}
                >
                  Senha:
                </label>
                <input
                  id="password"
                  type={visiblePassword}
                  value={password}
                  required
                  onChange={handlePasswordChange}
                  onFocus={() => handleFocus("password")}
                  onBlur={handleBlur}
                  className={`w-full rounded border-2 h-14 pl-4 ${
                    themeChange
                      ? "bg-darkTheme border-white text-white"
                      : "border-black"
                  }`}
                />
                <img
                  onClick={togglePasswordVisibility}
                  src={`
                    
                    ${showPassword ? eye : eyeOff}`}
                  alt=""
                  className={`${
                    themeChange ? style.imgFooter : ""
                  } absolute text-white right-3 cursor-pointer`}
                />
              </div>
              <div
                className={`flex items-center border-4 border-transparent mt-5 relative ${
                  themeChange ? "border-[#121417]" : ""
                } ${
                  focusedField === "confirmPassword"
                    ? "border-dashed border-4 rounded dark:border-[#fb7a1e]"
                    : ""
                }`}
              >
                <label
                  htmlFor="confirmPassword"
                  className={`absolute px-2 ml-4 text-[#fb7a1e] font-semibold ${
                    themeChange ? "bg-darkTheme" : "bg-white"
                  } ${
                    focusedField === "confirmPassword" || confirmPassword !== ""
                      ? style.allAnimation
                      : style.reverseEmailAnimation
                  }`}
                >
                  Confirme a senha:
                </label>
                <input
                  id="confirmPassword"
                  type={visiblePassword}
                  value={confirmPassword}
                  required
                  onChange={handlePasswordConfirmChange}
                  onFocus={() => handleFocus("confirmPassword")}
                  onBlur={handleBlur}
                  className={`w-full rounded border-2 h-14 pl-4 ${
                    themeChange
                      ? "bg-darkTheme border-white text-white"
                      : "border-black"
                  }`}
                />
              </div>
              {!passwordErrorVisible && (
                <span className="text-red-600 font-semibold">
                  SENHAS NÃO CONFEREM
                </span>
              )}
              <div className="mt-10 flex justify-center">
                <button
                  className={`w-32 h-10 rounded bg-[#fb7413] cursor-pointer hover:bg-black hover:text-[#fb7413] ${
                    themeChange ? "hover:bg-white" : ""
                  }`}
                  type="submit"
                >
                  Criar
                </button>
              </div>
            </fieldset>
          </motion.form>

          <div className="flex flex-col items-center gap-y-4">
            <span className="flex w425:flex-col">
              <p className={`${themeChange ? "text-white" : ""}`}>
                Esqueceu sua senha?
              </p>
              <Link to="/recover">
                <button
                  href=""
                  className={`cursor-pointer text-[#fb7413] text-lg tracking-[1px] ml-2 mb-4 ${
                    themeChange ? "hover:text-white" : "hover:text-black"
                  }`}
                >
                  Recupere aqui
                </button>
              </Link>
            </span>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default CreateAccount;
