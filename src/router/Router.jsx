import { createBrowserRouter } from "react-router-dom";
import { Account } from "../pages/Account/Account";
import { Category } from "../pages/Category/Category";
import { Dashboard } from "../pages/Dashboard/Dashboard";
const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/account", element: <Account /> },
  { path: "/categories", element: <Category /> },

]);
export default router;
