import React, { useState, useContext, } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { UserContext } from "./UserContext";


const ProtectedRoute = ({
    component: Component,
    ...rest
  }) => {
      
    let {userValue, userLoginValue} = useContext(UserContext)
    let [ user, setUser ] = userValue
    let [userLogin, setUserLogin] = userLoginValue
    return (
      <Route
        {...rest}
        render={props => {
          if (userLogin==true) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        }}
      />
    );
  };

  export default ProtectedRoute;