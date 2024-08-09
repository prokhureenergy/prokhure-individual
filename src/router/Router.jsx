import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { CreateAccount } from "../pages/Onboarding/CreateAccount";
import { Login } from "../pages/Onboarding/Login";
import { ResetPassword } from "../pages/Onboarding/ResetPassword";
import { VerificationForm } from "../pages/Onboarding/VerificationForm";
import { WebsiteDashboard } from "../pages/Website/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";
import { Product } from "../pages/Website/Product";
import { Cart } from "../pages/Website/Cart";
import { WebsiteSharedLayout } from "../components/Shared/WebsiteSharedLayout";
import { OrderSuccess } from "../components/Website/OrderSuccess";
import { Checkout } from "../pages/Website/Checkout";
import { Shop } from "../pages/Website/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteSharedLayout />,

    children: [
      {
        path: "/",
        element: <WebsiteDashboard />,
      },
      { path: "/product", element: <Product /> },
      { path: "/cart", element: <Cart /> },
      { path: "/success", element: <OrderSuccess /> },
      { path: "/checkout", element: <Checkout /> },
      {path: "/shop", element: <Shop/>}
    ],
  },

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
]);
export default router;
