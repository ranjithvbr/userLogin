import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Routes from './routes';
import "./font/Titillium_Web/TitilliumWeb-Regular.ttf";
import 'antd/dist/antd.css';
import 'react-phone-input-2/lib/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
