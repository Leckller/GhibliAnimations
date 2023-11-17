import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import FilmsProvider from './context/FilmsProvider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <FilmsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilmsProvider>
  </React.StrictMode>,
);
