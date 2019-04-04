import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormContainer from './containers/FormContainer';
import HomePage from './containers/HomePage';

class App extends Component {
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <HomePage/>
      </div>
    );
  }
}

export default App;
