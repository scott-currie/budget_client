import React, { Component } from 'react';
import superagent from 'superagent';


class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    // this.handleSearch = this.handleSearch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleUsernameChange = this.handleChange.bind(this)
    // this.handlePasswordChange = this.handleChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

//   handleUsernameChange(e) {
//       this.setState({[e.target.name]: e.target.value})
//   }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

//   handlePasswordChange(e) {
//     this.setState({[e.target.name]: e.target.value})
//   }

  handleSubmit(e) {
    e.preventDefault()
    const url = `http://localhost:8000/api/v1/login`
    superagent.post(url)
    .send({username: this.state.username,
        password: this.state.password})
    .then(res => {
        console.log(res.body.token)
    })
  }

  render() {
    return (
      <div className="LoginForm">

        <h3>Login Form</h3>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
            <button type="submit">Log In</button>

        </form>

      </div>
    )
  }
}

export default LoginForm;
