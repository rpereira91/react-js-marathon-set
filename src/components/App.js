import React, { Component } from 'react';
import Rest from './Rest';
import SetWeight from './SetWeight';
import Active from './Active';
import DisplayStats from './DisplayStats';
import InfoBar from './InfoBar';
import { Container, Alert, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css';

import SetContainer from './SetContainer';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReps: 0,
      maxReps: 0,
      repsDone: 0,
      showRest: false,
      workoutDone: false,
      showStatsAlert: false,
      nextSet: 1,
      restTime: 40,
      workoutInfo: {},


    }
    this.startRest = this.startRest.bind(this);
    this.setWeightReps = this.setWeightReps.bind(this);
    this.setRest = this.setRest.bind(this);
    this.addSet = this.addSet.bind(this);
    this.showDone = this.showDone.bind(this);
    this.clearInfo = this.clearInfo.bind(this);
    this.showSets = this.showSets.bind(this);
    this.setStats = this.setStats.bind(this);
    this.setInfo = this.setInfo.bind(this);

  }
  setWeightReps(weight, reps, rest) {
    this.setState({
      totalReps: weight,
      maxReps: reps,
      restTime: rest
    })
  }
  setInfo(){
    var setsLeft = parseInt((this.state.totalReps - this.state.repsDone) / this.state.maxReps);
    var repsLeft = parseInt((this.state.totalReps - this.state.repsDone));
    var stats = {
      "totalReps": this.state.totalReps,
      "repsDone": this.state.repsDone,
      "repsLeft": repsLeft,
      "setsLeft": setsLeft
    };
    this.setState({workoutInfo: stats})
    // this.workoutInfo = stats;
  }
  displayWeight() {
    if (this.state.totalReps) {
      
      return (
        <div>
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
          <Active reps={this.state.maxReps} startRest={this.setRest} addSet={this.addSet} repsDone={this.state.repsDone} currentSet={this.state.nextSet} />
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
    if (repTotal > this.state.totalReps) {
      this.setState({ workoutDone: true })
    }
    this.setInfo()
  }
  showDone() {
    if (this.state.workoutDone) {
      return (
        <div className="done">
          <h1>Workout Done</h1>
        </div>
      );
    } else if (this.state.totalReps) {
      return (
        <div className="summary">
          <h1>Workout Summary</h1>
        </div>
      );

    }
  }
  clearInfo(event) {
    this.setState({
      totalReps: 0,
      maxReps: 0,
      repsDone: 0,
      showRest: false,
      workoutDone: false,
      nextSet: 1,
      restTime: 40
    });
    log = []
  }
  showSets() {
    if (log.length > 0) {
      return (
        <div>
          <SetContainer log={log} />
        </div>
      )
    }
  }
  setStats() {
    this.setState({ showStatsAlert: !this.state.showStatsAlert})
  }
  render() {
    return (
      <div className="app-container">

        <InfoBar clearInfo={this.clearInfo} setStats={this.setStats} statsAlert = {this.state.showStatsAlert} />
        <Container>
          <Alert show={this.state.showStatsAlert}>
            <DisplayStats currentStats={this.state.workoutInfo} />
          </Alert>
          {this.displayWeight()}
          {/* {this.startRest()} */}
          {/* {this.showDone()} */}
          <Alert show={this.state.workoutDone} variant="success" className="done">
            <Alert.Heading>Workout Over!</Alert.Heading>
            <p>
              You finished your workout in {this.state.nextSet - 1} {this.state.nextSet - 1 > 1 ? "sets" : "set"} completeing {this.state.repsDone} reps!
        </p>
            <Button variant="danger" onClick={this.clearInfo}>Start Over</Button>
          </Alert>
          {this.showSets()}

        </Container>

      </div>
    )
  }
}

var log = [];
