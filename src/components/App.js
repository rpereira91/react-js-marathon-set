import React, { Component } from 'react';
import Rest from './Rest';
import SetWeight from './SetWeight';
import Active from './Active';
import DisplayStats from './DisplayStats';
import { Container, Alert, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css';

import SetContainer from './SetContainer';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyWeight: 0,
      maxReps: 0,
      repsDone: 0,
      showRest: false,
      showInfo: false,
      workoutDone: false,
      nextSet: 1,
      restTime: 40,


    }
    this.startRest = this.startRest.bind(this);
    this.setWeightReps = this.setWeightReps.bind(this);
    this.setRest = this.setRest.bind(this);
    this.addSet = this.addSet.bind(this);
    this.showDone = this.showDone.bind(this);
    this.clearInfo = this.clearInfo.bind(this);
    this.infoModal = this.infoModal.bind(this);

  }
  setWeightReps(weight, reps, rest) {
    console.log(weight, reps);
    this.setState({
      bodyWeight: weight,
      maxReps: reps,
      restTime: rest
    })
  }

  displayWeight() {
    if (this.state.bodyWeight) {
      var setsLeft = parseInt((this.state.bodyWeight - this.state.repsDone) / this.state.maxReps);
      var stats = {
        "bodyWeight": this.state.bodyWeight,
        "repsDone": this.state.repsDone,
        "maxReps": this.state.maxReps,
        "setsLeft": setsLeft
      };
      return (
        <div>
          <DisplayStats currentStats={stats} />
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
    if (repTotal > this.state.bodyWeight) {
      this.setState({ workoutDone: true })
    }
  }
  showDone() {
    if (this.state.workoutDone) {
      return (
        <div className="done">
          <h1>Workout Done</h1>
        </div>
      );
    } else if (this.state.bodyWeight) {
      return (
        <div className="summary">
          <h1>Workout Summary</h1>
        </div>
      );

    }
  }
  clearInfo(event) {
    this.setState({
      bodyWeight: 0,
      maxReps: 0,
      repsDone: 0,
      showRest: false,
      workoutDone: false,
      nextSet: 1,
      restTime: 40
    });
    log = []
  }
  infoModal() {
    this.setState({ showInfo: !this.state.showInfo })
  }
  render() {
    return (
      <div className="app-container">
        <div className="header">
          <h2 onClick={this.infoModal}>Show Info</h2>
          <Modal show={this.state.showInfo} onHide={this.infoModal}>
            <Modal.Header closeButton>
              <Modal.Title>Information</Modal.Title>
            </Modal.Header>
          </Modal>
        </div>
        <Container>

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
          <div className="inner-content">

            <SetContainer log={log} />
          </div>

        </Container>

      </div>
    )
  }
}

var log = [];
