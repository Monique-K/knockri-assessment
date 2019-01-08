import React, { Component } from 'react';
import CandidateList from './candidateList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CandidateList />
      </div>
    );
  }
}

export default App;
