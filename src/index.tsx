import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import './global.css';
import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY || ''}
    language="pt-BR"
  >
    <Routes />
  </GoogleReCaptchaProvider>
);
