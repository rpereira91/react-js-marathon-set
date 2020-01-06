
import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import './style/main.css'
class Rest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: this.props.restTime,
            showBtn: true,
        }
        this.timeLeft = this.state.seconds;
        this.tick = this.tick.bind(this);
        this.startCountDown = this.startCountDown.bind(this);
        this.stopCountDown = this.stopCountDown.bind(this);
    }
    tick() {

        var sec = this.timeLeft;

        this.setState({
            seconds: sec,
        })

        if (sec < 10) {
            this.setState({
                seconds: "0" + this.state.seconds,
            })

        }

        if (sec === 0) {
            clearInterval(this.intervalHandle);
            this.stopCountDown();
        }


        this.timeLeft--;
    }
    startCountDown() {
        this.setState({ showBtn: false });
        this.intervalHandle = setInterval(this.tick, 1000);
        this.timeLeft = this.state.seconds;
    }
    stopCountDown() {
        clearInterval(this.intervalHandle);
        this.props.endRest();
    }
    restButton() {
        if (this.state.showBtn) {
            return (
                <div>
                    <Button variant="secondary" onClick={this.startCountDown}>Begin Rest</Button>
                </div>
            );
        } else {
            return (

                < div >
                    <Button variant="secondary" onClick={this.stopCountDown}>Begin Workout</Button>
                </div >
            );
        }
    }
    render() {
        return (
            <Container className='rest'>
                <h2> Rest</h2>
                <h3>{this.state.seconds} s</h3>
                {this.restButton()}
            </Container>
        );
    }
}

export default Rest;