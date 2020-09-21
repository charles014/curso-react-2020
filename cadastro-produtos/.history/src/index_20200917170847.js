import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-dom'

import 'bootswatch/dist/cerulean/bootstrap.min.css';
import './index.css';
import App from './App';


ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

