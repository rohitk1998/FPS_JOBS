import { createSlice } from '@reduxjs/toolkit';
import { registerNewUser } from '../thunk/auth.thunk';

const initialState  = {
  registerObj : {},
  userToken : ''
};

const authSlice  = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setRegisterObj : (state , action ) => {
      state.registerObj  = action.payload
    },
    setUserToken : (state, action ) => {
      state.userToken = action.payload
    },
  }
});

export const { setRegisterObj,setOtpVerified,setCountryList,setUserToken } = authSlice.actions;
export default authSlice.reducer;
