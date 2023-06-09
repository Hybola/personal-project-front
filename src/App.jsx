import Router from "./routes/Router";
import { ToastContainer, toast } from "react-toastify";


function App() {
  return (
    <div>
      <Router />
      <ToastContainer position="bottom-center" theme="dark" autoClose={4000} />
    </div>
  );
}

export default App;
