import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import AddMovie from './components/AddMovie';

import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route component={App} path="/" exact />
      <Route component={AddMovie} path="/add-movie" />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);