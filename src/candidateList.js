import React, { Component } from 'react';
import './App.scss';

class CandidateList extends Component {
  constructor() {
    super();
    this.state = {
      candidates: []
    }
  }

  // make an api call to add all candidate names to the state array
  componentWillMount() {
    fetch('http://localhost:3010/candidates')
    .then(results =>{
      return results.json();
    }).then(data => {
      data.forEach(person => {
        this.setState({ candidates: [...this.state.candidates, person.name] })
      })
    })
  }

  render() {
    return (
      <div className="name-list">
        <ul>
          {/* {this.state.candidates.forEach(candidate => {
            return candidate.name
          })} */}
        </ul>
      </div>
    );
  }
}

export default CandidateList;
