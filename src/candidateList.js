import React, { Component } from 'react';
import Candidate from './candidatePage';
import './App.scss';

class CandidateList extends Component {
  constructor() {
    super();
    this.state = {
      candidates: [],
      isLoaded: false,
      chosen: {}
    }
  }

  // make an api call to add all candidate names to the state array
  componentWillMount() {
    fetch('http://localhost:3010/candidates')
    .then(results =>{
      return results.json();
    }).then(data => {
      data.forEach(person => {
        this.setState({ 
          isLoaded: true,
          candidates: [...this.state.candidates, person] })
      })
    })
  }

  handleNameClick(e) {
    console.log("EVENT", e.target)
    this.setState({ chosen: e.target})
    console.log(this.state.chosen)
  }

  render() {

    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="main-pg">
          <div className="name-list">
            <div className="list-title">
              CANDIDATES
            </div>
            <ul>
              {this.state.candidates.map(candidate => {
                if (candidate.name) {
                  return (
                    <li key={candidate.id}>
                    <button 
                      className="name-btn" 
                      onClick={this.handleNameClick.bind(this)}
                      value={this.state.chosen}
                    >
                      {candidate.name}
                    </button>
                  </li>
                  )
                }
              })}
            </ul>
          </div>
          <Candidate />
        </div>
      );
      
    }


    
  }
}

export default CandidateList;
