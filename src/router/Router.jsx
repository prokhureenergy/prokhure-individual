import { createBrowserRouter } from "react-router-dom";
import { Account } from "../pages/Account/Account";
import { Category } from "../pages/Category/Category";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { CreateAccount } from "../pages/Onboarding/CreateAccount";
import { Login } from "../pages/Onboarding/Login";
import { ResetPassword } from "../pages/Onboarding/ResetPassword";
const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  {path: "/signup", element: <CreateAccount/>},
  {path:"/signin", element:<Login/>},
  {path: "/reset", element:<ResetPassword/>}
]);
export default router;
