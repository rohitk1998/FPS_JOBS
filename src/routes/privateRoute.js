import { Navigate, Outlet } from "react-router-dom";
import  { useSelector } from "react-redux"

export function PrivateRoute() {
  const { userToken } = useSelector((state) => state.auth )

  return userToken ? (
      <Outlet />
  ) : (
    <Navigate to="/" />
  );
}