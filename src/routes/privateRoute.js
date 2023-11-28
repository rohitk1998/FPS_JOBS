import { Navigate, Outlet } from "react-router-dom";
import  { useSelector } from "react-redux"
import { useEffect } from "react";

export function PrivateRoute() {
  const { userToken } = useSelector((state) => state.auth )

  useEffect(()=>{ 
  console.log("PRIVATE", userToken);
  },[userToken])

  return userToken ? (
      <Outlet />
  ) : (
    <Navigate to="/" />
  );
}