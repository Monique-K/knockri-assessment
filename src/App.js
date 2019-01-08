import React, { Component } from 'react';
import CandidateList from './candidateList';
import Candidate from './candidatePage';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">

        <CandidateList />
        <Candidate />

      </div>
    );
  }
}

export default App;
