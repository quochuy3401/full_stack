import React, { useState } from "react";
import { Input } from "../share/Input";
import {useHistory} from "react-router-dom"

export const Login = () => {
  const [inputvalue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const history= useHistory();
  const handleChange = (event) => {
    setInputValue({
      ...inputvalue,
      [event.target.name]: event.target.value,
    });
  };

  const goToRegister=()=>{
    history.push("/auth/register")
  }

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <Input
            label="Email"
            name="email"
            type="text"
            onChange={handleChange}
            value={inputvalue.email}
          />
        </div>
        <div>
          <Input
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
            value={inputvalue.password}
          />
        </div>
        <div>
            <button type="submit">Login</button>
            <button type="button" onClick={goToRegister}>Go to register</button>
        </div>
      </form>
    </div>
  );
};
