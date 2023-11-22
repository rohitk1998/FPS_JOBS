import React from 'react';
import Gotop from '../components/gotop';
import SignUp from '../components/signUp';
import { Layout } from '../components/Layout';
import { useSelector } from 'react-redux';
import { VerifyOtp } from '../components/signUp/verifyOtp';

function CreateAccount() {
  const { isUserRegistered } = useSelector((state) => state.auth);
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
