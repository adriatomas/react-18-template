import ReactDOM from 'react-dom/client';
import React from "react";
import './../stylesheets/global.scss';
import App from './app';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

