import React, { useEffect } from 'react';
import Gotop from '../components/gotop';
import SignUp from '../components/signUp';
import { Layout } from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { VerifyOtp } from '../components/signUp/verifyOtp';
import { setIsUserRegistered } from '../redux/slice/auth.slice';

function CreateAccount() {
  const { isUserRegistered } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsUserRegistered(false));
  }, []);

  return (
    <>
      <Layout>
        {(() => (!isUserRegistered ? <SignUp /> : <VerifyOtp />))()}
      </Layout>
      <Gotop />
    </>
  );
}

export default CreateAccount;
