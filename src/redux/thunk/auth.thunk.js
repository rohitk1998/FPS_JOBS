import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiHandler } from '../../services/api';
import { login, signup, verificationOtp } from '../../services/api/constants';
import {
  setIsOtpVerified,
  setIsUserLogin,
  setIsUserRegistered,
  setRegistredMobileOrEmail,
  setUserToken,
} from '../slice/auth.slice';
import { setToast } from '../slice/toast.slice';
import { setLoading } from '../slice/loading.slice';

const userBaseUrl = process.env.REACT_APP_API_URL;

export const loginUser = createAsyncThunk(
  'authSlice/loginUser',
  async (data, { dispatch }) => {
    dispatch(setLoading(true))
    console.log('LOGIN API CALL STARTED', userBaseUrl);
    try {
      const response = await apiHandler(`${login}`, 'POST', data, true);
      console.log('DATA IN LOGIN', response.data);
      if (response.data.success && response.data.statusCode == 200) {
        if (typeof response.data.data == 'object') {
          dispatch(setLoading(false))
          dispatch(setUserToken(true));
        } else {
          dispatch(setLoading(false))
          dispatch(setIsUserLogin(true));
          dispatch(setRegistredMobileOrEmail(true));
        }
        dispatch(
          setToast({
            message: response.data.message,
            success: true,
            error: false,
          })
        );
      }
    } catch (error) {
      dispatch(setLoading(false))
      console.log('ERROR IN LOGIN API', error);
      dispatch(
        setToast({
          message: error.message,
          success: false,
          error: true,
        })
      );
    }
  }
);

export const registerUser = createAsyncThunk(
  'authSlice/registerUser',
  async (data, { dispatch }) => {
    dispatch(setLoading(true))
    console.log('REGISTER API CALL STARTED', data);
    try {
      const response = await apiHandler(`${signup}`, 'POST', data, true);
      if (response.data.success && response.data.statusCode == 200) {
        console.log('DATA IN REGISTER USER', response.data);
        dispatch(setLoading(false))
        dispatch(setIsUserRegistered(true));
        dispatch(setRegistredMobileOrEmail(data.mobile));
        dispatch(
          setToast({
            message: response.data.message,
            success: true,
            error: false,
          })
        );
      }
    } catch (error) {
      dispatch(setLoading(false))
      console.log('else error ');
      console.log('ERROR IN REGISTER API', error);
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
      dispatch(
        setToast({
          message: error.message,
          success: false,
          error: true,
        })
      );
    }
  }
);
