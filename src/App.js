import './App.css';
import React from 'react';
import { Component } from 'react';
import MainContainer from './containers/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="App-Container">
        <MainContainer/>
      </div>
    );
  }
}

export default App;
