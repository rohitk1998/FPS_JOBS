import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userToken: false,
  registredMobileOrEmail:'',
  isUserRegistered: false,
  isOtpVerified: false,
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
    setRegistredMobileOrEmail : (state,action) => {
      state.registredMobileOrEmail = action.payload
    }
  },
});

export const { setUserToken, setIsUserRegistered, setIsOtpVerified,setRegistredMobileOrEmail } =
  authSlice.actions;
export default authSlice.reducer;
