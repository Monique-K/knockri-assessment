import React, { Component } from 'react';
import './App.scss';

class Candidate extends Component {
  constructor() {
    super();
    this.state = {
      comments: "",
      id: ""
    }
  }

  // As the user types, save the comments in state
  handleComments(e) {
    this.setState({comments: e.target.value})
  }

  // Post the new comment to the API
  saveComment() {
    fetch(`http://localhost:3010/candidates/${this.state.id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: this.state.comments,
      })
    })
    // this.setState({comments: ""})
  }

  render() {
    return (
      <div className="candidate">

        <div className="candidate-name">
          Steve Stevenson
        </div>

        <br />

        <div className="question">
          Example Question?
        </div>

        <br />

        <div className="video">
        </div>

        <br />

        <div className="comments">
            <input 
              type="text" 
              name="notes" 
              value={this.state.comments} 
              className="comments"
              onChange={this.handleComments.bind(this)}
            >
            </input>
            <button 
              className="save-btn" 
              onClick={this.saveComment()}
              placeholder="notes"
            >
            Save
            </button>
        </div>

      </div>
    );
  }
}

export default Candidate;
