import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import AddMovie from './components/AddMovie';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route component={App} path="/" exact />
      <Route component={AddMovie} path="/movie" exact />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);