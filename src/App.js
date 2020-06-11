import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.js';
import Homepage from './components/Homepage/Homepage.js';
import SignUp from './components/SignUp/SignUp.js';
import Login from './components/Login/Login.js';
import Playing from './components/Playing/Playing.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

// add cards to homepage 

  render() {
  
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={Login}/>

            <Route path="/playing" exact component={Playing}/> {/* fix this later, currently hardcoded */}
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
