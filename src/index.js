import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import AddMovie from './components/AddMovie';
import BaseLayout from './components/BaseLayout';

import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import MovieDetails from './components/MovieDetails';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route component={App} path="/" exact />
          <Route component={AddMovie} path="/add-movie" />
          <Route component={MovieDetails} path="/movies/:movieId" />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);