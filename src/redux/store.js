import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/auth.slice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import toastSlice from './slice/toast.slice';
import appSlice from './slice/app.slice';
import jobSlice from './slice/job.slice';
import loadingSlice from './slice/loading.slice';
// import persistStore from 'redux-persist/es/persistStore';

const reducers = combineReducers({
  auth: authSlice,
  toast: toastSlice,
  app : appSlice,
  job : jobSlice,
  loading : loadingSlice
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const getState = () => store.getState();

export const persister = persistStore(store);
