import axios from "axios";
import { useState, useContext } from "react";
import { createContext } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const loginHandler = async(email, password) => {
        setIsLoggedIn(true);
        navigate("/");

        try {
            const response = await axios.post("/api/auth/login", {
                email: email,
                password: password,
            });
            const { encodedToken } = await response.data;
            console.log(await response);
            localStorage.setItem("accessToken", encodedToken);
            toast.success("Login Successful !!", {
                position: "top-center",
                autoClose: 2000
            })
        } catch (error) {
            console.error(error);
        }
    };
    const accessToken = localStorage.getItem("accessToken");

    const signUpHandler = async(firstname, lastname, email, password) => {
        try {
            const response = await axios.post("/api/auth/signup", {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
            });
            console.log(response);
            localStorage.setItem("accessToken", response.data.encodedToken);
            toast.success("Account Created");
        } catch (error) {
            console.error(error);
        }
    };
    return ( <
        AuthContext.Provider value = {
            {
                isLoggedIn,
                setIsLoggedIn,
                loginHandler,

                navigate,
                accessToken,
                signUpHandler,
            }
        } > { " " } { children } { " " } <
        /AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};