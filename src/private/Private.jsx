import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import Loading from "../components/loading/Loading";

const Private = ({ children }) => {
  const { user, loading } = useContext(authContext);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default Private;
