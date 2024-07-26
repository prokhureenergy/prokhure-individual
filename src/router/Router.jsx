import { createBrowserRouter } from "react-router-dom";
import { Account } from "../pages/Account/Account";
import { Category } from "../pages/Category/Category";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { CreateAccount } from "../pages/Onboarding/CreateAccount";
const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  {path: "/signup", element: <CreateAccount/>}
]);
export default router;
