import React from "react";
import JobSec1 from "../components/jobs/JobSec1";
import dataJobs from "../assets/fakeData/dataJobs";
import FormSearch from "../components/formsearch";
import {Layout} from '../components/Layout/index'
function Joblist(props) {
  return (
    <Layout>
      <FormSearch />
      <JobSec1 data={dataJobs} />
    </Layout>
  );
}

export default Joblist;
