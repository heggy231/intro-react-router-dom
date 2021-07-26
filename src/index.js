import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import AddMovie from './components/AddMovie';
import BaseLayout from './components/BaseLayout';

import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Route component={App} path="/" exact />
        <Route component={AddMovie} path="/add-movie" />
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);