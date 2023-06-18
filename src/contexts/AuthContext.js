import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const loginHandler = async (email, password) => {
    setIsLoggedIn(true);
    navigate(location?.state?.from?.pathname);

    try {
      const response = await axios.post("/api/auth/login", {
        email: login.email,
        password: login.password,
      });
      const { encodedToken } = await response.data;
      console.log(await response);
      localStorage.setItem("accessToken", encodedToken);
    } catch (error) {
      console.error(error);
    }
  };
  const accessToken = localStorage.getItem("accessToken");

  const signUpHandler = async () => {
    try {
      const response = await axios.post("/api/auth/signup", {
        firstname: login.firstname,
        lastname: login.lastname,
        email: login.email,
        password: login.password,
      });
      console.log(response);
      localStorage.setItem("accessToken", response.data.encodedToken);
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
        accessToken,
        signUpHandler,
      }}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
