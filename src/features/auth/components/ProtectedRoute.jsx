import { useAuth } from "../../../contexts/authContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const {user}=useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
