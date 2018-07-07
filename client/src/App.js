import React from 'react';
import NoMatch from './Pages/NoMatch';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';


const App = () => (
  <Router>
    <div>
      
      <Switch>
       <Route exact path='/' component = {Home} />
        <Route component = {NoMatch} />
      </Switch>
    </div>
  </Router>
); 

export default App;
