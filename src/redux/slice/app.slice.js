import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories : [] , 
  subjects : []
};

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCategories : (state, action) => {
      console.log("categories",action.payload);
      state.categories = action.payload
    },
    setSubjects : (state, action) => {
        console.log("subjects",action.payload);
        state.subjects = action.payload
      }
  },
});

export const { setCategories,setSubjects } = slice.actions;

export default slice.reducer;
