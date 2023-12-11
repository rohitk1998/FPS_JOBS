import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
  searchObj: {
    name: '',
    keyword: '',
  },
  jobLocations: [],
  singleJob: {},
  isSuccess : false , 
};

export const slice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      console.log('setJobs', action.payload);
      state.jobs = action.payload;
    },
    setSearchObj: (state, action) => {
      console.log('subjects', action.payload);
      state.searchObj = action.payload;
    },
    setJobLocations: (state, action) => {
      state.jobLocations = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
  },
});

export const { setJobs, setSearchObj, setJobLocations, setSingleJob,setIsSuccess } =
  slice.actions;

export default slice.reducer;
