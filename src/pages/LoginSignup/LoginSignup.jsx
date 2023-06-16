import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export const Login = () => {
  const { loginHandler, setLogin } = useAuth();
  return (
    <div className="container">
      <h2>Login</h2>

      <div>
        <label>
          username:
          <input
            type="text"
            onChange={(e) =>
              setLogin((form) => ({ ...form, username: e.target.value }))
            }
          />
        </label>

        <label>
          password:
          <input
            type="password"
            onChange={(e) =>
              setLogin((form) => ({ ...form, password: e.target.value }))
            }
          />
        </label>
        <button type="submit" onClick={loginHandler}>
          Login
        </button>
      </div>
    </div>
  );
};
