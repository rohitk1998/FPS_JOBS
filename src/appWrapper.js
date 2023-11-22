import React, { useContext } from 'react';
import ScrollToTop from './ScrollToTop';
import Preloader from './components/preloader';
import { CMSModal } from './context';
import './index.css';
import { persister, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './App';

const AppWrapper = () => {
  const { loading } = useContext(CMSModal);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <ScrollToTop />
          <App />
          {loading && <Preloader />}
        </PersistGate>
      </Provider>
    </>
  );
};

export default AppWrapper;
