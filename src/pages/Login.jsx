import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../components/Layout";
import SignIn from "../components/signIn";
import { VerifyOtp } from "../components/signUp/verifyOtp";
import { useEffect } from "react";
import { setIsUserLogin } from "../redux/slice/auth.slice";

function Login() {
  const { isUserLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setIsUserLogin(false))
  },[])
  
  return (
    <Layout>
       {(() => (!isUserLogin ? <SignIn /> : <VerifyOtp />))()}
    </Layout>
  );
}

export default Login;
