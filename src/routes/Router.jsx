import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MenuPage from "../pages/MenuPage";
const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      // <RedirectIfAuthenticated>
      <LoginPage />
      // </RedirectIfAuthenticated>
    ),
  },
  {
    path:"/menu",
    element: <MenuPage/>
  }

]);

export default function Router() {
    return <RouterProvider router={router} />;
  }
  