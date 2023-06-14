import { useAuth } from "../../contexts/AuthContext";

export const Login = () => {
  const { loginHandler } = useAuth();
  return (
    <div className="container">
      <h2>Login</h2>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};
