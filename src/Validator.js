import React, { Component } from 'react';
import "./Validator.css";
import Password from "./password.js"

class Validator extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: ''
    };
    handleEmail (e){
      this.setState({
        email: e.target.value
      })
    }
    handlePassword (e){
      this.setState({
        password: e.target.value
      })
    }
    handlePasswordConfirm (e){
      this.setState({
        passwordConfirm: e.target.value
      })
    }
    handleSubmit (e){
      e.checkValidity()
    }
    checkValidity(){
      if (this.state.password ===this.state.passwordConfirm){
        this.setState({valid: true})
      }else{
        this.setState({valid: false})
    }
  }
  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input onChange=(e) => {this.handleEmail(e)} type="text" placeholder="email" />
        <input onChange=(e) => {this.handlePassword(e)} type="password" placeholder="password" />
        <input onChange=(e) => {this.handlePasswordConfirm(e)} type="password" placeholder="confirm password" />
        <input type="submit" onClick=(e) => {this.handleSubmit(e)} value="Submit" />
      </div>
    );
  }
}

export default Validator;
