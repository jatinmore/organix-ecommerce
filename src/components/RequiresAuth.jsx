import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const RequiresAuth = ({ children }) => {
  const { isLoggedIn, accessToken } = useAuth();
  const location = useLocation();

  return isLoggedIn && accessToken ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
