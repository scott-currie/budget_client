import React, { Component } from 'react';
// import './App.css';
import LoginForm from '../login-form/login-form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(searchResults) {
    this.setState({results: searchResults})
  }



  render() {
    return (
      <div className="Landing">
        <h3>Landing Section</h3>
        <LoginForm />

      </div>
    )
  }
}

export default App;
