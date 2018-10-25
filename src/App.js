import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Navbar from './Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <SearchForm/>
      </div>
    );
  }
}

export default App;
