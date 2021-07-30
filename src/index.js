import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route component={App} path="/foo" />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);