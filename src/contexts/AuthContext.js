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
            localStorage.setItem("accessToken", encodedToken);
            toast.success(`Login Successful, Hi ${response.data.foundUser.firstName}`, {
                autoClose: 1000
            })
        } catch (error) {
            console.error(error);
            toast.error("Something Went Wrong");
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
            localStorage.setItem("accessToken", response.data.encodedToken);
            toast.success(`Welcome to Organix ${response.data.foundUser.firstName}`, {
                autoClose: 1000
            });
        } catch (error) {
            console.error(error);
            toast.error("Something Went Wrong");
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