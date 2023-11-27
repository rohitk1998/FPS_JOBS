import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiHandler } from '../../services/api';
import { categoryList, categorySubject } from '../../services/api/constants';
import { setToast } from '../slice/toast.slice';
import { setCategories, setSubjects } from '../slice/app.slice';

export const getCategories = createAsyncThunk(
  'appSlice/getCategories',
  async (data, { dispatch }) => {
    console.log('getCategories API CALL STARTED', data);
    try {
      const response = await apiHandler(`${categoryList}`, 'POST', data, true);
      if (response.data.success && response.data.statusCode == 200) {
        console.log('DATA IN getCategories', response.data);
        dispatch(setCategories(response.data.data));
        throw response.data.data;
      }
    } catch (error) {
      console.log('else error ');
      console.log('ERROR IN getCategories API', error);
      if (error?.data) {
        dispatch(
          setToast({
            message: error.data,
            success: false,
            error: true,
          })
        );
      }
      throw error;
    }
  }
);

export const getCategorySubjects = createAsyncThunk(
  'appSlice/getCategorySubjects',
  async (data, { dispatch }) => {
    console.log('getCategorySubjects API CALL STARTED', data);
    try {
      const response = await apiHandler(
        `${categorySubject}`,
        'POST',
        data,
        true
      );
      if (response.data.success && response.data.statusCode == 200) {
        console.log('DATA IN getCategorySubjects', response.data);
        dispatch(setSubjects(response.data.data));
        throw response.data.data;
      }
    } catch (error) {
      console.log('else error ');
      console.log('ERROR IN getCategorySubjects API', error);
      if (error?.data) {
        dispatch(
          setToast({
            message: error.data,
            success: false,
            error: true,
          })
        );
      }
      throw error;
    }
  }
);
