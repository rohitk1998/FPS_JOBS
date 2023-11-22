import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  success : false , 
  error : false , 
  message : ''
};

export const slice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToast : (state, action) => {
      console.log("action.payload",action.payload);
      state.success = action.payload.success
      state.error = action.payload.error
      state.message = action.payload.message
    }
  },
});

export const { setToast } = slice.actions;

export default slice.reducer;
