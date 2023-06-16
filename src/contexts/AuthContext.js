import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState({ username: "", password: "" });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const loginHandler = async () => {
    setIsLoggedIn(true);
    console.log(login);
    navigate(location?.state?.from?.pathname);

    try {
      const response = await axios.post("/api/auth/login", {
        email: login.username,
        password: login.password,
      });
      const { encodedToken } = await response.data;
      console.log(await response);
      localStorage.setItem("accessToken", encodedToken);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        loginHandler,
        login,
        setLogin,
        navigate,
      }}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
