import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./contexts/authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
