import React, { useEffect, useState } from "react";
import { Link, Redirect, Route } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";
import { firebaseAuth } from "../../fisebase";

export const Auth = () => {

  const [isLoggedin, setIsLoggedIn] = useState(false)
  //componentDidMount
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if(user){
        console.log(user);
        setIsLoggedIn(true);
      }
    })
  }, []);

  if(isLoggedin){
    return <Redirect to="/home"/>
  }
  return (
    <div>
      <div>
        <Link to="/auth/login">Login</Link>
        &nbsp;
        <Link to="/auth/register">Register</Link>
      </div>
      <div>
        <Route path="/auth/register" component={Register} />
        <Route path="/auth/login" component={Login} />
      </div>
    </div>
  );
};
