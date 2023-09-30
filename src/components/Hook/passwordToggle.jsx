import { useState } from "react";

function usePasswordToggle(initialType = "password") {
  const [showPassword, setShowPassword] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(initialType);

  const togglePasswordVisibility = () => {
    const newShowPasswordValue = !showPassword;
    setShowPassword(newShowPasswordValue);
    setVisiblePassword(newShowPasswordValue ? "text" : initialType);
  };

  return [visiblePassword, showPassword, togglePasswordVisibility];
}

export default usePasswordToggle;
