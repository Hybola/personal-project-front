import { useAuth } from "../../../contexts/authContext";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuthenticated({ children }) {
    const {user}=useAuth();
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
}
