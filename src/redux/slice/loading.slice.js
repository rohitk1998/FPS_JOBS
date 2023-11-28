import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading  : false
};

export const slice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading : (state, action) => {
      console.log("setLoading",action.payload);
      state.loading = action.payload
    }
  },
});

export const { setLoading } = slice.actions;

export default slice.reducer;
