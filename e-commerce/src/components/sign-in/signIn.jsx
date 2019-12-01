import React, { Component } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../Button/custom-button";
import { signInWithGoogle } from "../../firebase/firebase.utils";




class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            label="Email"
            handleChange={this.handleChange}
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            required
            handleChange={this.handleChange}
          />

          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} >SIGN IN WITH GOOGLE</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
