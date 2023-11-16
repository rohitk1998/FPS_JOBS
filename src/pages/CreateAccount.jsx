import React from "react";
import Gotop from "../components/gotop";
import SignUp from "../components/signUp";
import { Layout } from "../components/Layout";

function CreateAccount(props) {
  return (
    <>
      <Layout>
        <SignUp />
      </Layout>
      <Gotop />
    </>
  );
}

export default CreateAccount;
