import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../layout/Container";
import LoginPage from "../pages/LoginPage";
import MenuPage from "../pages/MenuPage";
import OrderPage from "../pages/OrderPage";
import ProfilePage from "../pages/ProfilePage";
import SetUpPage from "../pages/SetUpPage";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Container />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <MenuPage />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
      {
        path: "setup",
        element: <SetUpPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
