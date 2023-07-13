import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./contexts/authContext";
import MenuContextProvider from "./contexts/menuContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <MenuContextProvider>
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
      </MenuContextProvider>
  </React.StrictMode>
);
