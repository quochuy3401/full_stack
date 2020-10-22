import React from "react";
import { Link, Route } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";

export const Auth = () => {
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
