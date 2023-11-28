import React, { useEffect } from 'react';
import JobSec1 from '../components/jobs/JobSec1';
import dataJobs from '../assets/fakeData/dataJobs';
import FormSearch from '../components/formsearch';
import { Layout } from '../components/Layout/index';
import { useDispatch, useSelector } from 'react-redux';
import { searchJobs } from '../redux/thunk/job.thunk';
import { useLocation } from 'react-router-dom';
function Joblist(props) {
  const { jobs , searchObj } = useSelector((state)=> state.job)
  const dispatch = useDispatch();

  const location = useLocation()
  console.log("state",{ name : location?.state?.name  , keyword : location?.state?.keyword?.value});

  useEffect(() => {
    let data = { name : location?.state?.name  , keyword : location?.state?.keyword?.value}
    dispatch(searchJobs(data));
  }, []);

  console.log("jobs",jobs);

  return (
    <Layout>
      <FormSearch />
      <JobSec1 data={jobs} />
    </Layout>
  );
}

export default Joblist;
