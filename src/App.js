import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './Components/Register';
import MainPage from './Components/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
