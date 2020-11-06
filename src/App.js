import React, { useState } from 'react';
import './App.css';
import { UserContext } from "./components/UserContext";
import ProtectedRoute from './components/ProtectedRoute';

import Homepage from './components/Homepage/Homepage.js';
import SignUp from './components/SignUp/SignUp.js';
import Login from './components/Login/Login.js';
import Profile from './components/Profile/Profile.js';
import Playing from './components/Playing/Playing.js';
import Writing from './components/Writing/Writing.js';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


const App = () => {
  let [user, setUser] = useState({
    id: '',
    username: '',
    name: '',
    email: ''
  })

  let [userLogin, setUserLogin] = useState(false)

 


  console.log(user)


  return (
    <Router>

      <div>
        <UserContext.Provider value={{ userValue: [user, setUser], userLoginValue: [userLogin, setUserLogin] }}>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={Login} />
            <ProtectedRoute path="/profile/id/:id" exact component={Profile} />
            <Route path="/playing" exact component={Playing} /> {/* fix this later, currently hardcoded */}
            <Route path="/writing" exact component={Writing} /> {/* fix this later, currently hardcoded */}
            <Route path="*" component={() => "404 NOT FOUND"} />

          </Switch>
        </UserContext.Provider>

      </div>
    </Router>

  );

}

export default App;
