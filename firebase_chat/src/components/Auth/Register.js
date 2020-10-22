import React, { Component } from "react";
import { Input } from "../share/Input";
import { firebaseAuth } from "../../fisebase";

export class Register extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    status: "default", // default, success, error
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //TODO: validate input
    firebaseAuth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({
          status: "success",
        });
      })
      .catch(() => {
        this.setState({
          status: "error",
        });
      });
  };

  backToLogin = () => {
    console.log(this.props);
    this.props.history.push("/auth/login");
  };

  render() {
    const { status, email, password, confirmPassword } = this.state;
    return (
      <div>
        <h2>Register</h2>
        {status === "success" && (
          <p className="msg-success">Register successfully</p>
        )}
        {status === "error" && (
          <p className="msg-error">Oops? Something went wrong</p>
        )}
        <form onSubmit={this.handleSubmit}>
          <div>
            <Input
              label="Email"
              type="text"
              value={email}
              onChange={this.handleChange}
              name="email"
            />
          </div>
          <div>
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={this.handleChange}
              name="password"
            />
          </div>
          <div>
            <Input
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={this.handleChange}
              name="confirmPassword"
            />
          </div>
          <button type="submit">Register</button>
          <button type="button" onClick={this.backToLogin}>
            Back to login
          </button>
        </form>
      </div>
    );
  }
}
