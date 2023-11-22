import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export function PublicRoute() { 
  const { userToken } = useSelector((state) => state.auth )

  return !userToken  ? (
        <Outlet/>
  ) : (
    <Navigate to={"/"} />
  );
}
