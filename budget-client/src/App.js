import React, { Component } from 'react';
import './App.css';
// import SearchForm from './search-form/search-form';
// import SearchResultList from './search-result-list/search-result-list';
import Landing from './landing/landing'
// import LoginForm from './login-form/login-form'

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
      <div className="App">
        <h2>React Budget Client</h2>

        <Landing />

      </div>
    )
  }
}

export default App;
