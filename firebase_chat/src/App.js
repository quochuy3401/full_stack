import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import { Register } from "./components/Auth/Register";
import {Login} from "./components/Auth/Login"
import { Auth } from "./components/Auth/Auth";
import {Home} from "./components/Home/Home"

function App() {
  return (
    <div className="App">
      
      <Route path="/auth" component={Auth}/>
      <Route path="/home" component={Home}/>
    </div>
  );
}

export default App;
