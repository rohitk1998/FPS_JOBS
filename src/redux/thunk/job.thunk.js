import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiHandler } from '../../services/api';
import { jobsList } from '../../services/api/constants';
import { setToast } from '../slice/toast.slice';
import { setJobs } from '../slice/job.slice';
import { setLoading } from '../slice/loading.slice';

export const searchJobs = createAsyncThunk(
  'jobSlice/searchJobs',
  async (data, { dispatch }) => {
    console.log('searchJobs CALL STARTED', data);
    dispatch(setLoading(true));
    try {
      const response = await apiHandler(`${jobsList}`, 'POST', data);
      console.log('DATA IN searchJobs', response);
      if (response.data.status == 'success') {
        dispatch(setJobs(response.data.jobs));
        dispatch(setLoading(false));
      }
      else{
        dispatch(setJobs([]));
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));
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
