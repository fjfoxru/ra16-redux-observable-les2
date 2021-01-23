import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ServiceItem from './Service';
import Services from './Services';

function App() {
  return (
    <Router>
    <Switch>
      <Route path='/:id' component={ServiceItem}/>
      <Route path='/' component={Services} />
    </Switch>
    </Router>
  );
}

export default App;
