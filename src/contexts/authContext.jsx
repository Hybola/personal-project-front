import { createContext, useState, useContext, useEffect } from "react";
import * as authApi from "../api/auth-api";
import { getPosToken, removePosToken } from "../utils/localStorage";
import { useMenu } from "../contexts/menuContext";

const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [user, setUser] = useState(null);
  const { setAllMenu } = useMenu();

  const fetchMe = async () => {
    try {
      const res = await authApi.fetchMe();
      setUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let token = getPosToken();
    if (!token) return;
    fetchMe();
  }, []);

  const setUserData = (value) => {
    setUser(value);
  };

  const logout = () => {
    removePosToken();
    setUser(null);
    setAllMenu([]);
  };
  return (
    <AuthContext.Provider value={{ user, setUserData, logout, fetchMe }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
