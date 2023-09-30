import React, { useState, useEffect } from "react";
import { useApp } from "../../AppContext";
import style from "../../style.module.css";
import { motion } from "framer-motion";

function ContactForm({ setShowPopup, setNameValue }) {
  const { themeChange } = useApp();

  const initialState = {
    inputNameValue: "",
    inputEmailValue: "",
    inputSubjectValue: "",
    inputMessageValue: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      setShowPopup(true);
      setNameValue(formData.inputNameValue);

      setTimeout(() => {
        window.location.href = "/";
      }, 2500);
    }
  };

  const isFormValid = () => {
    const {
      inputNameValue,
      inputEmailValue,
      inputSubjectValue,
      inputMessageValue,
    } = formData;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return (
      inputNameValue &&
      inputEmailValue &&
      inputSubjectValue &&
      inputMessageValue &&
      emailPattern.test(inputEmailValue)
    );
  };

  const renderInput = (fieldName, label) => (
    <div
      className={`flex items-center border-4 border-transparent ${
        themeChange ? "border-[#121417]" : ""
      } ${
        focusedField === fieldName
          ? "border-dashed border-4 rounded dark:border-[#fb7a1e]"
          : ""
      }`}
    >
      <label
        htmlFor={fieldName}
        className={`absolute px-2 ml-4 text-[#fb7a1e] font-semibold ${
          themeChange ? "bg-darkTheme" : "bg-white"
        } ${
          focusedField === fieldName || formData[fieldName] !== ""
            ? style.allAnimation
            : style.reverseEmailAnimation
        }`}
      >
        {label}:
      </label>
      <input
        type={fieldName === "inputEmailValue" ? "email" : "text"}
        id={fieldName}
        name={fieldName}
        value={formData[fieldName]}
        required
        onChange={handleInputChange}
        onFocus={() => handleFocus(fieldName)}
        onBlur={handleBlur}
        className={`w-full rounded border-2 h-14 pl-4 ${
          themeChange ? "bg-darkTheme border-white text-white" : "border-black"
        }`}
      />
    </div>
  );

  return (
    <motion.form
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      onSubmit={handleSubmit}
      className="flex flex-col px-4 w-full mt-6 gap-y-8"
    >
      {renderInput("inputNameValue", "Nome")}
      {renderInput("inputEmailValue", "Email")}
      {renderInput("inputSubjectValue", "Assunto")}
      <div
        className={`flex items-center border-4 border-transparent ${
          themeChange ? "border-[#121417]" : ""
        } ${
          focusedField === "inputMessageValue"
            ? "border-dashed border-4 rounded dark:border-[#fb7a1e]"
            : ""
        }`}
      >
        <label
          htmlFor="message"
          className={`absolute px-2 ml-4 mb-8 text-[#fb7a1e] font-semibold ${
            themeChange ? "bg-darkTheme" : "bg-white"
          } ${
            focusedField === "inputMessageValue" ||
            formData.inputMessageValue !== ""
              ? style.message
              : style.reverseAnimationMessage
          }`}
        >
          Mensagem:
        </label>
        <textarea
          id="message"
          name="inputMessageValue"
          value={formData.inputMessageValue}
          onChange={handleInputChange}
          required
          rows={3}
          onFocus={() => handleFocus("inputMessageValue")}
          onBlur={handleBlur}
          className={`w-full rounded border-2 pl-4 pt-3 resize-none ${
            themeChange
              ? "bg-darkTheme border-white text-white"
              : "border-black"
          }`}
        />
      </div>
      <div className="flex w640:justify-center">
        <button
          className={`w-32 h-10 rounded bg-[#fb7413] cursor-pointer hover:bg-black hover:text-[#fb7413] ${
            themeChange ? "hover:bg-white" : ""
          }`}
          type="submit"
        >
          Enviar
        </button>
      </div>
    </motion.form>
  );
}

export default ContactForm;
