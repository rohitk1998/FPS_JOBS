import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export function PublicRoute() {
  const { userToken } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log('PUBLIC', userToken);
  }, [userToken]);

  return !userToken ? <Outlet /> : <Navigate to="/" />;
}
