import React, { Component } from 'react';
import './App.css';

class CandidateList extends Component {
  constructor() {
    super();
    this.state = {
      candidates: []
    }
  }

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

  // async componentDidMount(){
  //   let people = this.state.candidates
  //    const listPerson = async (people) => {
  //     console.log("PEOPLE", this.state.candidates)
  //     await people.forEach(person => {
  //       console.log(person)
  //       return (
  //         <li className="list-item">
  //           {person} 
  //           BLAH
  //           <n />
  //         </li> 
  //       )
  //     })
  //     return listPerson
  //   }
  // }

 

  render() {
    return (
      <div className="name-list">
        <ul>
          {this.state.candidates.forEach(candidate => {
            console.log("dfgfdgs")
            return candidate.name
          })}
        </ul>
      </div>
    );
  }
}

export default CandidateList;
