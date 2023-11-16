import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUserToken } from '../slice/auth.slice';

const userBaseUrl = process.env.REACT_APP_API_URL;

export const loginUser = createAsyncThunk(
  'authSlice/loginUser',
  async ({ payload } , { dispatch }) => {
    console.log("LOGIN API CALL STARTED",userBaseUrl);
    try {
      const response = await fetch(
        userBaseUrl + '/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if(data){
        console.log("DATA IN LOGIN USER" , data);
      }
    }
    catch(error){
      console.log("ERROR IN LOGIN API" , error);
    }
  }
);
