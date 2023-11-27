import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userToken: false,
  registredMobileOrEmail: '',
  isUserRegistered: false,
  isOtpVerified: false,
  isUserEmailOrPhoneVerified: false,
  isUserLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
    setIsUserRegistered: (state, action) => {
      state.isUserRegistered = action.payload;
    },
    setIsOtpVerified: (state, action) => {
      state.isOtpVerified = action.payload;
    },
    setRegistredMobileOrEmail: (state, action) => {
      state.registredMobileOrEmail = action.payload;
    },
    setIsUserEmailOrPhoneVerified: (state, action) => {
      state.isUserEmailOrPhoneVerified = action.payload;
    },
    setIsUserLogin: (state, action) => {
      state.isUserLogin = action.payload;
    },
  },
});

export const {
  setUserToken,
  setIsUserRegistered,
  setIsOtpVerified,
  setRegistredMobileOrEmail,
  setIsUserEmailOrPhoneVerified,
  setIsUserLogin,
} = authSlice.actions;
export default authSlice.reducer;
