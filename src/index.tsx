import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(<Routes />);
