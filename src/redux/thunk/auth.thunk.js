import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiHandler } from '../../services/api';
import { signup, verificationOtp } from '../../services/api/constants';
import {
  setIsOtpVerified,
  setIsUserRegistered,
  setRegistredMobileOrEmail,
  setUserToken,
} from '../slice/auth.slice';
import { setToast } from '../slice/toast.slice';

const userBaseUrl = process.env.REACT_APP_API_URL;

export const loginUser = createAsyncThunk(
  'authSlice/loginUser',
  async ({ payload }, { dispatch }) => {
    console.log('LOGIN API CALL STARTED', userBaseUrl);
    try {
      const response = await fetch(userBaseUrl + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (data) {
        console.log('DATA IN LOGIN USER', data);
      }
    } catch (error) {
      console.log('ERROR IN LOGIN API', error);
    }
  }
);

export const registerUser = createAsyncThunk(
  'authSlice/registerUser',
  async (data, { dispatch }) => {
    console.log('REGISTER API CALL STARTED', data);
    try {
      const response = await apiHandler(`${signup}`, 'POST', data, true);
      if (response.data.success && response.data.statusCode == 200) {
        console.log('DATA IN REGISTER USER', response.data);
        dispatch(setIsUserRegistered(true));
        dispatch(setRegistredMobileOrEmail(data.mobile));
      }
    } catch (error) {
      console.log("else error ");
      console.log('ERROR IN REGISTER API', error);
      dispatch(setToast({
        message: error.data,
        success: false,
        error: true,
      }))
    }
  }
);

export const verifyRegisterOtp = createAsyncThunk(
  'authSlice/verifyRegisterOtp',
  async (data, { dispatch }) => {
    console.log('REGISTER API CALL STARTED', data);
    try {
      const response = await apiHandler(`${verificationOtp}`, 'POST', data);
      if (response.data.success && response.data.statusCode == 200) {
      console.log('DATA IN VERIFY OTP USER', response.data);
      dispatch(setIsOtpVerified(true));
      dispatch(setUserToken(true));
      }
    } catch (error) {
      console.log('ERROR IN  VERIFY OTP API', error);
      dispatch(setToast({
        message: error.data,
        success: false,
        error: true,
      }))
    }
  }
);
