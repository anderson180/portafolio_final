import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// necesitamos que 18nextProvider englobe todo nuestro proyecto para que pueda ser traducido
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <HashRouter>
        <App />
      </HashRouter>
    </I18nextProvider>
  </React.StrictMode>,
);
