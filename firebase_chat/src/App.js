import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import { Register } from "./components/Auth/Register";
import {Login} from "./components/Auth/Login"
import { Auth } from "./components/Auth/Auth";

function App() {
  return (
    <div className="App">
      
      <Route path="/auth/" component={Auth}/>
    </div>
  );
}

export default App;
