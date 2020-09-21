import React from 'react';
import ReactDOM from 'react-dom';

import 'bootswatch/dist/cerulean/bootstrap.min.css';
import './index.css';
import App from './App';
import Rotas from './rotas'


ReactDOM.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>,
  document.getElementById('root')
);

