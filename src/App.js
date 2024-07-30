import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import { Provider } from "react-redux";

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
