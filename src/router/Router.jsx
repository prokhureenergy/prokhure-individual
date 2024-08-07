import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { CreateAccount } from "../pages/Onboarding/CreateAccount";
import { Login } from "../pages/Onboarding/Login";
import { ResetPassword } from "../pages/Onboarding/ResetPassword";
import { VerificationForm } from "../pages/Onboarding/VerificationForm";
import { WebsiteDashboard } from "../pages/Website/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";
import { Product } from "../pages/Website/Product";
import { Cart } from "../pages/Cart/Cart";

const router = createBrowserRouter([
  { path: "/", element: <WebsiteDashboard /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  { path: "/signup", element: <CreateAccount /> },
  { path: "/signin", element: <Login /> },
  { path: "/reset", element: <ResetPassword /> },
  { path: "/verify", element: <VerificationForm /> },
  {path: "/product", element: <Product/>},
  {path: "/cart", element:<Cart/>}
]);
export default router;
