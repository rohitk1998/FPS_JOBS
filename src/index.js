import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CMSContext } from './context';
import AppWrapper from './appWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CMSContext>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </CMSContext>
);
