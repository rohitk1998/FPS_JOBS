import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories : [] , 
  subjects : [] , 
  featuredJobs : []
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
      },
      setfeaturedJobs : (state, action) => {
        console.log("setfeaturedJobs",action.payload);
        state.featuredJobs = action.payload
      }
  },
});

export const { setCategories,setSubjects,setfeaturedJobs } = slice.actions;

export default slice.reducer;
