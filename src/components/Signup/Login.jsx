import React, { useState, useEffect } from "react";
import { useApp } from "../AppContext";
import Header from "../Header/Header";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import style from "../style.module.css";

function Login() {
  const { themeChange, setThemeChange, auth } = useApp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");

    if (userEmail) {
      setEmail(userEmail);
    }
  }, []);

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isFormValid = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailPattern.test(email) && password.trim() !== "";
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      console.error("Por favor, preencha email e senha válidos");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userIsLoggedIn", "true");
      setTimeout(() => {
        window.location.href = "/";
      }, 600);
    } catch (error) {
      alert("Email ou senha incorretos.");
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <main className={`${themeChange ? "bg-[#121417]" : "bg-white"} h-screen `}>
      <Header themeChange={themeChange} setThemeChange={setThemeChange} />
      <section
        className={`z-[0] w-screen absolute  ${
          themeChange ? "bg-[#121417]" : "bg-white"
        } z-[-1] flex flex-col w1280:justify-center items-center`}
      >
        <div className="w-full mt-64 flex flex-col gap-y-8">
          <div className="w-full flex justify-center">
            <span
              className={`text-center font-Overpass text-3xl font-semibold ${
                themeChange ? "text-white" : "text-black"
              }`}
            >
              ENTRAR
            </span>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className="w600:w-full flex justify-center"
          >
            <fieldset className="px-2 w600:w-full w-[600px]">
              <div
                className={`flex items-center border-4 border-transparent  ${
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
                    themeChange ? "bg-[#121417]" : "bg-white"
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
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  className={`w-full rounded border-2 h-14 pl-4 ${
                    themeChange
                      ? "bg-[#121417] border-white text-white"
                      : "border-black"
                  }`}
                />
              </div>

              <div
                className={`flex items-center border-4 border-transparent mt-5 ${
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
                    themeChange ? "bg-[#121417]" : "bg-white"
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
                  type="password"
                  value={password}
                  required
                  onChange={handlePasswordChange}
                  onFocus={() => handleFocus("password")}
                  onBlur={handleBlur}
                  className={`w-full rounded border-2 h-14 pl-4 ${
                    themeChange
                      ? "bg-[#121417] border-white text-white"
                      : "border-black"
                  }`}
                />
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  className={`w-32 h-10 rounded bg-[#fb7413] cursor-pointer hover:bg-black hover:text-[#fb7413] ${
                    themeChange ? "hover:bg-white" : ""
                  }`}
                  type="submit"
                >
                  Entrar
                </button>
              </div>
            </fieldset>
          </form>

          <div className="flex flex-col items-center gap-y-4">
            <span>
              <Link to="/recover">
                <button
                  href=""
                  className={`cursor-pointer text-[#fb7413] text-lg tracking-[1px] ${
                    themeChange ? "hover:text-white" : "hover:text-black"
                  }`}
                >
                  Esqueceu sua senha?
                </button>
              </Link>
            </span>

            <span className="flex w425:flex-col w425:items-center ">
              <p className={`${themeChange ? "text-white" : ""}`}>
                Ainda não tem uma conta?
              </p>
              <Link to="/createacc">
                <button
                  href=""
                  className={`cursor-pointer text-[#fb7413] text-lg tracking-[1px] ml-2 mb-4 ${
                    themeChange ? "hover:text-white" : "hover:text-black"
                  }`}
                >
                  Registre-se aqui
                </button>
              </Link>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
