import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
  const tokenData = useSelector((state) => state.userState.user?.tokenDetail);

  if (!tokenData) {
    return <Navigate to="/" />;
  }

  return children;
};
