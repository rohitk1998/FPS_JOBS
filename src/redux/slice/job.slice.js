import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs : [],
  searchObj : {
    name : '' , 
    keyword : ''
  } , 
  jobLocations : []
};

export const slice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setJobs : (state, action) => {
      console.log("setJobs",action.payload);
      state.jobs = action.payload
    },
    setSearchObj : (state, action) => {
        console.log("subjects",action.payload);
        state.searchObj = action.payload
      },
      setJobLocations : (state , action)=>{
        state.jobLocations = action.payload
      }
  },
});

export const { setJobs,setSearchObj,setJobLocations } = slice.actions;

export default slice.reducer;
