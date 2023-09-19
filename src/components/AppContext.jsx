import React, { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [themeChange, setThemeChange] = useState(false);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyDXvUYtX9kJQTuxVbC_i8-QoV1OGQuorPw",
    authDomain: "pizzakitchen-a7680.firebaseapp.com",
    projectId: "pizzakitchen-a7680",
    storageBucket: "pizzakitchen-a7680.appspot.com",
    messagingSenderId: "449187163179",
    appId: "1:449187163179:web:f8e50e947969d4fdb80e6e",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setThemeChange(true);
    }

    const savedUserIsLoggedIn = localStorage.getItem("userIsLoggedIn");
    if (savedUserIsLoggedIn === "true") {
      setUserIsLoggedIn(true);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        themeChange,
        setThemeChange,
        userIsLoggedIn,
        setUserIsLoggedIn,
        auth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
