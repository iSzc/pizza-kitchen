import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import Header from "../Header/Header";
import { useApp } from "../AppContext";
import { Link } from "react-router-dom";
import style from "../style.module.css";

function Recover() {
  const { themeChange, setThemeChange, auth } = useApp();
  const [email, setEmail] = useState("");
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      setResetEmailSent(true);

      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } catch (error) {
      console.error("erro ao enviar email de recuperação de senha", error);
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
              RECUPERAR SENHA
            </span>
          </div>
          <div>
            {resetEmailSent ? (
              <p
                className={`flex justify-center ${
                  themeChange ? "text-white" : ""
                }`}
              >
                Email de recuperação de senha enviado. Verifica sua caixa de
                entrada
              </p>
            ) : (
              <form
                onSubmit={handleResetPassword}
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
                      }`}
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      className={`w-full rounded border-2 h-14 pl-4 ${
                        themeChange
                          ? "bg-[#121417] border-white text-white"
                          : "border-black"
                      } `}
                    />
                  </div>

                  <div className="mt-8 flex justify-center">
                    <button
                      className={`w-32 h-10 rounded bg-[#fb7413] cursor-pointer hover:bg-black hover:text-[#fb7413] ${
                        themeChange ? "hover:bg-white" : ""
                      }`}
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
                </fieldset>
              </form>
            )}
          </div>

          <span className="flex justify-center">
            <Link to="/login">
              <button
                href=""
                className={`cursor-pointer text-[#fb7413] text-lg tracking-[1px] ml-2 mb-4 ${
                  themeChange ? "hover:text-white" : "hover:text-black"
                }`}
              >
                Voltar ao Login
              </button>
            </Link>
          </span>
        </div>
      </section>
    </main>
  );
}

export default Recover;
