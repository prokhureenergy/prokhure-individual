import { createBrowserRouter } from "react-router-dom";
import { Account } from "../pages/Account/Account";
const router = createBrowserRouter([
    {path: "/",
        element: <Account/>
    }
]);
export default router;