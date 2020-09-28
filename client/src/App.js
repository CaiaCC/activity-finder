import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Activities from './components/Activities';
import Activity from './components/detail/Activity'
import Bookings from './components/Bookings';

function App (props){
  
    return(
      <Switch>
        <Route exact path='/' component={Activities}/>
        <Route exact path='/activities/:id' component={Activity}/>
        <Route path='/api/bookings' component={Bookings}/>
        <Route path='/' component={Activities}/>

        
      </Switch>
    )
  
}

export default App;
