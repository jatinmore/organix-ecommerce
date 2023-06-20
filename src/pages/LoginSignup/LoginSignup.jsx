import { useState } from "react";
import "./LoginSIgnup.css";
import { useAuth } from "../../contexts/AuthContext";
export const Login = () => {
  const [isContainerActive, setIsContainerActive] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  const signUpButton = () => {
    setIsContainerActive(true);
  };
  const signInButton = () => {
    setIsContainerActive(false);
  };
  const { loginHandler, signUpHandler } = useAuth();
  const submitHandler = (event) => {
    event.preventDefault();
    loginHandler(login.email, login.password);
    setLogin({ email: "", password: "" });
  };

  const testLogin = (e) => {
    e.preventDefault();
    loginHandler("abc", "1234");
    setLogin({ email: "", password: "" });
  };
  const submitSignup = (event) => {
    event.preventDefault();
    signUpHandler(login.firstname, login.lastname, login.email, login.password);
  };
  return (
    <div className="body">
      <div
        id="login-container"
        className={`login-container ${
          isContainerActive ? " right-panel-active" : " "
        }`}>
        <div className="form-container sign-up-container">
          <form onSubmit={submitSignup}>
            <h1>Create Account</h1>
            <p>or use your email for registration</p>{" "}
            <input
              type="text"
              className="input-field outline"
              placeholder="Enter First Name"
              required
              onChange={(e) =>
                setLogin((form) => ({ ...form, firstname: e.target.value }))
              }
            />
            <input
              type="text"
              className="input-field outline"
              placeholder="Enter Last Name"
              required
              onChange={(e) =>
                setLogin((form) => ({ ...form, lastname: e.target.value }))
              }
            />
            <input
              type="text"
              className="input-field outline"
              placeholder="Enter Email"
              required
              onChange={(e) =>
                setLogin((form) => ({ ...form, email: e.target.value }))
              }
            />
            <input
              type="password"
              className="input-field outline"
              placeholder="Password"
              required
              onChange={(e) =>
                setLogin((form) => ({ ...form, password: e.target.value }))
              }
            />
            <input
              type="password"
              className="input-field outline"
              placeholder="Retype Password"
              required
            />
            <button type="submit" className="btn dark">
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={submitHandler}>
            <h1>Login</h1>
            <p>new to organix? create account</p>
            <input
              type="text"
              className="input-field outline"
              placeholder="Enter Email"
              value={login.email}
              required
              onChange={(e) => setLogin({ email: e.target.value })}
            />
            <input
              type="password"
              className="input-field outline"
              placeholder="Enter Password"
              value={login.password}
              required
              onChange={(e) =>
                setLogin((form) => ({ ...form, password: e.target.value }))
              }
            />
            <span>Forgot password?</span>
            <button type="submit" className="btn dark">
              Login
            </button>
            <button onClick={testLogin} type="submit" className="btn dark">
              Login With Test Creds
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome to Organix</h1>
              <p>
                Please login with your personal information to stay connected
                with us.
              </p>
              <button
                className="btn dark btn-round"
                id="signIn"
                onClick={signInButton}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Greetings!</h1>
              <p>Enter your Credintials and Shop Today</p>
              <button
                className="btn dark btn-round"
                id="signUp"
                onClick={signUpButton}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
