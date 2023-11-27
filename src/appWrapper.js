import React from 'react';
import ScrollToTop from './ScrollToTop';
import Preloader from './components/preloader';
import './index.css';
import { persister, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useSelector } from 'react-redux';
import App from './App';

const AppWrapper = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <AppContent />
        </PersistGate>
      </Provider>
    </>
  );
};

const AppContent = () => {
  const { loading } = useSelector((state) => state.loading);
  return (
    <>
      <ScrollToTop />
      <App />
      {loading && <Preloader />}
    </>
  );
};

export default AppWrapper;
