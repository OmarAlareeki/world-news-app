import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/home';
import Sports from '../../pages/sports';
import Politics from '../../pages/politics';
import Health from '../../pages/health';
import Business from '../../pages/business';
import Navigation from '../navbar/navPages/navbar';

function App() {
  return (
  <div>
    <Navigation/>
    <Switch>
      <Route path='/home' component={Home}/>                
      <Route path='/sports' component={Sports}/>  
      <Route path='/politics' component={Politics}/>               
      <Route path='/health' component={Health}/> 
      <Route path='/business' component={Business}/>              
    </Switch>
  </div>
  );
}

export default App;
