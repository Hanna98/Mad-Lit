import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.js';
import Homepage from './components/Homepage/Homepage.js';
import SignUp from './components/SignUp/SignUp.js';
import Login from './components/Login/Login.js';
import Profile from './components/Profile/Profile.js';
import Playing from './components/Playing/Playing.js';
import Writing from './components/Writing/Writing.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user:{
        id:'',
        username:'',
        name:'',
        email:'',
        
      }
      
    }
  }

  loadUser = (data) => {
    this.setState({user:{
      id: data.id,
      username: data.username,
      email: data.email,
    }})
  }




// add cards to homepage 

  render() {
  
    return (
      <Router>
        
        <div>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/signup" exact component={SignUp} loadUser={this.loadUser}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/playing" exact component={Playing}/> {/* fix this later, currently hardcoded */}
            <Route path="/writing" exact component={Writing}/> {/* fix this later, currently hardcoded */}
          </Switch>
      </div>
      </Router>
      
    );
  }
}

export default App;
