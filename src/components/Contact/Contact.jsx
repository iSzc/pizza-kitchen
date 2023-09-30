import { useState } from "react";
import { useApp } from "../AppContext";
import Header from "../Header/Header";
import Footer from "./Footer/Footer";
import ContactForm from "./ContactForm/ContactForm";
import ConfirmationPopup from "./ConfirmationPopup/ConfirmationPopup";
import { motion } from "framer-motion";

function Contact() {
  const { themeChange, setThemeChange } = useApp();
  const [showPopup, setShowPopup] = useState(false);
  const [nameValue, setNameValue] = useState("");

  const [formData, setFormData] = useState({
    inputNameValue: "",
    inputEmailValue: "",
    inputSubjectValue: "",
    inputMessageValue: "",
  });

  return (
    <main className={`${themeChange ? "bg-darkTheme" : "bg-white"} h-screen `}>
      <Header themeChange={themeChange} setThemeChange={setThemeChange} />
      <section
        className={`z-[0] w-screen absolute  ${
          themeChange ? "bg-darkTheme" : "bg-white"
        } z-[-1] flex flex-col w1280:justify-center`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`max-w-[640px] flex flex-col mt-36 self-center `}
        >
          <div className="px-4 flex flex-col">
            <span
              className={`text-3xl w-full w640:text-center font-Overpass font-bold ${
                themeChange ? "text-white" : "text-[#121417] "
              }`}
            >
              ENTRAR EM CONTATO
            </span>
            <span
              className={`mt-6 text-lg w640:text-center  ${
                themeChange ? "text-white" : "text-[#2f1417]"
              } `}
            >
              Tem alguma pergunta ou feedback? Gostaríamos muito de ouvir de
              você!
            </span>
          </div>
          <ContactForm
            formData={formData}
            setNameValue={setNameValue}
            setShowPopup={setShowPopup}
          />
          <ConfirmationPopup
            nameValue={nameValue}
            showPopup={showPopup}
            inputNameValue={formData.inputNameValue}
          />
        </motion.div>
        <Footer />
      </section>
    </main>
  );
}

export default Contact;
