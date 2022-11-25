import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainRouter } from './router/MainRouter';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </React.StrictMode>
);
