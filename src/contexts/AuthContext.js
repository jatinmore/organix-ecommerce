import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const loginHandler = () => {
    setIsLoggedIn(true);
    navigate(location?.state?.from?.pathname);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, loginHandler }}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
