import React, { Component } from 'react'
import { Navbar, Nav, Modal, Alert, Button } from 'react-bootstrap';

export default class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfo: false,
            clearStat: false,
        }
        this.infoModal = this.infoModal.bind(this);
        this.clearStatAlert = this.clearStatAlert.bind(this);

    }
    clearStatAlert() {
        this.setState({ clearStat: !this.state.clearStat })
    }
    infoModal() {
        this.setState({ showInfo: !this.state.showInfo })
    }
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="md">
                    <Navbar.Brand>Marathon Set</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav.Link onClick={this.infoModal}>About</Nav.Link>
                        <Nav.Link onClick={this.clearStatAlert}>Clear</Nav.Link>
                        <Nav.Link onClick={() => { this.props.setStats() }}>{this.props.statsAlert ? "Dismiss" : "Workout Info"}</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
                <Modal show={this.state.showInfo} onHide={this.infoModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>About Burnout</Modal.Title>
                    </Modal.Header>
                    <p>
                        I use this after I finish a workout and want to get in one last bodyweight lift in before I'm done. Put in the number of reps
                        you want to perform, reps/set and seconds you want to rest. During the workout record your sets and the app will count down the rest for you.
                        <br></br> 
                        I also have it so it adjusts the reps/rest depending on your last set. If you failed it drops the number of reps and increases the rest time. If you overshot it, 
                        it decreases the rest.  
                    </p>
                </Modal>
                <Alert show={this.state.clearStat} variant="danger" className="done">
                    <Alert.Heading>Start Over</Alert.Heading>
                    <p>
                        Are you sure you want to start over?
        </p>
                    <Button variant="danger" onClick={() => {
                        this.clearStatAlert()
                        this.props.clearInfo()
                    }}>Start Over</Button>
                    <Button variant="success" onClick={() => {
                        this.clearStatAlert()
                    }}>Cancel</Button>
                </Alert>
            </div>
        )
    }
}
