import React from "react";
import { useApp } from "../AppContext";
import { signOut } from "firebase/auth";

function Logout(props) {
  const { setUserIsLoggedIn, auth } = useApp();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // localStorage.removeItem("userEmail");
      localStorage.setItem("userIsLoggedIn", "false");
      setUserIsLoggedIn(false);
      window.location.reload();
    } catch (error) {
      console.error("erro ao fazer logout", error);
    }
  };

  return (
    <button onClick={handleLogout} className={props.className}>
      LOGOUT
    </button>
  );
}

export default Logout;
