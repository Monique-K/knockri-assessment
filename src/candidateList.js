import React, { Component } from 'react';
import './App.scss';

class CandidateList extends Component {
  constructor() {
    super();
    this.state = {
      candidates: [],
      isLoaded: false
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
          candidates: [...this.state.candidates, person.name] })
      })
    })
  }

  render() {

    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="name-list">
          <ul>
            {this.state.candidates.map(candidate => {
              if (candidate) {
                return <li>{candidate}</li>
              }
            })}
          </ul>
        </div>
      );
      
    }


    
  }
}

export default CandidateList;
