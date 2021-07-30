import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import AddMovie from './components/AddMovie';
import BaseLayout from './components/BaseLayout';
import ContactUs from './components/ContactUs';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     {/* baselayout is web header/main/footer outline */}
      <BaseLayout> 
        <Switch>
          <Route component={App} path="/" exact />
          <Route component={AddMovie} path="/movie" exact />
          <Route component={ContactUs} path="/contactus" exact />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);