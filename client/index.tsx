import React from 'react';
import './index.css';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './views/App';

if (navigator.serviceWorker) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('service-worker.js')
      .then((reg) =>
        console.log('Service Worker Working for scope:', reg.scope)
      )
      .catch((err) => console.log('Service worker is not working', err));
  });
}

hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
