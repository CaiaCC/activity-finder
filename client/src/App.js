import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Activities from './components/Activities';
import Nav from './components/Nav';

export default function App() {
  
  return (
      <Router>
        <Nav/>

        <Switch>
          <Route path="/" component={Activities}/>
        </Switch>
      </Router>
  )
}

