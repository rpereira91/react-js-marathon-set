import React, { Component } from 'react';
import Rest from './components/Rest';
import SetWeight from './components/SetWeight';
import Active from './components/Active';
import DisplaySet from './components/DisplaySet';
import SetContainer from './components/SetContainer';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyWeight: 0,
      maxReps: 0,
      repsDone: 0,
      showRest: false,
      workoutDone: false,
      nextSet: 1,
      restTime: 20

    }
    this.startRest = this.startRest.bind(this);
    this.setWeightReps = this.setWeightReps.bind(this);
    this.setRest = this.setRest.bind(this);
    this.addSet = this.addSet.bind(this);
    this.showDone = this.showDone.bind(this);
  }
  setWeightReps(weight, reps) {
    console.log(weight, reps);
    this.setState({
      bodyWeight: weight,
      maxReps: reps
    })
  }

  displayWeight() {
    if (this.state.bodyWeight) {
      const setsLeft = parseInt((this.state.bodyWeight - this.state.repsDone) / this.state.maxReps);
      return (
        <div>
          Weight: {this.state.bodyWeight}
          <br></br>
          Max reps: {this.state.maxReps}
          <br></br>
          Reps Done: {this.state.repsDone}
          <br></br>
          Approx. Sets: {setsLeft}
          {this.startRest()}
        </div>
      );
    } else {
      return (
        <SetWeight setWeightReps={this.setWeightReps} />
      );
    }
  }
  setRest() {
    this.setState({
      showRest: !this.state.showRest
    })
  }
  startRest() {
    if (this.state.showRest) {
      return (
        <Rest endRest={this.setRest} restTime={this.state.restTime} />
      )
    } else {
      return (
        <div>
          <Active reps={this.state.maxReps} startRest={this.setRest} addSet={this.addSet} repsDone={this.state.repsDone} currentSet={this.state.nextSet}/>
        </div>
      )

    }
  }
  addSet(set) {
    var newRest = this.state.restTime
    var newReps = this.state.maxReps
    var repTotal = parseInt(this.state.repsDone) + parseInt(set.reps)
    if (set.reps > this.state.maxReps) {
      newReps = set.reps - 1 > 0 ? set.reps - 1 : 1
      newRest = this.state.restTime - 10 > 10 ? this.state.restTime - 10 : 10
    } else if (set.reps < this.state.maxReps) {
      newReps = set.reps - 3 > 0 ? set.reps - 3 : 1
      newRest = this.state.restTime + 10
    }
    this.setState({ maxReps: newReps, restTime: newRest, repsDone: repTotal, nextSet: this.state.nextSet + 1 })
    log = [set, ...log];
    if (repTotal > this.state.bodyWeight) {
      this.setState({ workoutDone: true })
    }
  }
  showDone() {
    if (this.state.workoutDone) {
      return (
        <div>
          <h1>Workout Done</h1>
        </div>
      );
    } else if(this.state.bodyWeight){
        return (
          <div>
            <h1>Workout Summary</h1>
          </div>
        );

    }
  }
  render() {
    return (
      <div>
        {this.displayWeight()}
        {/* {this.startRest()} */}
        {this.showDone()}
        <SetContainer log={log}/>
        {/* {log.map((l) =>
          <div>
            <DisplaySet currentSet={l} />
          </div>
        )} */}
      </div>
    )
  }
}

var log = [];
