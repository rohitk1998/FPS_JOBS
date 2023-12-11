import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiHandler } from '../../services/api';
import { singleJobDetail,jobsList } from '../../services/api/constants';
import { setToast } from '../slice/toast.slice';
import { setIsSuccess, setJobs, setSingleJob } from '../slice/job.slice';
import { setLoading } from '../slice/loading.slice';

export const searchJobs = createAsyncThunk(
  'jobSlice/searchJobs',
  async (data, { dispatch }) => {
    console.log('searchJobs CALL STARTED', data);
    // dispatch(setLoading(true));
    try {
      const response = await apiHandler(`${jobsList}`, 'POST', data);
      console.log('DATA IN searchJobs', response);
      if (response.data.status == 'success') {
        dispatch(setJobs(response.data.jobs));
        // dispatch(setLoading(false));
      }
      else{
        dispatch(setJobs([]));
        // dispatch(setLoading(false));
      }
    } catch (error) {
      // dispatch(setLoading(false));
      console.log('else error ');
      console.log('ERROR IN searchJobs', error);
      dispatch(
        setToast({
          message: error.data,
          success: false,
          error: true,
        })
      );
    }
  }
);

export const singleJob = createAsyncThunk(
  'jobSlice/singleJob',
  async (data, { dispatch }) => {
    console.log('singleJob CALL STARTED', data);
    dispatch(setLoading(true));
    try {
      const response = await apiHandler(`${singleJobDetail}?UID=${65534}&jobID=${data.jobId}`, 'GET');
      console.log('DATA IN singleJob', response);
      if (response.data.status == 'success') {
        dispatch(setSingleJob(response.data.job));
        dispatch(setIsSuccess(true));
        dispatch(setLoading(false));
      }
      else{
        dispatch(setSingleJob({}));
        dispatch(setIsSuccess(false));
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setIsSuccess(false));
      console.log('else error ');
      console.log('ERROR IN singleJob', error);
      dispatch(
        setToast({
          message: error.data,
          success: false,
          error: true,
        })
      );
    }
  }
);
