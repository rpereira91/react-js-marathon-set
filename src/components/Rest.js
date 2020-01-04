
import React, { Component } from 'react';
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
            // clearInterval(this.intervalHandle);
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
                    <button onClick={this.startCountDown}>Begin Rest</button>
                </div>
            );
        } else {
            return (

                < div >
                    <button onClick={this.stopCountDown}>Begin Workout</button>
                </div >
            );
        }
    }
    render() {
        return (
            <div>
                <h2> Rest for: {this.state.seconds} seconds</h2>
                {this.restButton()}
            </div>
        );
    }
}

export default Rest;