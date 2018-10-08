import React, { Component } from 'react';
import SearchBar from './SearchForm';
import Navbar from './Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <SearchBar/>
      </div>
    );
  }
}

export default App;
