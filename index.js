import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  workout = {
    title: 'bench',
    weight: 125,
    reps: 10, 
    setNumber: 1
  }


  render() {
    return (
      <div>
        <p>{this.workout.setNumber}/4</p>
        <p>{this.workout.title}</p>
        <div className="weight-row">
        <button>-</button>
        <p>{this.workout.weight}</p>
        <button>+</button> 
        </div>
        <p>{this.workout.reps}</p>
        <button>next</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
