import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from './pages/home-page';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
